import { BrowserRouter, Navigate, Route, Routes } from 'react-router'
import './App.css'
import Dashboard from './pages/Dashboard'
import AppLayout from './components/layouts/AppLayout'
import Transaction from './pages/Transaction'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main App Routes */}
        <Route element={<AppLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/transactions" element={<Transaction />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
