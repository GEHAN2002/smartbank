import React, { useState, useMemo } from 'react';

// --- TypeScript System Type Configurations ---
interface Transaction {
  id: string;
  title: string;
  date: string;
  amount: number;
  type: 'income' | 'expense';
}

type ThemeKey = 'default' | 'cyberpunk' | 'aurora';

interface ThemeTokens {
  bg: string;
  primary: string;
  secondary: string;
  gradient: string;
}

// --- Multi-Theme Design Tokens Registry ---
const THEME_REGISTRY: Record<ThemeKey, ThemeTokens> = {
  default: {
    bg: 'linear-gradient(135deg, #0f172a, #1e1b4b, #2e1065)',
    primary: '#06b6d4', // Vibrant Cyan
    secondary: '#d946ef', // Neon Pink
    gradient: 'linear-gradient(90deg, #06b6d4, #d946ef)',
  },
  cyberpunk: {
    bg: 'linear-gradient(135deg, #120422, #240046, #3c0066)',
    primary: '#ff0055', // Hot Punch
    secondary: '#00ffcc', // Cyber Mint
    gradient: 'linear-gradient(90deg, #ff0055, #00ffcc)',
  },
  aurora: {
    bg: 'linear-gradient(135deg, #022329, #053f3e, #0f172a)',
    primary: '#22c55e', // Emerald Aurora
    secondary: '#06b6d4', // Deep Ocean Cyan
    gradient: 'linear-gradient(90deg, #22c55e, #06b6d4)',
  },
};

