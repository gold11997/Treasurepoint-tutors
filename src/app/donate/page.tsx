import Link from "next/link";
import styles from "../dashboard.module.css";

export default function Donate() {
  return (
    <div className={`container animate-fade-in ${styles.dashboardContainer}`}>
      <header className={styles.dashboardHeader}>
        <h1>Support TreasurePoint Tutors</h1>
        <nav className={styles.navLinks}>
          <Link href="/dashboard" className={styles.navLink}>Overview</Link>
          <Link href="/questions" className={styles.navLink}>Questions Bank</Link>
          <Link href="/community" className={styles.navLink}>Community</Link>
        </nav>
      </header>

      <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ marginBottom: '1.5rem', color: 'var(--primary)' }}>Empower the Next Generation of Accountants</h2>
        <p style={{ lineHeight: 1.8, marginBottom: '2rem', color: 'var(--text-muted)' }}>
          TreasurePoint Tutors is dedicated to providing high-quality, simplified solutions and resources to professional students. Your free-will donation helps us maintain the platform, record more video lectures, and support students across Nigeria, the UK, Canada, and Ghana.
        </p>

        <div className={styles.card} style={{ textAlign: 'left', marginBottom: '2rem' }}>
          <h3 style={{ marginBottom: '1.5rem', textAlign: 'center' }}>Make a Free-Will Donation</h3>
          
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', justifyContent: 'center' }}>
            <button className="btn btn-outline">₦5,000</button>
            <button className="btn btn-outline">₦10,000</button>
            <button className="btn btn-outline">₦20,000</button>
            <button className="btn btn-primary">Custom Amount</button>
          </div>

          <button className="btn btn-secondary" style={{ width: '100%', padding: '1rem', fontSize: '1.1rem' }}>
            Donate Securely via Paystack
          </button>
          <p style={{ textAlign: 'center', marginTop: '1rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            We securely accept all major debit cards and bank transfers locally and internationally.
          </p>
        </div>
      </div>
    </div>
  );
}
