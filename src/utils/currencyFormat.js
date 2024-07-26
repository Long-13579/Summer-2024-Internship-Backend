export function formatToVND(params) {
    const valueFormatted = params.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return `${valueFormatted} VND`;
}