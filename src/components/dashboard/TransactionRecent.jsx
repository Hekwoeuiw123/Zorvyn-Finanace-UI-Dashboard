import { useMemo } from "react";
import { useFinance } from "../../context/FinanceProvider"
import { formatDate, formatINR } from "../../utils/formatter";
import { CATEGORY_COLORS } from "../../data/mockData";
import { ArrowDownLeft, ArrowUpRight } from "lucide-react";

const TransactionRecent = () => {
    const { transactions } = useFinance()

    // Return recent top 6 transactions
    const recent = useMemo(
        () => [...transactions].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 6),
        [transactions]
    );
    return (
        <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-5 animate-slide-up-7">
            <div className="flex items-center justify-between mb-4">
                <h3 className="font-display font-semibold text-white text-lg">Recent Transactions</h3>
                <button
                    onClick={() => { }}
                    className="text-emerald-400 text-sm hover:text-emerald-300 transition-colors"
                >
                    View all
                </button>
            </div>

            {recent.length === 0 ? (
                <div className="text-center py-10 text-slate-500">No transactions yet</div>
            ) : (
                <div className="space-y-2">
                    {recent.map((tx) => (
                        <div
                            key={tx.id}
                            className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-slate-700/30 transition-colors"
                        >
                            <div
                                className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                                style={{ background: (CATEGORY_COLORS[tx.category] || "#64748b") + "22" }}
                            >
                                {tx.type === "income" ? (
                                    <ArrowUpRight size={16} style={{ color: "#10b981" }} />
                                ) : (
                                    <ArrowDownLeft size={16} style={{ color: "#ef4444" }} />
                                )}
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-white text-sm font-medium truncate">{tx.description}</p>
                                <p className="text-slate-500 text-xs">{tx.category} · {formatDate(tx.date)}</p>
                            </div>
                            <span
                                className={`text-sm font-mono font-semibold ${tx.type === "income" ? "text-emerald-400" : "text-rose-400"}`}
                            >
                                {tx.type === "income" ? "+" : "-"}{formatINR(tx.amount)}
                            </span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default TransactionRecent