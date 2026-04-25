import Link from "next/link";
import styles from "./dashboard.module.css";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { logout } from "../auth/actions";

export default async function Dashboard() {
  const supabase = createClient();
  const { data: { user }, error } = await supabase.auth.getUser();

  if (error || !user) {
    redirect('/login');
  }

  return (
    <div className={`container animate-fade-in ${styles.dashboardContainer}`}>
      <header className={styles.dashboardHeader}>
        <div>
          <h1>Student Dashboard</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Logged in as: {user.email}</p>
        </div>
        <nav className={styles.navLinks}>
          <Link href="/dashboard" className={`${styles.navLink} ${styles.active}`}>Overview</Link>
          <Link href="/questions" className={styles.navLink}>Questions Bank</Link>
          <Link href="/community" className={styles.navLink}>Community</Link>
          <form action={logout}>
            <button type="submit" className={styles.navLink} style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontSize: 'inherit' }}>
              Log out
            </button>
          </form>
        </nav>
      </header>

      <div className={styles.grid}>
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>100+ Solved Questions</h2>
          <p className={styles.cardDescription}>
            Dive into our comprehensive database of ICAN past questions, solved with simple, professional methodologies.
          </p>
          <Link href="/questions" className="btn btn-primary">Browse Questions</Link>
        </div>

        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Video Resources</h2>
          <p className={styles.cardDescription}>
            Watch detailed walkthroughs of complex calculations and reporting standards.
          </p>
          <Link href="/resources" className="btn btn-secondary">Watch Videos</Link>
        </div>

        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Peer Community</h2>
          <p className={styles.cardDescription}>
            Join discussion groups, ask questions, and collaborate with other students preparing for the same exams.
          </p>
          <Link href="/community" className="btn btn-outline">Join Discussion</Link>
        </div>
      </div>
    </div>
  );
}
