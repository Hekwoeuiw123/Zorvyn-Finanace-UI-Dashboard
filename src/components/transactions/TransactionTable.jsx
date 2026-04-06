import TransactionRow from "./TransactionRow";
import { useFinance } from "../../context/FinanceProvider";

const TransactionTable = ({ filteredData, onEdit }) => {
    const { canEdit } = useFinance();

    return (
        <div className="bg-slate-900 border border-slate-700/50 rounded-2xl overflow-hidden shadow-2xl transition-all">
            <div className="overflow-x-auto custom-scrollbar">
                <table className="w-full text-left min-w-[480px]">

                    <thead className="bg-slate-800/80 text-slate-500 text-[11px] uppercase tracking-[0.15em] font-bold border-b border-slate-700/50">
                        <tr>
                            <th className="py-4 px-5 min-w-[120px]">Date</th>
                            <th className="py-4 px-5 min-w-[180px]">Description</th>
                            <th className="py-4 px-5 hidden sm:table-cell">Category</th>
                            <th className="py-4 px-5 hidden sm:table-cell">Type</th>
                            <th className="py-4 px-5 text-right min-w-[130px]">Amount</th>
                            {canEdit && (
                                <th className="py-4 px-5 w-20 text-center">Actions</th>
                            )}
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-slate-800/60">
                        {filteredData.length > 0 ? (
                            filteredData.map(tx => (
                                <TransactionRow key={tx.id} tx={tx} onEdit={onEdit} />
                            ))
                        ) : (
                            <tr>
                                <td colSpan={canEdit ? 6 : 5} className="py-20 text-center text-slate-600 italic text-sm">
                                    No matching transactions found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TransactionTable;