"use client";

import { useState } from "react";
import styles from "./styles.module.css";

export default function ThemeSwitch() {
  const [isLightMode, setLightMode] = useState(true);
  return (
    <button
      className={styles.navItem}
      onClick={() => setLightMode(!isLightMode)}
    >
      {isLightMode ? "Light" : "Dark"}
    </button>
  );
}
