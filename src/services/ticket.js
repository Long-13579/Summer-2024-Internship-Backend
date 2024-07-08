import * as ticket from '../repositories/ticket.js';
import { configPathEnv, env } from '../config/config.js';
import moment  from 'moment';
import querystring from 'qs';
import { createHmac } from 'crypto'

const config = configPathEnv[env].vnp;

export async function getAll() {
    return await ticket.getAll();
}

export async function getById(ticketId) {
    return await ticket.getById(ticketId);
}

export async function getByUserId(userId) {
    return await ticket.getByUserId(userId);
}

export async function getTicket({id, userId}) {
    if (id) {
        return await getById(id)
    }

    if (userId) {
        return await getByUserId(userId)
    }

    return await getAll();
}

export async function create(ticketInfo) {
    return await ticket.create(ticketInfo);
}

export async function updatePaymentStatus(ticketId, isPaid) {
    await ticket.updateTicketPayment(ticketId, isPaid);
}

export async function drop(tickeId) {
    await ticket.drop(tickeId);
}

export async function getPaymentUrl({
    ipAddr, 
    amount, 
    description, 
    remainTime,
    returnUrl
}) {
    process.env.TZ = 'Asia/Ho_Chi_Minh';

    const tmnCode = config.vnp_TmnCode;
    let vnpUrl = config.vnp_Url;
    let orderType = 'other';
    
    const date = new Date();

    const createDate = moment(date).format('YYYYMMDDHHmmss');
    const expireDate = moment(date).add(remainTime, 'seconds').format('YYYYMMDDHHmmss');
    const orderId = moment(date).format('DDHHmmss');
    const locale = 'vn';
    const currCode = 'VND';

    let vnp_Params = {
        vnp_Version: '2.1.0',
        vnp_Command: 'pay',
        vnp_TmnCode: tmnCode,
        vnp_Locale: locale,
        vnp_CurrCode: currCode,
        vnp_TxnRef: orderId,
        vnp_OrderInfo: description,
        vnp_OrderType: orderType,
        vnp_Amount: amount * 100,
        vnp_ReturnUrl: returnUrl,
        vnp_ExpireDate: expireDate,
        vnp_IpAddr: ipAddr,
        vnp_CreateDate: createDate,
    };
    
    vnp_Params = sortObject(vnp_Params);

    const signed = generateSecretKey(vnp_Params);
    
    vnp_Params['vnp_SecureHash'] = signed;
    vnpUrl += '?' + querystring.stringify(vnp_Params, {encode: false});

    return vnpUrl;
}

function sortObject(obj) {
	let sorted = {};
	let str = [];
	let key;
	for (key in obj){
		if (obj.hasOwnProperty(key)) {
		    str.push(encodeURIComponent(key));
		}
	}
	str.sort();
    for (key = 0; key < str.length; key++) {
        sorted[str[key]] = encodeURIComponent(obj[str[key]]).replace(/%20/g, "+");
    }
    return sorted;
}

function generateSecretKey(vnp_Params) {
    const secretKey = config.vnp_HashSecret;
    
    const signData = querystring.stringify(vnp_Params, {encode: false});
    const hmac = createHmac('sha512', secretKey);
    const signed = hmac.update(Buffer.from(signData, 'utf-8')).digest('hex');

    return signed
}