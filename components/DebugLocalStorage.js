"use client";

import { useEffect } from "react";

export default function DebugLocalStorage() {
  useEffect(() => {
    console.log("LOCALSTORAGE CHECK:", window.localStorage);
    console.log("GETITEM TYPE:", typeof window.localStorage?.getItem);
  }, []);

  return null;
}
