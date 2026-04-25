import Link from "next/link";
import styles from "../dashboard.module.css";

export default function Community() {
  return (
    <div className={`container animate-fade-in ${styles.dashboardContainer}`}>
      <header className={styles.dashboardHeader}>
        <h1>Student Community</h1>
        <nav className={styles.navLinks}>
          <Link href="/dashboard" className={styles.navLink}>Overview</Link>
          <Link href="/questions" className={styles.navLink}>Questions Bank</Link>
          <Link href="/community" className={`${styles.navLink} ${styles.active}`}>Community</Link>
        </nav>
      </header>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h2>Discussion Boards</h2>
        <button className="btn btn-primary">New Discussion</button>
      </div>

      <div className={styles.questionList}>
        <div className={styles.questionItem} style={{ cursor: 'pointer' }}>
          <div>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>Clarification on IFRS 15 Revenue Recognition Step 3</h3>
            <div className={styles.questionMeta}>
              <span>Posted by: Sarah J.</span>
              <span>• 2 hours ago</span>
              <span>• 5 Replies</span>
            </div>
          </div>
          <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>View Thread</span>
        </div>

        <div className={styles.questionItem} style={{ cursor: 'pointer' }}>
          <div>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>Study Group for May Diet - Financial Management</h3>
            <div className={styles.questionMeta}>
              <span>Posted by: Michael B.</span>
              <span>• 1 day ago</span>
              <span>• 12 Replies</span>
            </div>
          </div>
          <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>View Thread</span>
        </div>

        <div className={styles.questionItem} style={{ cursor: 'pointer' }}>
          <div>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>Tutor Verified: How to easily remember Audit Assertions</h3>
            <div className={styles.questionMeta}>
              <span className={styles.tag}>Pinned</span>
              <span>Posted by: Tutor</span>
              <span>• 3 days ago</span>
              <span>• 45 Replies</span>
            </div>
          </div>
          <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>View Thread</span>
        </div>
      </div>
    </div>
  );
}
