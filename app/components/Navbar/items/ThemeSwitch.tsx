"use client";

import Image from "next/image";
import { useTheme } from "next-themes";

import styles from "./styles.module.css";

export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme();
  return (
    <button
      className={`${styles.navItem} ${styles.themeSwitch}`}
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      suppressHydrationWarning
    >
      <Image
        src={theme === "light" ? "/moon.svg" : "/sun.svg"}
        width={16}
        height={16}
        alt={theme === "light" ? "moon" : "sun"}
      />
    </button>
  );
}
