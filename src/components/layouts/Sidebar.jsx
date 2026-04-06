import { LayoutDashboard, ReceiptText, Wallet, X } from "lucide-react"
import { NavLink } from "react-router"

const Sidebar = ({ isOpen, toggleSidebar }) => {
    const menuItem = [
        {
            name: 'Dashboard',
            icon: <LayoutDashboard size={24} />,
            path: '/'
        },
        {
            name: 'Transactions',
            icon: <ReceiptText size={24} />,
            path: '/transactions'
        }
    ]
    const activeClass = "flex items-center gap-3 w-full p-3 rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-900/20";
    const inactiveClass = "flex items-center gap-3 w-full p-3 rounded-xl text-slate-400 hover:bg-slate-800 hover:text-white transition-all group";
    return (
        <>
            {isOpen && (
                <div
                    className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
                    onClick={toggleSidebar}
                />
            )}
            <aside
                className={`fixed inset-y-0 left-0 z-50 w-64 bg-slate-900 border-r border-slate-800 transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0
                                  ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="p-6 flex cursor-pointer items-center justify-center gap-3 border-b border-slate-800 hover:scale-105 transition-all duration-300 ">
                    <div className="flex items-center gap-3">
                        <div className="bg-indigo-400/20 rounded-lg p-2 border border-blue-500">
                            <Wallet size={24} className="text-blue-500" />
                        </div>
                        <h1 className="text-2xl font-bold text-clip bg-linear-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent tracking-tight">Zorvyn</h1>
                    </div>

                    <button onClick={toggleSidebar} className="md:hidden text-slate-400 hover:text-white">
                        <X size={20} />
                    </button>
                </div>

                <nav className="flex-1 p-4 space-y-2">
                    {
                        menuItem.map((item) => (
                            <NavLink
                                key={item.name}
                                to={item.path}
                                end
                                className={({ isActive }) =>
                                    isActive ? activeClass : inactiveClass
                                }
                            >
                                {({ isActive }) => (
                                    <>
                                        <span className={isActive ? 'text-blue-400' : 'text-slate-500 group-hover:text-blue-400'}>
                                            {item.icon}
                                        </span>
                                        <span className="text-sm font-medium">{item.name}</span>
                                        {isActive && (
                                            <span className="ml-auto w-1.5 h-1.5 rounded-full bg-blue-400" />
                                        )}
                                    </>
                                )}
                            </NavLink>
                        ))
                    }
                </nav>

                <div className="p-4 border-t border-slate-800">
                    <div className="bg-slate-800/50 rounded-xl p-4 text-center">
                        <p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Current Role</p>
                        <p className="text-xs text-blue-400 font-semibold">Pro Dashboard v1.0</p>
                    </div>
                </div>
            </aside>
        </>
    )
}

export default Sidebar