export const SmartBankDashboard: React.FC = () => {
  // --- Active State Layers ---
  const [activeTheme, setActiveTheme] = useState<ThemeKey>('default');
  const [transactions, setTransactions] = useState<Transaction[]>([
    { id: '1', title: 'Cloud Server Subscriptions', date: 'Today • 2:14 PM', amount: 49.00, type: 'expense' },
    { id: '2', title: 'Freelance Client Payout', date: 'Yesterday • 9:30 AM', amount: 1200.00, type: 'income' },
    { id: '3', title: 'Organic Grocer Marketplace', date: 'Oct 24 • 6:11 PM', amount: 124.50, type: 'expense' },
  ]);

  // Form Field States
  const [txTitle, setTxTitle] = useState<string>('');
  const [txType, setTxType] = useState<'income' | 'expense'>('expense');
  const [txAmount, setTxAmount] = useState<string>('');

  // Growth Engine Slider States
  const [calcDeposit, setCalcDeposit] = useState<number>(5000);
  const [calcRate, setCalcRate] = useState<number>(4.5);
  const [calcYears, setCalcYears] = useState<number>(5);

  const tokens = THEME_REGISTRY[activeTheme];

  // --- Dynamic Financial Accounting Calculations ---
  const totals = useMemo(() => {
    let income = 4200.00;
    let expenses = 1150.00;
    let baseBalance = 12450.00;

    // Mutate aggregates based on simulated run-time item variations
    transactions.forEach(tx => {
      // Exclude seed entities to prevent initial double counting if metrics are hardcoded
      if (['1', '2', '3'].includes(tx.id)) return; 
      if (tx.type === 'income') {
        baseBalance += tx.amount;
        income += tx.amount;
      } else {
        baseBalance -= tx.amount;
        expenses += tx.amount;
      }
    });

    return { balance: baseBalance, income, expenses };
  }, [transactions]);

  // --- Growth Engine Projection Math ---
  const futureValue = useMemo(() => {
    const rateFactor = calcRate / 100;
    return calcDeposit * Math.pow(1 + rateFactor, calcYears);
  }, [calcDeposit, calcRate, calcYears]);

  // --- Action Form Dispatch Handlers ---
  const handleSimulateTransaction = (e: React.FormEvent) => {
    e.preventDefault();
    const parsedAmount = parseFloat(txAmount);
    if (!txTitle || isNaN(parsedAmount) || parsedAmount <= 0) return;

    const newTx: Transaction = {
      id: crypto.randomUUID(),
      title: txTitle,
      date: 'Just Now • Live Ledger Order',
      amount: parsedAmount,
      type: txType,
    };

    setTransactions(prev => [newTx, ...prev]);
    setTxTitle('');
    setTxAmount('');
  };

  // --- Utility Formatting Engines ---
  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(val);
  };

  return (
    <div style={{ ...styles.dashboardWrapper, background: tokens.bg }}>
      {/* Global CSS Injector for Responsive Adjustments & Custom Component Classes */}
      <style>{`
        @media (max-width: 950px) {
          .dashboard-grid-layout { grid-template-columns: 1fr !important; }
        }
        .custom-scroll::-webkit-scrollbar { width: 6px; }
        .custom-scroll::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 10px; }
      `}</style>

      {/* Modern High-Fidelity Navigation Header */}
      <header style={styles.header}>
        <div style={{ ...styles.logo, background: tokens.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          Smart Bank
        </div>
        <nav style={styles.navLinks}>
          <a href="#dashboard" style={styles.navItem}>Dashboard</a>
          <a href="#analytics" style={styles.navItem}>Analytics</a>
          <a href="#calculator" style={styles.navItem}>Grow Wealth</a>
        </nav>
        <select 
          style={styles.themeSelector} 
          value={activeTheme} 
          onChange={(e) => setActiveTheme(e.target.value as ThemeKey)}
        >
          <option value="default">✨ Neon Cyber</option>
          <option value="cyberpunk">🔥 Synthwave</option>
          <option value="aurora">🌲 Aurora Glow</option>
        </select>
      </header>

      {/* Structural Central System Grid Area */}
      <main className="dashboard-grid-layout" style={styles.mainContainer}>
        
        {/* Banner Hero Message */}
        <div style={styles.welcomeBanner}>
          <h1 style={styles.bannerTitle}>Welcome Back to Smart Bank</h1>
          <p style={styles.bannerSubtitle}>Your secure next-generation financial ecosystem is fully optimized.</p>
        </div>

        {/* Left Core Module Deck */}
        <section style={styles.primaryColumn}>
          
          {/* Dynamic Real-time Asset Metric Rows */}
          <div style={styles.metricsGrid}>
            <div style={{ ...styles.metricCard, borderLeft: `4px solid ${tokens.primary}` }}>
              <div style={styles.metricLabel}>Net Available Balance</div>
              <div style={styles.metricValue}>{formatCurrency(totals.balance)}</div>
            </div>
            <div style={{ ...styles.metricCard, borderLeft: `4px solid #10b981` }}>
              <div style={styles.metricLabel}>Monthly Inflow</div>
              <div style={styles.metricValue}>{formatCurrency(totals.income)}</div>
            </div>
            <div style={{ ...styles.metricCard, borderLeft: `4px solid #f43f5e` }}>
              <div style={styles.metricLabel}>Monthly Outflow</div>
              <div style={styles.metricValue}>{formatCurrency(totals.expenses)}</div>
            </div>
          </div>

          {/* Interactive Feature: Dynamic Sandbox Transaction Order Console */}
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Instant Transaction Simulator</h3>
            <form onSubmit={handleSimulateTransaction} style={styles.formStructure}>
              <div style={styles.formGroup}>
                <label style={styles.formLabel}>Transaction Reference Name</label>
                <input 
                  type="text" 
                  value={txTitle}
                  onChange={e => setTxTitle(e.target.value)}
                  placeholder="e.g., Target Store, Tech Invest, Utilities" 
                  style={styles.formControl} 
                  required
                />
              </div>
              <div style={styles.formRowSplit}>
                <div style={styles.formGroup}>
                  <label style={styles.formLabel}>Classification Type</label>
                  <select 
                    value={txType} 
                    onChange={e => setTxType(e.target.value as 'income' | 'expense')} 
                    style={styles.formControl}
                  >
                    <option value="expense">Expense (Outflow)</option>
                    <option value="income">Income (Inflow)</option>
                  </select>
                </div>
                <div style={styles.formGroup}>
                  <label style={styles.formLabel}>Value Asset Amount ($)</label>
                  <input 
                    type="number" 
                    value={txAmount}
                    onChange={e => setTxAmount(e.target.value)}
                    placeholder="0.00" 
                    min="0.01" 
                    step="0.01" 
                    style={styles.formControl} 
                    required
                  />
                </div>
              </div>
              <button type="submit" style={{ ...styles.actionBtn, background: tokens.gradient }}>
                Execute Secure Order
              </button>
            </form>
          </div>

          {/* Intelligent System Capability Grid Displays */}
          <div style={styles.card} id="analytics">
            <h3 style={styles.cardTitle}>Advanced Intelligent Capabilities</h3>
            <div style={styles.featuresShowcase}>
              <div style={styles.featureBox}>
                <div style={styles.featureIcon}>🛡️</div>
                <h4 style={styles.featureTitle}>Quantum Security</h4>
                <p style={styles.featureText}>End-to-end multi-layer structural isolation layers.</p>
              </div>
              <div style={styles.featureBox}>
                <div style={styles.featureIcon}>🤖</div>
                <h4 style={styles.featureTitle}>AI Insights</h4>
                <p style={styles.featureText}>Predictive automated budgeting asset optimizations.</p>
              </div>
              <div style={styles.featureBox}>
                <div style={styles.featureIcon}>⚡</div>
                <h4 style={styles.featureTitle}>Instant Settlement</h4>
                <p style={styles.featureText}>Cross-border financial messaging rails mapped instantly.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Right Feed & Analytics Sidebar Column */}
        <aside style={styles.secondaryColumn}>
          
          {/* Live Transaction Registry Stream */}
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Live Transaction Activity</h3>
            <ul className="custom-scroll" style={styles.transactionList}>
              {transactions.map(tx => (
                <li key={tx.id} style={styles.transactionItem}>
                  <div>
                    <h4 style={styles.txItemTitle}>{tx.title}</h4>
                    <p style={styles.txItemMeta}>{tx.date}</p>
                  </div>
                  <div style={{
                    ...styles.txItemAmount,
                    color: tx.type === 'income' ? '#10b981' : '#f43f5e'
                  }}>
                    {tx.type === 'income' ? '+' : '-'}{formatCurrency(tx.amount)}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Asset Accumulation Projections Model */}
          <div style={styles.card} id="calculator">
            <h3 style={styles.cardTitle}>Smart High-Yield Yield Calculator</h3>
            <div style={styles.formGroup}>
              <label style={styles.formLabel}>Initial Commitment: {formatCurrency(calcDeposit)}</label>
              <input 
                type="range" min="1000" max="100000" step="1000" 
                value={calcDeposit} 
                onChange={e => setCalcDeposit(Number(e.target.value))}
                style={{ ...styles.rangeSlider, accentColor: tokens.primary }}
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.formLabel}>Annual Interest Yield: {calcRate}%</label>
              <input 
                type="range" min="1" max="15" step="0.1" 
                value={calcRate} 
                onChange={e => setCalcRate(Number(e.target.value))}
                style={{ ...styles.rangeSlider, accentColor: tokens.primary }}
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.formLabel}>Maturity Horizon Term: {calcYears} Years</label>
              <input 
                type="range" min="1" max="30" step="1" 
                value={calcYears} 
                onChange={e => setCalcYears(Number(e.target.value))}
                style={{ ...styles.rangeSlider, accentColor: tokens.primary }}
              />
            </div>
            <div style={styles.calcOutputBox}>
              <p style={styles.calcOutputLabel}>Estimated Future Balance Horizon Asset Value</p>
              <span style={{ ...styles.calcOutputValue, color: tokens.secondary }}>
                {formatCurrency(futureValue)}
              </span>
            </div>
          </div>

        </aside>

      </main>
    </div>
  );
};

