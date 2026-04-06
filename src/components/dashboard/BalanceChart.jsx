import { useMemo } from 'react';
import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid,
    Tooltip, ResponsiveContainer, Legend
} from 'recharts';
import { prepareChartData } from '../../utils/prepareChartData';
import { useFinance } from '../../context/FinanceProvider';

const BalanceChart = () => {
    const { transactions } = useFinance()
    const data = useMemo(() => prepareChartData(transactions), [transactions])

    return (
        <div className="bg-slate-800/50 border border-slate-800 rounded-2xl p-4 sm:p-6 w-full">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold text-white">Cash Flow Trend</h3>
                <div className="text-xs text-slate-400 font-medium px-2 py-1 bg-slate-800 rounded-md border border-slate-700">
                    Last 6 Months
                </div>
            </div>
            <ResponsiveContainer width="100%" height={350}>
                <AreaChart data={data} margin={{ top: 0, right: 5, left: 5, bottom: 50 }}>
                    <defs>
                        {/* Gradient for Income Line */}
                        <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                            <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                        </linearGradient>
                        {/* Gradient for Expense Line */}
                        <linearGradient id="colorExpense" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3} />
                            <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
                        </linearGradient>
                    </defs>

                    <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />

                    <XAxis
                        dataKey="month"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: '#94a3b8', fontSize: 12 }}
                        dy={10}
                    />

                    <YAxis
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: '#94a3b8', fontSize: 12 }}
                    />

                    <Tooltip
                        contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1e293b', borderRadius: '12px', color: '#fff' }}
                        itemStyle={{ fontSize: '12px' }}
                    />

                    <Legend verticalAlign="top" align="right" iconType="circle" height={36} />

                    <Area
                        type="monotone"
                        dataKey="income"
                        stroke="#10b981"
                        strokeWidth={3}
                        fillOpacity={1}
                        fill="url(#colorIncome)"
                    />
                    <Area
                        type="monotone"
                        dataKey="expense"
                        stroke="#ef4444"
                        strokeWidth={3}
                        fillOpacity={1}
                        fill="url(#colorExpense)"
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )

}

export default BalanceChart