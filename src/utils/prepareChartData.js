export const prepareChartData = (transactions) => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

    return months.map(month => {
        const monthlyData = transactions.filter(t => {
            const date = new Date(t.date)
            return date.getMonth() === months.indexOf(month)
        })

        const income = monthlyData.filter(t => t.type === 'income').reduce((sum, t) => sum + t.amount, 0)
        const expense = monthlyData.filter(t => t.type === 'expense').reduce((sum, t) => sum + t.amount, 0)
        return { month, income, expense }
    })
}   