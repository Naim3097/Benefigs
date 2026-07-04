"use client";

import { useEffect } from "react";

/**
 * Shared overlay behaviour: close on Escape + lock body scroll while open.
 * (A full focus-trap library can be layered in for production — see docs.)
 */
export function useDialogBehaviour(open: boolean, onClose: () => void) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);
}
