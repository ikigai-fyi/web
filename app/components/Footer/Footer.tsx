import Link from "next/link";

import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.container}>
      <Link href="/" className={styles.footer}>
        © {currentYear} Ikigai
      </Link>
    </footer>
  );
}
