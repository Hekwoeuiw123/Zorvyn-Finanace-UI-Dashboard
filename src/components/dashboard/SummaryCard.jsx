import { ArrowDownCircle, ArrowUpCircle, Info, Wallet2 } from "lucide-react";
import { useFinance } from "../../context/FinanceProvider";
import { formatINR } from "../../utils/formatter";

const SummaryCard = () => {
    const { summary } = useFinance()

    const stat = [
        {
            title: 'Total Balance',
            amount: summary.balance,
            icon: <Wallet2 className="text-blue-400" />,
            gradient: 'from-blue-500/30 to-transparent',
            border: 'border-blue-500/40',
            hoverGlow: 'hover:shadow-[0_0_24px_6px_rgba(59,130,246,0.45)]'
        },
        {
            title: 'Total Income',
            amount: summary.income,
            icon: <ArrowUpCircle className="text-emerald-400" />,
            gradient: 'from-emerald-500/30 to-transparent',
            border: 'border-emerald-500/40',
            hoverGlow: 'hover:shadow-[0_0_24px_6px_rgba(16,185,129,0.45)]'
        },
        {
            title: 'Total Expenses',
            amount: summary.expense,
            icon: <ArrowDownCircle className="text-rose-400" />,
            gradient: 'from-rose-500/30 to-transparent',
            border: 'border-rose-500/40',
            hoverGlow: 'hover:shadow-[0_0_24px_6px_rgba(244,63,94,0.45)]'
        },
    ]
    return (
        <div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {stat.map((s, i) => (
                <div
                    key={i}
                    className={`relative overflow-hidden rounded-2xl border ${s.border} bg-slate-900 p-6 transition-all duration-300 hover:scale-[1.02] ${s.hoverGlow}`}>
                    <div className={`absolute inset-0 bg-linear-to-br ${s.gradient} opacity-50`} />
                    <div className="relative z-10 flex justify-between items-start">
                        <div>
                            <p className="text-slate-400 text-sm font-medium mb-1">{s.title}</p>
                            <h3 className="text-xl sm:text-2xl font-bold text-white tabular-nums truncate">
                                {formatINR(s.amount)}
                            </h3>
                        </div>
                        <div className="p-2 bg-slate-800/50 rounded-lg border border-slate-700">
                            {s.icon}
                        </div>
                    </div>
                    <div className="relative z-10 mt-4 flex items-center gap-2 text-xs text-slate-500">
                        <Info size={14} />
                        <span>Updated in real-time</span>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default SummaryCard