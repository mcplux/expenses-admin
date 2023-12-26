export const formatMoney = number => {
    return Number(number).toLocaleString('es-US', {
        style: 'currency',
        currency: 'USD',
    })
}

export const generateId = () => {
    const date = Date.now().toString(36)
    const random = Math.random().toString(36).substring(2)

    return date + random
}
