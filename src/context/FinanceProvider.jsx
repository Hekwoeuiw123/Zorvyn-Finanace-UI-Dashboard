import { createContext, useContext, useEffect, useMemo } from "react"
import useLocalstorage from "../hooks/useLocalstorage"
import { CATEGORIES, INITIAL_TRANSACTIONS } from "../data/mockData"

const FinanceContext = createContext()

export const useFinance = () => useContext(FinanceContext)

export default function FinanceProvider({ children }) {
    const [transactions, setTransavtions] = useLocalstorage('transactions', INITIAL_TRANSACTIONS)
    const [userRole, setUserRole] = useLocalstorage('userRole', 'viewer')
    const [theme, setTheme] = useLocalstorage('theme', 'dark')

    useEffect(() => {
        const root = document.documentElement
        if (theme === 'light') {
            root.classList.remove('dark')
            root.setAttribute('data-theme', 'light')
        } else {
            root.classList.add('dark')
            root.setAttribute('data-theme', 'dark')
        }
    }, [theme])

    const summary = useMemo(() => {
        const income = transactions.filter(t => t.type === 'income').reduce((sum, t) => sum + t.amount, 0)
        const expense = transactions.filter(t => t.type === 'expense').reduce((sum, t) => sum + t.amount, 0)
        const balance = income - expense
        const transactionCount = transactions.length
        const categoryBreakdown = CATEGORIES.reduce((acc, category) => {
            acc[category] = transactions.filter(t => t.category === category && t.type === 'expense').reduce((sum, t) => sum + t.amount, 0)
            return acc
        }, {})

        return { income, expense, balance, transactionCount, categoryBreakdown }
    }, [transactions])

    const canEdit = userRole === 'admin'

    const addTransaction = (tranx) => {
        if (!canEdit) return
        setTransavtions((prev) => [{ ...tranx, id: Date.now() }, ...prev])
    }

    const updateTransaction = (id, updatedData) => {
        if (!canEdit) return
        setTransavtions((prev) => prev.map(t => t.id === id ? { ...t, ...updatedData, id } : t))
    }

    const deleteTransaction = (id) => {
        if (!canEdit) return
        setTransavtions((prev) => prev.filter(t => t.id !== id))
    }

    const value = {
        transactions,
        theme,
        setTheme,
        userRole,
        setUserRole,
        canEdit,
        summary,
        addTransaction,
        updateTransaction,
        deleteTransaction
    }

    return <FinanceContext.Provider value={value}>
        {children}
    </FinanceContext.Provider>;
}
