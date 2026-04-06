import { X } from "lucide-react";
import { useEffect } from "react";

const Modal = ({ isOpen, onClose, title, children }) => {
    useEffect(() => {
        if (isOpen) document.body.style.overflow = 'hidden';
        else document.body.style.overflow = 'unset';
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-100 flex items-end sm:items-center justify-center p-0 sm:p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200"
                onClick={onClose}
            />

            {/* Modal panel — slides up from bottom on mobile, zooms in on desktop */}
            <div className="relative w-full sm:max-w-lg bg-slate-900 border border-slate-700/60 rounded-t-3xl sm:rounded-2xl shadow-2xl animate-in slide-in-from-bottom-4 sm:zoom-in-95 duration-300 overflow-hidden max-h-[92dvh] flex flex-col">

                {/* Header */}
                <div className="flex items-center justify-between px-5 py-4 sm:px-6 sm:py-5 border-b border-slate-800 shrink-0">
                    {/* Drag handle — mobile UX hint */}
                    <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-10 h-1 bg-slate-700 rounded-full sm:hidden" />
                    <h3 className="text-lg sm:text-xl font-bold text-white">{title}</h3>
                    <button
                        onClick={onClose}
                        className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Scrollable body */}
                <div className="p-5 sm:p-6 overflow-y-auto custom-scrollbar">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;