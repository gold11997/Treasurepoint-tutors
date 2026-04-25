import Link from "next/link";
import styles from "../auth.module.css";
import { login } from "../auth/actions";

export default function Login({ searchParams }: { searchParams: { error?: string } }) {
  return (
    <div className="container animate-fade-in">
      <div className={styles.formContainer}>
        <h1 className={styles.formTitle}>Welcome Back</h1>

        {searchParams.error && (
          <div style={{ backgroundColor: 'rgba(239, 68, 68, 0.1)', color: '#ef4444', padding: '1rem', borderRadius: 'var(--radius-md)', marginBottom: '1.5rem', textAlign: 'center', fontSize: '0.9rem' }}>
            {searchParams.error}
          </div>
        )}

        <form action={login}>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="email">Email Address</label>
            <input className={styles.input} type="email" id="email" name="email" placeholder="john@example.com" required />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="password">Password</label>
            <input className={styles.input} type="password" id="password" name="password" placeholder="••••••••" required />
          </div>
          <button type="submit" className={`btn btn-primary ${styles.submitBtn}`}>
            Log In
          </button>
        </form>
        <p className={styles.footerText}>
          Don't have an account? <Link href="/register">Register here</Link>
        </p>
      </div>
    </div>
  );
}
