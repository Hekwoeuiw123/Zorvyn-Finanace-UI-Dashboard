import { TrendingUp, TrendingDown, Target, Zap, AlertCircle } from 'lucide-react';
import { useFinance } from '../../context/FinanceProvider';
const Insights = () => {
    const { summary, transactions } = useFinance()

    // 1]. Calculate Highest Category
    const categories = Object.entries(summary.categoryBreakdown);
    const highestCategory = categories.length > 0
        ? categories.reduce((a, b) => a[1] > b[1] ? a : b)
        : ["None", 0];

    // 2]. Calculate Month over Month Expense
    const getMonthExp = (monthNum) => {
        return transactions
            .filter(t => new Date(t.date).getMonth() === monthNum && t.type === 'expense')
            .reduce((sum, t) => sum + t.amount, 0);
    };

    const juneExp = getMonthExp(5); // June
    const mayExp = getMonthExp(4);  // May
    const momChange = mayExp > 0 ? ((juneExp - mayExp) / mayExp) * 100 : 0;

    // 3]. Calculate Savings Rate
    const savingsRate = summary.total > 0 ? (summary.income / summary.total) * 100 : 0;

    const insightData = [
        {
            title: "Highest Spending",
            value: highestCategory[0],
            subValue: `₹${highestCategory[1].toLocaleString()}`,
            icon: <AlertCircle className="text-orange-400" />,
            description: "This is your largest expense category this period.",
            color: "border-orange-500/20"
        },
        {
            title: "Savings Rate",
            value: `${savingsRate.toFixed(1)}%`,
            subValue: savingsRate > 20 ? "Healthy" : "Low",
            icon: <Target className="text-blue-400" />,
            description: "Percentage of income you've kept after expenses.",
            color: "border-blue-500/20"
        },
        {
            title: "Month-over-Month",
            value: `${momChange > 0 ? '+' : ''}${momChange.toFixed(1)}%`,
            subValue: momChange <= 0 ? "Decreased" : "Increased",
            icon: momChange <= 0 ? <TrendingDown className="text-emerald-400" /> : <TrendingUp className="text-rose-400" />,
            description: "Spending change compared to the previous month.",
            color: momChange <= 0 ? "border-emerald-500/20" : "border-rose-500/20"
        }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {insightData.map((item, idx) => (
                <div
                    key={idx}
                    className={`bg-slate-900 border ${item.color} rounded-2xl p-5 flex flex-col justify-between transition-all hover:bg-slate-800/50`}
                >
                    <div className="flex justify-between items-start mb-4">
                        <div className="p-2 bg-slate-800 rounded-lg">
                            {item.icon}
                        </div>
                        <span className={`text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider ${item.subValue === 'Healthy' || item.subValue === 'Decreased'
                                ? 'bg-emerald-500/10 text-emerald-400'
                                : 'bg-orange-500/10 text-orange-400'
                            }`}>
                            {item.subValue}
                        </span>
                    </div>

                    <div>
                        <h4 className="text-slate-400 text-sm font-medium">{item.title}</h4>
                        <p className="text-2xl font-bold text-white mb-2">{item.value}</p>
                        <p className="text-xs text-slate-500 leading-relaxed">
                            {item.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Insights