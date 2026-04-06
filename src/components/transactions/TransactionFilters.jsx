import { Search, Calendar, X } from "lucide-react";
import { CATEGORIES } from "../../data/mockData";

const TransactionFilters = ({
    searchTerm, setSearchTerm,
    filterCategory, setFilterCategory,
    filterType, setFilterType,
    dateRange, setDateRange
}) => {
    const inputClass = "bg-slate-900 border border-slate-700 rounded-xl py-2.5 px-4 text-sm text-slate-200 focus:ring-2 focus:ring-blue-500/50 outline-none transition-all w-full cursor-pointer";
    const dateInputClass = "bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-slate-200 outline-none focus:border-blue-500 transition-all flex-1 min-w-0";

    const hasActiveFilters = searchTerm || filterCategory !== "All" || filterType !== "all" || dateRange.start || dateRange.end;

    const clearAll = () => {
        setSearchTerm("");
        setFilterCategory("All");
        setFilterType("all");
        setDateRange({ start: "", end: "" });
    };

    return (
        <div className="space-y-4 bg-slate-800/50 p-4 sm:p-5 rounded-2xl border border-slate-700/50">

            {/* Row 1: Search + Type + Category */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">

                {/* Search */}
                <div className="relative sm:col-span-2">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" size={16} />
                    <input
                        type="text"
                        placeholder="Search by description..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full bg-slate-900 border border-slate-700 rounded-xl py-2.5 pl-9 pr-4 text-sm text-slate-200 placeholder:text-slate-600 focus:ring-2 focus:ring-blue-500/50 outline-none transition-all"
                    />
                </div>

                {/* Type Filter */}
                <select
                    value={filterType}
                    onChange={(e) => setFilterType(e.target.value)}
                    className={inputClass}
                >
                    <option value="all">All Types</option>
                    <option value="income">Income Only</option>
                    <option value="expense">Expense Only</option>
                </select>

                {/* Category Filter */}
                <select
                    value={filterCategory}
                    onChange={(e) => setFilterCategory(e.target.value)}
                    className={inputClass}
                >
                    <option value="All">All Categories</option>
                    {CATEGORIES.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                </select>
            </div>

            {/* Row 2: Date Range + Clear All */}
            <div className="flex flex-col xs:flex-row xs:items-center gap-3 pt-3 border-t border-slate-700/50">
                <div className="flex items-center gap-1.5 text-xs text-slate-500 font-bold uppercase tracking-wider shrink-0">
                    <Calendar size={13} />
                    <span>Date Range</span>
                </div>

                <div className="flex items-center gap-2 flex-1 min-w-0">
                    <input
                        type="date"
                        value={dateRange.start}
                        onChange={(e) => setDateRange({ ...dateRange, start: e.target.value })}
                        className={dateInputClass}
                    />
                    <span className="text-slate-600 text-xs shrink-0">to</span>
                    <input
                        type="date"
                        value={dateRange.end}
                        onChange={(e) => setDateRange({ ...dateRange, end: e.target.value })}
                        className={dateInputClass}
                    />
                </div>

                {hasActiveFilters && (
                    <button
                        onClick={clearAll}
                        className="flex items-center gap-1.5 text-xs text-rose-400 hover:text-rose-300 font-semibold shrink-0 transition-colors"
                    >
                        <X size={13} />
                        Clear All
                    </button>
                )}
            </div>
        </div>
    );
};

export default TransactionFilters;
