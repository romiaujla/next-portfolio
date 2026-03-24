"use client";

import { useEffect } from "react";

export function NotFoundChrome() {
  useEffect(() => {
    document.body.classList.add("not-found-page");
    return () => document.body.classList.remove("not-found-page");
  }, []);

  return null;
}