/* --- Explicit High-Fidelity Design Matrix Sheet --- */
const styles: { [key: string]: React.CSSProperties } = {
  dashboardWrapper: {
    minHeight: '100vh',
    color: '#ffffff',
    fontFamily: '"Segoe UI", Roboto, Helvetica, sans-serif',
    paddingBottom: '60px',
    transition: 'background 0.5s ease-in-out',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 6%',
    background: 'rgba(15, 23, 42, 0.35)',
    backdropFilter: 'blur(16px)',
    WebkitBackdropFilter: 'blur(16px)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
    position: 'sticky',
    top: 0,
    zIndex: 100,
  },
  logo: {
    fontSize: '24px',
    fontWeight: 800,
    letterSpacing: '1px',
  },
  navLinks: {
    display: 'flex',
    gap: '30px',
  },
  navItem: {
    color: '#ffffff',
    textDecoration: 'none',
    fontSize: '15px',
    fontWeight: 500,
    opacity: 0.85,
    transition: 'opacity 0.2s ease',
  },
  themeSelector: {
    background: 'rgba(255, 255, 255, 0.06)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    color: '#ffffff',
    padding: '8px 14px',
    borderRadius: '20px',
    cursor: 'pointer',
    fontWeight: 600,
    outline: 'none',
  },
  mainContainer: {
    maxWidth: '1280px',
    margin: '40px auto 0 auto',
    padding: '0 24px',
    display: 'grid',
    gridTemplateColumns: '2.1fr 1fr',
    gap: '32px',
  },
  welcomeBanner: {
    gridColumn: '1 / -1',
    background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.12), rgba(217, 70, 239, 0.12))',
    border: '1px solid rgba(255, 255, 255, 0.12)',
    borderRadius: '24px',
    padding: '32px',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
  },
  bannerTitle: {
    fontSize: '32px',
    fontWeight: 700,
    marginBottom: '6px',
    letterSpacing: '-0.5px',
  },
  bannerSubtitle: {
    color: '#94a3b8',
    fontSize: '15px',
  },
  primaryColumn: {
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
  },
  secondaryColumn: {
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
  },
  card: {
    background: 'rgba(255, 255, 255, 0.04)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    borderRadius: '24px',
    padding: '28px',
    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.25)',
  },
  cardTitle: {
    fontSize: '19px',
    fontWeight: 700,
    marginBottom: '22px',
    letterSpacing: '0.25px',
  },
  metricsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '20px',
  },
  metricCard: {
    background: 'rgba(255, 255, 255, 0.02)',
    border: '1px solid rgba(255, 255, 255, 0.06)',
    borderRadius: '16px',
    padding: '22px',
  },
  metricLabel: {
    fontSize: '12px',
    color: '#94a3b8',
    textTransform: 'uppercase',
    letterSpacing: '0.75px',
    marginBottom: '6px',
  },
  metricValue: {
    fontSize: '26px',
    fontWeight: 700,
    letterSpacing: '-0.5px',
  },
  formStructure: {
    display: 'flex',
    flexDirection: 'column',
    gap: '18px',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  formLabel: {
    fontSize: '13px',
    color: '#94a3b8',
  },
  formControl: {
    background: 'rgba(0, 0, 0, 0.25)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '12px',
    padding: '12px 16px',
    color: '#ffffff',
    fontSize: '15px',
    outline: 'none',
  },
  formRowSplit: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '16px',
  },
  actionBtn: {
    border: 'none',
    padding: '14px',
    borderRadius: '12px',
    color: '#ffffff',
    fontWeight: 700,
    fontSize: '15px',
    cursor: 'pointer',
    marginTop: '6px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
  },
  featuresShowcase: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
    gap: '16px',
  },
  featureBox: {
    background: 'rgba(255, 255, 255, 0.01)',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    borderRadius: '16px',
    padding: '18px',
    textAlign: 'center',
  },
  featureIcon: {
    fontSize: '28px',
    marginBottom: '8px',
  },
  featureTitle: {
    fontSize: '15px',
    fontWeight: 600,
    marginBottom: '4px',
  },
  featureText: {
    fontSize: '12px',
    color: '#94a3b8',
    lineHeight: '1.4',
  },
  transactionList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    maxHeight: '310px',
    overflowY: 'auto',
  },
  transactionItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '14px 0',
    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
  },
  txItemTitle: {
    fontSize: '14px',
    fontWeight: 600,
    margin: 0,
  },
  txItemMeta: {
    fontSize: '12px',
    color: '#64748b',
    margin: '2px 0 0 0',
  },
  txItemAmount: {
    fontWeight: 700,
    fontSize: '15px',
  },
  rangeSlider: {
    width: '100%',
    margin: '6px 0',
    cursor: 'pointer',
  },
  calcOutputBox: {
    background: 'rgba(255, 255, 255, 0.03)',
    border: '1px dashed rgba(255, 255, 255, 0.12)',
    padding: '16px',
    borderRadius: '14px',
    textAlign: 'center',
    marginTop: '16px',
  },
  calcOutputLabel: {
    fontSize: '12px',
    color: '#94a3b8',
    margin: '0 0 4px 0',
  },
  calcOutputValue: {
    fontSize: '22px',
    fontWeight: 700,
  },
};

export default SmartBankDashboard;
