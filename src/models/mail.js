import nodemailer from 'nodemailer';
import { configPathEnv, env } from '../config/config.js';

const {service, host, port, secure, auth} = configPathEnv[env].email;

const transporter = nodemailer.createTransport({
    service,
    host,
    port,
    secure,
    auth
});

export default transporter;