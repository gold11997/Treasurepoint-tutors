import Link from "next/link";
import styles from "../auth.module.css";
import { signup } from "../auth/actions";

export default function Register({ searchParams }: { searchParams: { error?: string } }) {
  return (
    <div className="container animate-fade-in">
      <div className={styles.formContainer}>
        <h1 className={styles.formTitle}>Create an Account</h1>
        
        {searchParams.error && (
          <div style={{ backgroundColor: 'rgba(239, 68, 68, 0.1)', color: '#ef4444', padding: '1rem', borderRadius: 'var(--radius-md)', marginBottom: '1.5rem', textAlign: 'center', fontSize: '0.9rem' }}>
            {searchParams.error}
          </div>
        )}

        <form action={signup}>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="full_name">Full Name</label>
            <input className={styles.input} type="text" id="full_name" name="full_name" placeholder="John Doe" required />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="email">Email Address</label>
            <input className={styles.input} type="email" id="email" name="email" placeholder="john@example.com" required />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="password">Password</label>
            <input className={styles.input} type="password" id="password" name="password" placeholder="••••••••" required minLength={6} />
          </div>
          <button type="submit" className={`btn btn-primary ${styles.submitBtn}`}>
            Register
          </button>
        </form>
        <p className={styles.footerText}>
          Already have an account? <Link href="/login">Log in here</Link>
        </p>
      </div>
    </div>
  );
}
