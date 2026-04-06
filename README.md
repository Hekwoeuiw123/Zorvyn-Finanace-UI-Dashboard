# 💼 Zorvyn — Finance Dashboard

A modern, responsive personal finance dashboard built with **React 19**, **Vite**, and **Tailwind CSS v4**. Features a real-time overview of income, expenses, and spending trends with full CRUD transaction management, interactive charts, and a polished dark/light theme toggle.

---

## 📸 Preview

> **Dark Mode** — Deep slate UI with glowing card accents, area charts and donut charts
>
> **Light Mode** — Clean white/blue-grey palette, same layout — toggle with one click ☀️ / 🌙

---

## 🚀 Features

### 🏠 Dashboard
- **Summary Cards** — Total Balance, Total Income, Total Expenses with animated glow effects on hover
- **Cash Flow Trend Chart** — Area chart showing income vs. expense for the last 6 months (Recharts)
- **Expense Distribution Chart** — Donut/Pie chart breakdown by category with percentage labels
- **Financial Insights Panel** — Highest spending category, savings rate, month-over-month change
- **Recent Transactions** — Top 6 most recent transactions sorted by date

### 📋 Transactions Page
- **Full Transaction Table** — Paginated list of all transactions with category, type, amount, and date
- **Advanced Filters**:
  - 🔍 Search by description (live filtering)
  - 🏷️ Filter by category (dropdown)
  - ↕️ Filter by type (Income / Expense)
  - 📅 Date range picker with reset
- **Add Transaction** — Modal form for creating new transactions (Admin only)
- **Edit Transaction** — Pre-filled modal form for updating existing transactions (Admin only)
- **Delete Transaction** — One-click delete with confirmation (Admin only)

### 🔐 Role-Based Access Control
| Feature | Admin | Viewer |
|---|---|---|
| View dashboard & charts | ✅ | ✅ |
| View transactions | ✅ | ✅ |
| Filter & search | ✅ | ✅ |
| Add transaction | ✅ | ❌ |
| Edit transaction | ✅ | ❌ |
| Delete transaction | ✅ | ❌ |

Switch roles instantly via the **Admin / Viewer** toggle in the top navbar — role is persisted in `localStorage`.

### 🎨 Theme System
- **Dark Mode** (default) — Deep navy/slate colour palette
- **Light Mode** — Clean white/light-grey palette
- Zero JSX changes required — implemented via **Tailwind v4 CSS variable remapping** using `[data-theme="light"]`
- Smooth **300ms transition** between themes
- Theme preference saved to `localStorage` — persists across refreshes

### 📱 Fully Responsive
- Mobile-first layout — works on screens from 320px up
- Sidebar collapses to a **slide-over drawer** on mobile with a hamburger menu
- Summary cards and insight cards **stack vertically** on mobile
- Transaction table hides secondary columns on small screens; shows a **mobile-friendly data sub-row** instead
- Charts resize fluidly using Recharts' `ResponsiveContainer`

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| **React** | 19.x | UI library |
| **Vite** | 7.x | Build tool & dev server |
| **Tailwind CSS v4** | 4.x | Utility-first styling |
| **@tailwindcss/vite** | 4.x | Vite plugin for Tailwind v4 |
| **Recharts** | 3.x | Interactive charts (Area, Pie) |
| **React Router v7** | 7.x | Client-side routing |
| **Lucide React** | 1.x | Icon library |
| **clsx** | 2.x | Conditional class names |

---

## 📁 Project Structure

```
src/
├── components/
│   ├── dashboard/
│   │   ├── BalanceChart.jsx        # Cash Flow Trend (Area chart)
│   │   ├── CategoryChart.jsx       # Expense Distribution (Pie/Donut chart)
│   │   ├── Insights.jsx            # Financial insights panel (3 KPI cards)
│   │   ├── SummaryCard.jsx         # Balance / Income / Expense summary cards
│   │   └── TransactionRecent.jsx   # Recent 6 transactions widget
│   ├── layouts/
│   │   ├── AppLayout.jsx           # Root layout — sidebar + header + main
│   │   ├── Navbar.jsx              # Top bar — role switcher + theme toggle
│   │   └── Sidebar.jsx             # Navigation sidebar (responsive drawer)
│   ├── transactions/
│   │   ├── AddTransactionForm.jsx  # Add / Edit modal form
│   │   ├── TransactionFilters.jsx  # Search, type, category, date filters
│   │   ├── TransactionRow.jsx      # Single table row with edit/delete actions
│   │   └── TransactionTable.jsx    # Full transactions table
│   └── ui/
│       ├── Card.jsx                # Generic card wrapper
│       └── Modal.jsx               # Reusable modal with backdrop blur
├── context/
│   └── FinanceProvider.jsx         # Global state — transactions, theme, role
├── data/
│   └── mockData.js                 # Seed transactions, categories, color map
├── hooks/
│   └── useLocalstorage.js          # Custom hook — syncs state ↔ localStorage
├── pages/
│   ├── Dashboard.jsx               # Dashboard page
│   └── Transaction.jsx             # Transactions page with filter logic
├── utils/
│   ├── formatter.js                # formatINR (₹) and formatDate helpers
│   └── prepareChartData.js         # Aggregates transactions → monthly chart data
├── App.jsx                         # Router setup
├── App.css                         # (empty — styles in index.css)
├── index.css                       # Global styles + light theme overrides
└── main.jsx                        # React entry point
```

---

## ⚡ Getting Started

