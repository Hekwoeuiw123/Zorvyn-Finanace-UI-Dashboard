import { useState, useMemo } from "react";
import { useFinance } from "../context/FinanceProvider";
import TransactionTable from "../components/transactions/TransactionTable";
import TransactionFilters from "../components/transactions/TransactionFilters";
import Modal from "../components/ui/Modal";
import AddTransactionForm from "../components/transactions/AddTransactionForm";
import { Plus, ListFilter } from "lucide-react";

const Transactions = () => {
    const { transactions, canEdit } = useFinance();

    // 1. Local States for Filters
    const [searchTerm, setSearchTerm] = useState("");
    const [filterCategory, setFilterCategory] = useState("All");
    const [filterType, setFilterType] = useState("all");
    const [dateRange, setDateRange] = useState({ start: "", end: "" });

    // 2. Local States for Modal (Add/Edit)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedTransaction, setSelectedTransaction] = useState(null);

    // 3. Centralized Filtering Logic
    const filteredData = useMemo(() => {
        return transactions.filter((tx) => {
            const matchesSearch = tx.description.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesCategory = filterCategory === "All" || tx.category === filterCategory;
            const matchesType = filterType === "all" || tx.type === filterType;

            let matchesDate = true;
            if (dateRange.start && dateRange.end) {
                const txDate = new Date(tx.date);
                matchesDate = txDate >= new Date(dateRange.start) && txDate <= new Date(dateRange.end);
            }

            return matchesSearch && matchesCategory && matchesType && matchesDate;
        });
    }, [transactions, searchTerm, filterCategory, filterType, dateRange]);

    // Handlers
    const openAddModal = () => {
        setSelectedTransaction(null);
        setIsModalOpen(true);
    };

    const openEditModal = (tx) => {
        setSelectedTransaction(tx);
        setIsModalOpen(true);
    };

    return (
        <div className="space-y-6 pb-10 animate-in fade-in slide-in-from-bottom-4 duration-500">

            {/* Header Area: Title + Add Button (Admin Only) */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                    <h1 className="text-xl sm:text-2xl font-bold text-white">Transactions</h1>
                    <p className="text-slate-500 text-sm flex items-center gap-2 mt-0.5">
                        <ListFilter size={14} />
                        Showing {filteredData.length} of {transactions.length} records
                    </p>
                </div>

                {canEdit && (
                    <button
                        onClick={openAddModal}
                        className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow-lg shadow-blue-900/20 transition-all active:scale-95 w-full sm:w-auto"
                    >
                        <Plus size={18} />
                        ADD TRANSACTION
                    </button>
                )}
            </div>

            {/* Filter Component */}
            <TransactionFilters
                searchTerm={searchTerm} setSearchTerm={setSearchTerm}
                filterCategory={filterCategory} setFilterCategory={setFilterCategory}
                filterType={filterType} setFilterType={setFilterType}
                dateRange={dateRange} setDateRange={setDateRange}
            />

            {/* Table Component */}
            <TransactionTable
                filteredData={filteredData}
                onEdit={openEditModal}
            />

            {/* Global Modal for Add/Edit */}
            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title={selectedTransaction ? "Edit Transaction" : "New Transaction"}
            >
                <AddTransactionForm
                    onClose={() => setIsModalOpen(false)}
                    editData={selectedTransaction}
                />
            </Modal>
        </div>
    );
};

export default Transactions;