import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <h1>Home Page</h1>
        <div className={styles.link}>
          <Link href="/login">Login</Link>
        </div>
        <div className={styles.link}>
          <Link href="/admin">Admin</Link>
        </div>
      </div>
    </main>
  );
}
