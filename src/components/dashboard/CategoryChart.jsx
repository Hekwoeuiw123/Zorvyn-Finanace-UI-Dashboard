import { PieChart, Pie, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { useFinance } from '../../context/FinanceProvider';
import { CATEGORY_COLORS } from '../../data/mockData';
const CategoryChart = () => {
    const { summary } = useFinance()

    const chartData = Object.entries(summary.categoryBreakdown).map(([name, value]) => ({
        name,
        value,
        fill: CATEGORY_COLORS[name] || '#64748b'
    })).sort((a, b) => b.value - a.value);

    const renderLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        if (percent < 0.05) return null;
        const RADIAN = Math.PI / 180;
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
        return (
            <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central" fontSize={11} fontWeight={600}>
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };
    return (
        <div className="bg-slate-800/50 border border-slate-800 rounded-2xl p-4 sm:p-6 w-full shadow-lg transition-all hover:border-slate-700">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold text-white">Expense Distribution</h3>
                <span className="text-[10px] uppercase tracking-wider text-slate-500 font-bold bg-slate-800 px-2 py-1 rounded">
                    By Category
                </span>
            </div>

            <ResponsiveContainer width="100%" height={350}>
                <PieChart>
                    <Pie
                        data={chartData}
                        cx="50%"
                        cy="50%"
                        innerRadius={70}
                        outerRadius={95}
                        paddingAngle={4}
                        dataKey="value"
                        stroke="none"
                        labelLine={false}
                        label={renderLabel}
                    >

                    </Pie>
                    <Tooltip
                        contentStyle={{
                            backgroundColor: '#0f172a',
                            border: '1px solid #334155',
                            borderRadius: '12px',
                            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.5)'
                        }}
                        itemStyle={{ color: '#f8fafc', fontSize: '12px' }}
                        formatter={(value) => `₹${value.toLocaleString()}`}
                    />
                    <Legend
                        verticalAlign="top"
                        align="center"
                        iconType="circle"
                        layout="horizontal"
                        wrapperStyle={{ paddingTop: '10px', fontSize: '11px', color: '#94a3b8' }}
                    />
                </PieChart>
            </ResponsiveContainer>
        </div>
    )
}

export default CategoryChart