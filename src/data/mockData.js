export const CATEGORIES = [
    "Food & Dining",
    "Shopping",
    "Transport",
    "Housing",
    "Healthcare",
    "Entertainment",
    "Education",
    "Travel",
    "Utilities",
    "Salary",
    "Freelance",
    "Investment",
    "Other",
];

export const CATEGORY_COLORS = {
    "Food & Dining": "#f59e0b",
    "Shopping": "#8b5cf6",
    "Transport": "#3b82f6",
    "Housing": "#ef4444",
    "Healthcare": "#ec4899",
    "Entertainment": "#06b6d4",
    "Education": "#10b981",
    "Travel": "#f97316",
    "Utilities": "#6366f1",
    "Salary": "#22c55e",
    "Freelance": "#84cc16",
    "Investment": "#14b8a6",
    "Other": "#94a3b8",
};

export const INITIAL_TRANSACTIONS = [
    // January
    { id: 1, date: "2025-01-03", description: "Monthly Salary", amount: 85000, category: "Salary", type: "income" },
    { id: 2, date: "2025-01-05", description: "Swiggy Order", amount: 780, category: "Food & Dining", type: "expense" },
    { id: 3, date: "2025-01-07", description: "Ola Cab", amount: 320, category: "Transport", type: "expense" },
    { id: 4, date: "2025-01-10", description: "Amazon Shopping", amount: 4200, category: "Shopping", type: "expense" },
    { id: 5, date: "2025-01-12", description: "Electricity Bill", amount: 1800, category: "Utilities", type: "expense" },
    { id: 6, date: "2025-01-14", description: "Netflix Subscription", amount: 649, category: "Entertainment", type: "expense" },
    { id: 7, date: "2025-01-18", description: "Freelance Project", amount: 25000, category: "Freelance", type: "income" },
    { id: 8, date: "2025-01-20", description: "Zomato Order", amount: 540, category: "Food & Dining", type: "expense" },
    { id: 9, date: "2025-01-22", description: "Metro Card Recharge", amount: 500, category: "Transport", type: "expense" },
    { id: 10, date: "2025-01-25", description: "Gym Membership", amount: 2000, category: "Healthcare", type: "expense" },
    { id: 11, date: "2025-01-28", description: "Mutual Fund SIP", amount: 5000, category: "Investment", type: "expense" },
    { id: 12, date: "2025-01-30", description: "Rent Payment", amount: 18000, category: "Housing", type: "expense" },

    // February
    { id: 13, date: "2025-02-01", description: "Monthly Salary", amount: 85000, category: "Salary", type: "income" },
    { id: 14, date: "2025-02-04", description: "Cafe Coffee Day", amount: 620, category: "Food & Dining", type: "expense" },
    { id: 15, date: "2025-02-06", description: "Uber Ride", amount: 450, category: "Transport", type: "expense" },
    { id: 16, date: "2025-02-10", description: "Myntra Shopping", amount: 3200, category: "Shopping", type: "expense" },
    { id: 17, date: "2025-02-14", description: "Valentine Dinner", amount: 2800, category: "Food & Dining", type: "expense" },
    { id: 18, date: "2025-02-16", description: "Freelance Payment", amount: 18000, category: "Freelance", type: "income" },
    { id: 19, date: "2025-02-18", description: "Doctor Visit", amount: 800, category: "Healthcare", type: "expense" },
    { id: 20, date: "2025-02-22", description: "Internet Bill", amount: 999, category: "Utilities", type: "expense" },
    { id: 21, date: "2025-02-25", description: "Mutual Fund SIP", amount: 5000, category: "Investment", type: "expense" },
    { id: 22, date: "2025-02-28", description: "Rent Payment", amount: 18000, category: "Housing", type: "expense" },

    // March
    { id: 23, date: "2025-03-01", description: "Monthly Salary", amount: 85000, category: "Salary", type: "income" },
    { id: 24, date: "2025-03-03", description: "Zomato Order", amount: 890, category: "Food & Dining", type: "expense" },
    { id: 25, date: "2025-03-07", description: "Holi Shopping", amount: 1500, category: "Shopping", type: "expense" },
    { id: 26, date: "2025-03-10", description: "Flight to Goa", amount: 8500, category: "Travel", type: "expense" },
    { id: 27, date: "2025-03-12", description: "Hotel Booking", amount: 12000, category: "Travel", type: "expense" },
    { id: 28, date: "2025-03-15", description: "Freelance Bonus", amount: 30000, category: "Freelance", type: "income" },
    { id: 29, date: "2025-03-18", description: "Goa Restaurant", amount: 3400, category: "Food & Dining", type: "expense" },
    { id: 30, date: "2025-03-22", description: "Electricity Bill", amount: 1600, category: "Utilities", type: "expense" },
    { id: 31, date: "2025-03-25", description: "Mutual Fund SIP", amount: 5000, category: "Investment", type: "expense" },
    { id: 32, date: "2025-03-28", description: "Rent Payment", amount: 18000, category: "Housing", type: "expense" },

    // April
    { id: 33, date: "2025-04-01", description: "Monthly Salary", amount: 90000, category: "Salary", type: "income" },
    { id: 34, date: "2025-04-04", description: "Blinkit Groceries", amount: 1200, category: "Food & Dining", type: "expense" },
    { id: 35, date: "2025-04-06", description: "Rapido Bike", amount: 180, category: "Transport", type: "expense" },
    { id: 36, date: "2025-04-09", description: "Online Course", amount: 4999, category: "Education", type: "expense" },
    { id: 37, date: "2025-04-12", description: "Pharmacy", amount: 650, category: "Healthcare", type: "expense" },
    { id: 38, date: "2025-04-16", description: "Freelance Payment", amount: 22000, category: "Freelance", type: "income" },
    { id: 39, date: "2025-04-20", description: "Flipkart Sale", amount: 5600, category: "Shopping", type: "expense" },
    { id: 40, date: "2025-04-22", description: "Movie Tickets", amount: 960, category: "Entertainment", type: "expense" },
    { id: 41, date: "2025-04-25", description: "Mutual Fund SIP", amount: 5000, category: "Investment", type: "expense" },
    { id: 42, date: "2025-04-28", description: "Rent Payment", amount: 18000, category: "Housing", type: "expense" },

    // May
    { id: 43, date: "2025-05-01", description: "Monthly Salary", amount: 90000, category: "Salary", type: "income" },
    { id: 44, date: "2025-05-05", description: "Swiggy Order", amount: 680, category: "Food & Dining", type: "expense" },
    { id: 45, date: "2025-05-08", description: "Ola Cab", amount: 550, category: "Transport", type: "expense" },
    { id: 46, date: "2025-05-10", description: "Amazon Prime", amount: 1499, category: "Entertainment", type: "expense" },
    { id: 47, date: "2025-05-14", description: "Weekend Trip Mumbai", amount: 6000, category: "Travel", type: "expense" },
    { id: 48, date: "2025-05-16", description: "Freelance Payment", amount: 15000, category: "Freelance", type: "income" },
    { id: 49, date: "2025-05-19", description: "Water Bill", amount: 450, category: "Utilities", type: "expense" },
    { id: 50, date: "2025-05-22", description: "Dining Out", amount: 2100, category: "Food & Dining", type: "expense" },
    { id: 51, date: "2025-05-25", description: "Mutual Fund SIP", amount: 5000, category: "Investment", type: "expense" },
    { id: 52, date: "2025-05-28", description: "Rent Payment", amount: 18000, category: "Housing", type: "expense" },

    // June
    { id: 53, date: "2025-06-01", description: "Monthly Salary", amount: 90000, category: "Salary", type: "income" },
    { id: 54, date: "2025-06-03", description: "Zomato Order", amount: 720, category: "Food & Dining", type: "expense" },
    { id: 55, date: "2025-06-06", description: "Metro Card", amount: 500, category: "Transport", type: "expense" },
    { id: 56, date: "2025-06-10", description: "Nykaa Shopping", amount: 2800, category: "Shopping", type: "expense" },
    { id: 57, date: "2025-06-12", description: "Electricity Bill", amount: 2200, category: "Utilities", type: "expense" },
    { id: 58, date: "2025-06-15", description: "Investment Return", amount: 12000, category: "Investment", type: "income" },
    { id: 59, date: "2025-06-18", description: "Freelance Project", amount: 28000, category: "Freelance", type: "income" },
    { id: 60, date: "2025-06-22", description: "Online Course", amount: 3999, category: "Education", type: "expense" },
    { id: 61, date: "2025-06-25", description: "Mutual Fund SIP", amount: 5000, category: "Investment", type: "expense" },
    { id: 62, date: "2025-06-28", description: "Rent Payment", amount: 18000, category: "Housing", type: "expense" },
];

export const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
