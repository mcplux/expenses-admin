export const formatMoney = number => {
    return Number(number).toLocaleString('es-US', {
        style: 'currency',
        currency: 'USD',
    })
}
