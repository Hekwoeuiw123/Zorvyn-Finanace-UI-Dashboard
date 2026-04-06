import BalanceChart from "../components/dashboard/BalanceChart"
import CategoryChart from "../components/dashboard/CategoryChart"
import Insights from "../components/dashboard/Insights"
import SummaryCard from "../components/dashboard/SummaryCard"
import TransactionRecent from "../components/dashboard/TransactionRecent"

const Dashboard = () => {
    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 space-y-6">
            <header>
                <h1 className="text-xl sm:text-2xl font-bold text-white">Financial Overview</h1>
                <p className="text-slate-500 text-sm">Monitor your income, expenses, and savings trends.</p>
            </header>

            <SummaryCard />

            {/* Charts Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <BalanceChart />
                <CategoryChart />
            </div>

            <Insights />

            <TransactionRecent />
        </div>
    )
}

export default Dashboard