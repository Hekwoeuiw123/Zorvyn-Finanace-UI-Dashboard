import { Moon, ShieldCheck, Sun, UserCheck2 } from "lucide-react"
import { useFinance } from "../../context/FinanceProvider"

const Navbar = () => {
    const { theme, setTheme, userRole, setUserRole } = useFinance()
    return (
        <div className="flex items-center gap-2 sm:gap-4">
            {/* Role Switcher */}
            <div className="flex bg-slate-800 p-1 rounded-lg border border-slate-700 shrink-0">
                <button
                    onClick={() => setUserRole('admin')}
                    className={`cursor-pointer flex items-center gap-1.5 px-2 sm:px-3 py-1.5 rounded-md text-xs font-medium transition-all ${userRole === 'admin' ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'
                        }`}
                >
                    <ShieldCheck size={14} />
                    <span className="hidden xs:inline sm:inline">Admin</span>
                </button>
                <button
                    onClick={() => setUserRole('viewer')}
                    className={`cursor-pointer flex items-center gap-1.5 px-2 sm:px-3 py-1.5 rounded-md text-xs font-medium transition-all ${userRole === 'viewer' ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'
                        }`}
                >
                    <UserCheck2 size={14} />
                    <span className="hidden xs:inline sm:inline">Viewer</span>
                </button>
            </div>

            <button
                className="p-2 rounded-full bg-slate-800 border border-slate-700 text-yellow-400 hover:scale-110 transition-transform shrink-0"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} className="text-slate-300" />}
            </button>
        </div>
    )
}

export default Navbar