### Prerequisites
- **Node.js** v18 or higher
- **npm** v9 or higher

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Hekwoeuiw123/Zorvyn-Finanace-UI-Dashboard.git
cd zorvyn-frontend-assignment

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

The app will be available at ****

### Available Scripts

```bash
npm run dev       # Start Vite dev server with HMR
npm run build     # Production build → /dist
npm run preview   # Preview the production build locally
npm run lint      # Run ESLint
```

---

## 🏗️ Architecture & Key Decisions

### 1. Global State — `FinanceProvider`
All app state lives in a single React Context (`FinanceProvider`). It exposes:

```js
{
  transactions,       // Array of all transactions
  summary,            // Derived: { income, expense, balance, categoryBreakdown }
  addTransaction,     // (data) → adds new transaction (Admin only)
  updateTransaction,  // (id, data) → edits a transaction (Admin only)
  deleteTransaction,  // (id) → removes a transaction (Admin only)
  canEdit,            // Boolean — true when userRole === 'admin'
  userRole,           // 'admin' | 'viewer'
  setUserRole,        // Switch roles
  theme,              // 'dark' | 'light'
  setTheme,           // Toggle theme
}
```

### 2. Persistence — `useLocalstorage`
A custom hook wraps `useState` with automatic `localStorage` sync. On mount it reads the stored value; on every state change it writes it back. Used for:
- `transactions` — all transaction data survives page refresh
- `userRole` — active role is remembered
- `theme` — dark/light preference is remembered

### 3. Light Theme — CSS Variable Remapping
Rather than adding `dark:` prefix classes everywhere, the light theme works by **overriding Tailwind v4's internal colour variables** in CSS:

```css
[data-theme="light"] {
  --color-slate-950: #f8fafc;  /* near-black → near-white */
  --color-slate-900: #f1f5f9;
  --color-slate-800: #e2e8f0;
  /* ... */
  --color-white: #0f172a;      /* white text → dark text */
}
```

This means **zero JSX changes** — existing `bg-slate-900`, `text-white` etc. classes automatically render with light colours.

### 4. Role-Based Rendering
`canEdit` is derived as `userRole === 'admin'` inside the context. Components simply check `{canEdit && <button>...}` — no prop-drilling needed since it comes from context.

### 5. Responsive Strategy
- **Sidebar**: uses `fixed + transform: translateX` pattern — hidden off-screen on mobile, revealed with a hamburger toggle; always visible on `md:` and above via `md:relative md:translate-x-0`
- **Charts**: removed fixed `h-[400px]` containers; use `ResponsiveContainer` from Recharts which auto-sizes to the parent
- **Transaction table**: secondary columns (`Category`, `Type`) hidden on mobile via `hidden sm:table-cell`; a compact sub-row shows the same data inline below the description

---

## 🔧 Core Components Explained

### `FinanceProvider.jsx`
The brain of the app. Wraps the entire component tree and provides all state via React Context. Also runs a `useEffect` that sets `data-theme` and `.dark` on `<html>` whenever the theme changes.

### `useLocalstorage.js`
```js
const [value, setValue] = useLocalstorage('key', defaultValue)
// Works exactly like useState but syncs to localStorage automatically
```

### `formatter.js`
```js
formatINR(675000)       // → "₹6,75,000"
formatDate("2024-06-15") // → "15 Jun 2024"
```

### `prepareChartData.js`
Takes the raw transactions array and returns monthly aggregates for Jan–Jun:
```js
[{ month: 'Jan', income: 50000, expense: 30000 }, ...]
```

### `Modal.jsx`
A reusable modal component with:
- Backdrop blur overlay
- Click-outside to close
- `overflow: hidden` on body while open (prevents scroll-behind)
- Smooth `zoom-in-95` animation

---

## 📊 Data Model

### Transaction Object
```js
{
  id: 1234567890,          // Date.now() — unique timestamp ID
  description: "Salary",   // Free-text label
  amount: 75000,            // Always positive (type determines sign)
  type: "income",           // "income" | "expense"
  category: "Salary",       // One of CATEGORIES[]
  date: "2024-06-01",       // ISO date string (YYYY-MM-DD)
}
```

### Categories
`Education`, `Entertainment`, `Food & Dining`, `Freelance`, `Healthcare`, `Housing`, `Investment`, `Other`, `Salary`, `Shopping`, `Transport`, `Travel`, `Utilities`

---

## 🎯 Financial Insights Logic

| Insight | Formula |
|---|---|
| **Highest Spending** | `max(categoryBreakdown entries)` |
| **Savings Rate** | `(income / total) * 100` |
| **Month-over-Month** | `((juneExpense - mayExpense) / mayExpense) * 100` |

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/my-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/my-feature`
5. Open a Pull Request

---

## 📄 License

This project was built as a **Frontend Assignment** for **Zorvyn**. All rights reserved.

---

<div align="center">
  <p>Built with ❤️ by <strong>Amit Varma</strong></p>
  <p>
    <img src="https://img.shields.io/badge/React-19-61DAFB?style=flat&logo=react" alt="React" />
    <img src="https://img.shields.io/badge/Vite-7-646CFF?style=flat&logo=vite" alt="Vite" />
    <img src="https://img.shields.io/badge/TailwindCSS-v4-06B6D4?style=flat&logo=tailwindcss" alt="Tailwind" />
    <img src="https://img.shields.io/badge/Recharts-3-22C55E?style=flat" alt="Recharts" />
  </p>
</div>
