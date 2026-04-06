import { Pencil, Trash2, ArrowUpRight, ArrowDownLeft, MoreVertical } from "lucide-react";
import { CATEGORY_COLORS } from "../../data/mockData";
import { formatDate, formatINR } from "../../utils/formatter";
import { useFinance } from "../../context/FinanceProvider";

const TransactionRow = ({ tx, onEdit }) => {
    const { canEdit, deleteTransaction } = useFinance();

    const categoryStyle = {
        backgroundColor: `${CATEGORY_COLORS[tx.category] || "#475569"}18`,
        color: CATEGORY_COLORS[tx.category] || "#94a3b8",
        border: `1px solid ${CATEGORY_COLORS[tx.category] || "#475569"}30`,
    };

    return (
        <tr className="hover:bg-slate-800/30 transition-colors duration-200 group">
            {/* Date */}
            <td className="py-4 px-5 text-sm text-slate-400 tabular-nums whitespace-nowrap">
                {formatDate(tx.date)}
            </td>

            {/* Description + mobile sub-row */}
            <td className="py-4 px-5">
                <div className="space-y-1.5">
                    <div className="flex items-center gap-2.5">
                        <div className={`shrink-0 flex items-center justify-center w-7 h-7 rounded-lg ${tx.type === 'income'
                            ? 'bg-emerald-500/10 text-emerald-400'
                            : 'bg-rose-500/10 text-rose-400'
                            }`}>
                            {tx.type === 'income'
                                ? <ArrowUpRight size={15} />
                                : <ArrowDownLeft size={15} />
                            }
                        </div>
                        <span className="text-sm font-semibold text-slate-100 leading-snug line-clamp-1">
                            {tx.description}
                        </span>
                    </div>

                    {/* Mobile only — show category + type below description */}
                    <div className="flex flex-wrap items-center gap-1.5 sm:hidden pl-9">
                        <span
                            className="text-[10px] px-2 py-0.5 rounded-md font-bold uppercase tracking-tight"
                            style={categoryStyle}
                        >
                            {tx.category}
                        </span>
                        <span className={`text-[10px] px-2 py-0.5 rounded-md font-bold uppercase ${tx.type === 'income'
                            ? 'bg-emerald-500/10 text-emerald-400'
                            : 'bg-rose-500/10 text-rose-400'
                            }`}>
                            {tx.type}
                        </span>
                    </div>
                </div>
            </td>

            {/* Category — desktop only */}
            <td className="py-4 px-5 hidden sm:table-cell">
                <span
                    className="inline-block text-xs px-2.5 py-1 rounded-md font-bold uppercase tracking-tight whitespace-nowrap"
                    style={categoryStyle}
                >
                    {tx.category}
                </span>
            </td>

            {/* Type — desktop only */}
            <td className="py-4 px-5 hidden sm:table-cell">
                <span className={`inline-block text-xs px-2.5 py-1 rounded-md font-bold uppercase whitespace-nowrap ${tx.type === 'income'
                    ? 'bg-emerald-500/10 text-emerald-400'
                    : 'bg-rose-500/10 text-rose-400'
                    }`}>
                    {tx.type}
                </span>
            </td>

            {/* Amount */}
            <td className={`py-4 px-5 text-right font-mono font-bold text-sm whitespace-nowrap ${tx.type === 'income' ? 'text-emerald-400' : 'text-rose-400'
                }`}>
                {tx.type === 'income' ? '+' : '−'}{formatINR(tx.amount)}
            </td>

            {/* Actions — Admin only */}
            {canEdit && (
                <td className="py-4 px-5 text-center w-20">
                    {/* Desktop: hover buttons */}
                    <div className="hidden md:flex items-center justify-center gap-1 text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button
                            onClick={() => onEdit(tx)}
                            className="p-1.5 rounded-lg hover:text-slate-200 hover:bg-slate-700/60 transition-colors"
                            title="Edit"
                        >
                            <Pencil size={14} />
                        </button>
                        <button
                            onClick={() => deleteTransaction(tx.id)}
                            className="p-1.5 rounded-lg hover:text-rose-400 hover:bg-rose-500/10 transition-colors"
                            title="Delete"
                        >
                            <Trash2 size={14} />
                        </button>
                    </div>

                    {/* Mobile: kebab menu */}
                    <div className="md:hidden relative">
                        <details className="group/details">
                            <summary className="list-none p-1.5 rounded-lg text-slate-500 cursor-pointer hover:text-slate-300 hover:bg-slate-700/40 transition-colors">
                                <MoreVertical size={16} />
                            </summary>
                            <div className="absolute right-0 top-full mt-1.5 w-32 bg-slate-800 border border-slate-700 rounded-xl p-1 z-20 shadow-xl space-y-0.5">
                                <button
                                    onClick={() => onEdit(tx)}
                                    className="flex w-full items-center gap-2 text-slate-300 text-xs text-left px-3 py-2 rounded-lg hover:bg-slate-700/60 transition-colors"
                                >
                                    <Pencil size={13} /> Edit
                                </button>
                                <button
                                    onClick={() => deleteTransaction(tx.id)}
                                    className="flex w-full items-center gap-2 text-rose-400 text-xs text-left px-3 py-2 rounded-lg hover:bg-rose-500/10 transition-colors"
                                >
                                    <Trash2 size={13} /> Delete
                                </button>
                            </div>
                        </details>
                    </div>
                </td>
            )}
        </tr>
    );
};

export default TransactionRow;