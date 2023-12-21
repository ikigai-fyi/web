"use client";

import styles from "./styles.module.css";
import { useTheme } from "next-themes";

export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme();
  return (
    <button
      className={styles.navItem}
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? "Light" : "Dark"}
    </button>
  );
}
