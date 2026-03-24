"use client";

import { initConsoleGame } from "@/lib/consoleGame";
import { useEffect } from "react";

export function ConsoleEasterEgg() {
  useEffect(() => {
    initConsoleGame();
  }, []);

  return null;
}
