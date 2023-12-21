"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import styles from "./styles.module.css";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      className={`${styles.navItem} ${styles.themeSwitch} ${
        theme === "light" ? styles.themeSwitchLight : styles.themeSwitchDark
      }`}
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
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
