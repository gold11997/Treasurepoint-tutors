import Link from "next/link";
import styles from "../dashboard.module.css";
import { createClient } from "@/utils/supabase/server";
import { logout } from "../auth/actions";

export default async function QuestionsBank() {
  const supabase = createClient();
  const { data: questions, error } = await supabase
    .from('questions')
    .select('*')
    .order('created_at', { ascending: false });

  return (
    <div className={`container animate-fade-in ${styles.dashboardContainer}`}>
      <header className={styles.dashboardHeader}>
        <h1>Questions Bank</h1>
        <nav className={styles.navLinks}>
          <Link href="/dashboard" className={styles.navLink}>Overview</Link>
          <Link href="/questions" className={`${styles.navLink} ${styles.active}`}>Questions Bank</Link>
          <Link href="/community" className={styles.navLink}>Community</Link>
          <form action={logout}>
            <button type="submit" className={styles.navLink} style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontSize: 'inherit' }}>
              Log out
            </button>
          </form>
        </nav>
      </header>

      <input 
        type="text" 
        placeholder="Search for topics, standards (e.g., IFRS 9), or keywords..." 
        className={styles.searchBar} 
      />

      <div className={styles.questionList}>
        {questions && questions.length > 0 ? (
          questions.map((q) => (
            <div key={q.id} className={styles.questionItem}>
              <div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>{q.title}</h3>
                <div className={styles.questionMeta}>
                  <span className={styles.tag}>{q.subject}</span>
                  <span>{q.diet_year}</span>
                  <span>• {q.difficulty}</span>
                </div>
              </div>
              <button className="btn btn-primary" style={{ padding: '0.5rem 1rem' }}>
                View Solution
              </button>
            </div>
          ))
        ) : (
          <div className={styles.card} style={{ textAlign: 'center', padding: '4rem' }}>
            <h3 className={styles.cardTitle}>No questions found</h3>
            <p className={styles.cardDescription}>
              Once you add questions to your Supabase database, they will appear here automatically.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
