import React, { useState } from 'react';

export const SmartBankLogin: React.FC = () => {
  // State management for authentication form
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  // Handle Form Submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    // Basic validation check
    if (!email || !password) {
      setError('Please fill in all security parameters.');
      return;
    }

    setIsLoading(true);
    
    // Simulate API authentication cycle
    setTimeout(() => {
      setIsLoading(false);
      alert(`Smart Bank Gateway Authorized for: ${email}`);
    }, 1500);
  };

  return (
    <>
      {/* Dynamic Injectable Global Style Sheets for Pure Neon Blur Backdrops */}
      <style>{`
        @keyframes pulseGlow {
          0%, 100% { transform: scale(1) translate(0px, 0px); opacity: 0.4; }
          33% { transform: scale(1.15) translate(30px, -50px); opacity: 0.6; }
          66% { transform: scale(0.9) translate(-20px, 20px); opacity: 0.5; }
        }
        .animate-orb-1 { animation: pulseGlow 12s infinite alternate ease-in-out; }
        .animate-orb-2 { animation: pulseGlow 16s infinite alternate-reverse ease-in-out 2s; }
      `}</style>

      <div style={styles.pageContainer}>
        {/* Decorative High-Tech Ambient Light Elements */}
        <div style={{ ...styles.glowOrb, ...styles.orb1 }} className="animate-orb-1" />
        <div style={{ ...styles.glowOrb, ...styles.orb2 }} className="animate-orb-2" />

        <!-- Glassmorphic Central Card Layout -->
        <div style={styles.loginCard}>
          {/* Brand Header */}
          <div style={styles.brandContainer}>
            <h1 style={styles.logoText}>Smart Bank</h1>
            <p style={styles.subtitleText}>NextGen Institutional Sovereign Node Portal</p>
          </div>

          {/* Validation Banner Display */}
          {error && <div style={styles.errorAlert}>{error}</div>}

          {/* Security Credentials Form Input Pipeline */}
          <form onSubmit={handleSubmit} style={styles.formContainer}>
            
            {/* Email Identifier Field Slot */}
            <div style={styles.inputGroup}>
              <label style={styles.label}>Secured Node User ID / Email</label>
              <input
                type="email"
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                placeholder="identity@smartbank.network"
                style={styles.inputControl}
                disabled={isLoading}
              />
            </div>

            {/* Cryptographic Key Phrase Field Slot */}
            <div style={styles.inputGroup}>
              <label style={styles.label}>Access Cryptokey Phrase (Password)</label>
              <div style={styles.passwordWrapper}>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  style={styles.inputControl}
                  disabled={isLoading}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={styles.toggleVisibilityBtn}
                  aria-label="Toggle Password Visibility"
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
            </div>

            {/* Context Actions Container Grid */}
            <div style={styles.utilitiesRow}>
              <label style={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRememberMe(e.target.checked)}
                  style={styles.checkboxInput}
                />
                Keep Device Encrypted
              </label>
              <a href="#forgot" style={styles.textLink}>Recover Credentials?</a>
            </div>

            {/* Gateway Processing Activation Action Trigger */}
            <button type="submit" style={styles.submitBtn} disabled={isLoading}>
              {isLoading ? 'Verifying Structural Hashes...' : 'Authorize Vault Session'}
            </button>
          </form>

          {/* Alternate Third-Party Identity Federation Rails */}
          <div style={styles.dividerZone}>
            <span style={styles.dividerLine}></span>
            <span style={styles.dividerText}>or federate using</span>
            <span style={styles.dividerLine}></span>
          </div>

          <div style={styles.oauthRow}>
            <button type="button" style={styles.oauthBtn} onClick={() => alert('Passkey handshake requested.')}>
              <span>🔑 Passkey</span>
            </button>
            <button type="button" style={styles.oauthBtn} onClick={() => alert('Secure SSO relay requested.')}>
              <span>🌐 OpenID Node</span>
            </button>
          </div>

          {/* Secure Legal Disclaimer Notice Element */}
          <p style={styles.footerNotice}>
            Protected via quantum safe verification blocks. IP footprint recorded globally.
          </p>
        </div>
      </div>
    </>
  );
};

