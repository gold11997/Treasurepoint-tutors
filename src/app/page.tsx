import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container animate-fade-in">
          <span style={{ fontWeight: 600, color: 'var(--secondary)', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '1rem', display: 'block' }}>
            TreasurePoint Tutors
          </span>
          <h1 className={styles.heroTitle}>Master Your ICAN Exams with Confidence</h1>
          <p className={styles.heroSubtitle}>
            Expert guidance in Financial Management, Financial Reporting, and Audit & Investigation. 
            Access over 100 professionally solved questions, peer-to-peer communities, and premium study materials.
          </p>
          <div className={styles.ctaGroup}>
            <Link href="/register" className="btn btn-primary">
              Start Learning for Free
            </Link>
            <Link href="/about" className="btn btn-outline">
              Meet Your Tutor
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.featuresSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Everything You Need to Pass</h2>
          <div className={styles.featuresGrid}>
            
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
              </div>
              <h3>100+ Solved Questions</h3>
              <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>
                Complex questions broken down into simple, professional, and easy-to-understand solutions.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>
              </div>
              <h3>Video Lectures</h3>
              <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>
                High-quality embedded videos walking you through core accounting concepts and past questions.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <h3>Active Community</h3>
              <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>
                Join the built-in forum for peer-to-peer learning, study group projects, and direct tutor support.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
