import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Navbar.module.css";

export function Navbar() {
  const router = useRouter();
  return (
    <nav className="container">
      <div className={styles.navbar}>
        <h1 className={styles.title}>Leila Zomorrodi</h1>
        <div className={styles.menu}>
          <Link href="/">
            <a className={router.pathname == "/" ? styles.active : ""}>Home</a>
          </Link>

          <Link
            href="/about"
            className={router.pathname == "/about" ? styles.active : ""}
          >
            <a>About</a>
          </Link>

          <Link
            href="/project"
            className={router.pathname == "/project" ? styles.active : ""}
          >
            <a>Project</a>
          </Link>

          <Link
            href="/contact"
            className={router.pathname == "/contact" ? styles.active : ""}
          >
            <a>Contact</a>
          </Link>
        </div>
      </div>
    </nav>
  );
}
