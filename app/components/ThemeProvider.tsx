"use client";

import { ThemeProvider as Provider } from "next-themes";

export function ThemeProvider({ children }) {
  return <Provider>{children}</Provider>;
}
