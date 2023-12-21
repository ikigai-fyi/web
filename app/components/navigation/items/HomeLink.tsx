import Link from "next/link";
import styles from "./styles.module.css";

export default function HomeLink() {
  return (
    <Link className={styles.navItem} href="/">
      Memories
    </Link>
  );
}
