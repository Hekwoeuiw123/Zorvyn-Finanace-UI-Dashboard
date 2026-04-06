import { Outlet } from "react-router"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import { useState } from "react";
import { Menu } from "lucide-react";


const AppLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
    return (
        <div className="flex h-screen bg-slate-950 text-slate-200 overflow-hidden">
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

            <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
                <header className="h-16 bg-slate-800 backdrop-blur-md border-b border-slate-800 flex items-center justify-between px-4 md:px-8 shrink-0">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={toggleSidebar}
                            className="p-2 rounded-lg bg-slate-800 text-slate-400 md:hidden hover:text-white"                    >
                            <Menu size={24} />
                        </button>

                        <div className="hidden sm:block">
                            <h2 className="text-xs text-slate-500 font-medium">Finance Portal</h2>
                            <p className="text-sm font-semibold text-white">Amit Varma</p>
                        </div>
                    </div>
                    <Navbar />
                </header>

                <main className="flex-1 overflow-y-auto p-4 md:p-8 custom-scrollbar">
                    <div className="max-w-7xl mx-auto space-y-6">
                        <Outlet />
                    </div>
                </main>
            </div>
        </div>
    )
}

export default AppLayout