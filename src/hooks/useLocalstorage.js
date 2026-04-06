import { useEffect, useState } from "react"


const useLocalstorage = (key, initialValue) => {
    const [storage, setStorage] = useState(() => {
        try {
            const storedValue = localStorage.getItem(key)
            return storedValue ? JSON.parse(storedValue) : initialValue
        } catch (error) {
            console.error("Error parsing transactions from localStorage:", error)
            return initialValue
        }
    })

    useEffect(() => {
        try {
            localStorage.setItem(key, JSON.stringify(storage))
        } catch (error) {
            console.error("Error setting transactions to localStorage:", error)
        }
    }, [key, storage])

    return [storage, setStorage]
}

export default useLocalstorage