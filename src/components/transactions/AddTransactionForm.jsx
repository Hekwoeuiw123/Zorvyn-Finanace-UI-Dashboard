import { useState, useEffect } from "react";
import { useFinance } from "../../context/FinanceProvider";
import { CATEGORIES } from "../../data/mockData";

const AddTransactionForm = ({ onClose, editData = null }) => {
    const { addTransaction, updateTransaction } = useFinance();

    const [formData, setFormData] = useState({
        description: "",
        amount: "",
        category: CATEGORIES[0],
        type: "expense",
        date: new Date().toISOString().split('T')[0]
    });

    // Pre-fill form when editing
    useEffect(() => {
        if (editData) {
            setFormData({
                ...editData,
                amount: Math.abs(editData.amount)
            });
        }
    }, [editData]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const finalData = {
            ...formData,
            amount: parseFloat(formData.amount),
        };
        if (editData) {
            updateTransaction(editData.id, finalData);
        } else {
            addTransaction(finalData);
        }
        onClose();
    };

    // Theme-aware classes
    const inputClass = "w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-sm text-slate-100 placeholder:text-slate-600 focus:ring-2 focus:ring-blue-500/60 focus:border-blue-500 outline-none transition-all";
    const labelClass = "block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 ml-0.5";

    return (
        <form onSubmit={handleSubmit} className="space-y-5">

            {/* Income / Expense toggle */}
            <div className="flex bg-slate-950 p-1 rounded-xl border border-slate-800">
                <button
                    type="button"
                    onClick={() => setFormData({ ...formData, type: 'income' })}
                    className={`flex-1 py-2.5 text-xs font-bold rounded-lg transition-all ${formData.type === 'income'
                        ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-900/30'
                        : 'text-slate-500 hover:text-slate-300'
                        }`}
                >
                    ↑ INCOME
                </button>
                <button
                    type="button"
                    onClick={() => setFormData({ ...formData, type: 'expense' })}
                    className={`flex-1 py-2.5 text-xs font-bold rounded-lg transition-all ${formData.type === 'expense'
                        ? 'bg-rose-600 text-white shadow-lg shadow-rose-900/30'
                        : 'text-slate-500 hover:text-slate-300'
                        }`}
                >
                    ↓ EXPENSE
                </button>
            </div>

            {/* Description — full width */}
            <div>
                <label className={labelClass}>Description</label>
                <input
                    type="text"
                    required
                    placeholder="e.g. Monthly Rent, Salary..."
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className={inputClass}
                />
            </div>

            {/* Amount + Date — side by side on sm+, stacked on mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label className={labelClass}>Amount (₹)</label>
                    <input
                        type="number"
                        required
                        min="1"
                        placeholder="0.00"
                        value={formData.amount}
                        onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                        className={inputClass}
                    />
                </div>

                <div>
                    <label className={labelClass}>Date</label>
                    <input
                        type="date"
                        required
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className={inputClass}
                    />
                </div>
            </div>

            {/* Category — full width */}
            <div>
                <label className={labelClass}>Category</label>
                <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className={inputClass}
                >
                    {CATEGORIES.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                    ))}
                </select>
            </div>

            {/* Action buttons */}
            <div className="flex gap-3 pt-2">
                <button
                    type="button"
                    onClick={onClose}
                    className="flex-1 px-4 py-3 rounded-xl border border-slate-700 text-slate-400 font-bold text-xs hover:bg-slate-800 hover:text-slate-200 transition-all"
                >
                    CANCEL
                </button>
                <button
                    type="submit"
                    className="flex-1 px-4 py-3 rounded-xl bg-blue-600 text-white font-bold text-xs hover:bg-blue-500 shadow-lg shadow-blue-900/20 transition-all active:scale-95"
                >
                    {editData ? "UPDATE" : "SAVE TRANSACTION"}
                </button>
            </div>
        </form>
    );
};

export default AddTransactionForm;