/* --- TypeScript Inlined CSS Design Configuration Matrix --- */
const styles: { [key: string]: React.CSSProperties } = {
  pageContainer: {
    position: 'relative',
    minHeight: '100vh',
    width: '100vw',
    background: 'linear-gradient(135deg, #090d16 0%, #111126 50%, #1a0b2e 100%)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    padding: '20px',
    color: '#ffffff',
    fontFamily: '"Segoe UI", Roboto, sans-serif',
  },
  glowOrb: {
    position: 'absolute',
    borderRadius: '50%',
    filter: 'blur(90px)',
    pointerEvents: 'none',
    zIndex: 1,
  },
  orb1: {
    width: '400px',
    height: '400px',
    top: '15%',
    left: '20%',
    background: 'radial-gradient(circle, rgba(6,182,212,0.4) 0%, rgba(0,0,0,0) 70%)',
  },
  orb2: {
    width: '450px',
    height: '450px',
    bottom: '10%',
    right: '15%',
    background: 'radial-gradient(circle, rgba(217,70,239,0.3) 0%, rgba(0,0,0,0) 70%)',
  },
  loginCard: {
    position: 'relative',
    zIndex: 10,
    width: '100%',
    maxWidth: '460px',
    background: 'rgba(255, 255, 255, 0.04)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.09)',
    borderRadius: '28px',
    padding: '40px',
    boxShadow: '0 24px 60px rgba(0, 0, 0, 0.6), inset 0 1px 2px rgba(255,255,255,0.1)',
  },
  brandContainer: {
    textAlign: 'center',
    marginBottom: '32px',
  },
  logoText: {
    fontSize: '32px',
    fontWeight: 800,
    letterSpacing: '1.5px',
    background: 'linear-gradient(90deg, #06b6d4, #d946ef)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    margin: '0 0 6px 0',
  },
  subtitleText: {
    fontSize: '13px',
    color: '#94a3b8',
    letterSpacing: '0.5px',
    margin: 0,
  },
  errorAlert: {
    background: 'rgba(244, 63, 94, 0.15)',
    border: '1px solid #f43f5e',
    color: '#fda4af',
    padding: '12px 16px',
    borderRadius: '12px',
    fontSize: '14px',
    marginBottom: '20px',
    textAlign: 'center',
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  label: {
    fontSize: '12px',
    color: '#94a3b8',
    textTransform: 'uppercase',
    letterSpacing: '0.75px',
    fontWeight: 600,
  },
  inputControl: {
    width: '100%',
    background: 'rgba(0, 0, 0, 0.3)',
    border: '1px solid rgba(255, 255, 255, 0.12)',
    borderRadius: '12px',
    padding: '14px 16px',
    color: '#ffffff',
    fontSize: '15px',
    outline: 'none',
    transition: 'border-color 0.25s ease',
  },
  passwordWrapper: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
  },
  toggleVisibilityBtn: {
    position: 'absolute',
    right: '16px',
    background: 'none',
    border: 'none',
    color: '#06b6d4',
    fontSize: '12px',
    fontWeight: 700,
    cursor: 'pointer',
    textTransform: 'uppercase',
  },
  utilitiesRow: {
    display: 'flex',
    justifyContent: 'between',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '13px',
  },
  checkboxLabel: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    color: '#94a3b8',
    cursor: 'pointer',
  },
  checkboxInput: {
    accentColor: '#06b6d4',
    cursor: 'pointer',
  },
  textLink: {
    color: '#d946ef',
    textDecoration: 'none',
    fontWeight: 500,
  },
  submitBtn: {
    background: 'linear-gradient(90deg, #06b6d4, #d946ef)',
    border: 'none',
    padding: '15px',
    color: '#ffffff',
    fontWeight: 700,
    fontSize: '16px',
    borderRadius: '12px',
    cursor: 'pointer',
    marginTop: '10px',
    boxShadow: '0 4px 20px rgba(6, 182, 212, 0.35)',
    transition: 'transform 0.2s ease, opacity 0.2s ease',
  },
  dividerZone: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '24px 0',
    gap: '10px',
  },
  dividerLine: {
    flex: 1,
    height: '1px',
    background: 'rgba(255, 255, 255, 0.1)',
  },
  dividerText: {
    fontSize: '12px',
    color: '#64748b',
    textTransform: 'uppercase',
  },
  oauthRow: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '15px',
  },
  oauthBtn: {
    background: 'rgba(255, 255, 255, 0.03)',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    borderRadius: '12px',
    padding: '12px',
    color: '#ffffff',
    fontSize: '14px',
    fontWeight: 600,
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerNotice: {
    textAlign: 'center',
    fontSize: '11px',
    color: '#475569',
    marginTop: '30px',
    lineHeight: '1.4',
  },
};

export default SmartBankLogin;
