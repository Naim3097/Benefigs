"use client";

import { useId, useState } from "react";
import { cn } from "@/lib/utils";
import { IconChevronDown } from "./icons";

type Item = { question: string; answer: string };

/** Accessible FAQ disclosure list (WAI-ARIA accordion pattern). */
export function Accordion({ items, className }: { items: Item[]; className?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <div className={cn("border-y border-line-200", className)}>
      {items.map((item, i) => (
        <AccordionItem
          key={i}
          item={item}
          isOpen={openIndex === i}
          onToggle={() => setOpenIndex(openIndex === i ? null : i)}
        />
      ))}
    </div>
  );
}

function AccordionItem({ item, isOpen, onToggle }: { item: Item; isOpen: boolean; onToggle: () => void }) {
  const id = useId();
  return (
    <div className="border-b border-line-200 last:border-b-0">
      <h3 className="m-0">
        <button
          type="button"
          id={`${id}-btn`}
          aria-expanded={isOpen}
          aria-controls={`${id}-panel`}
          onClick={onToggle}
          className="flex min-h-14 w-full items-center justify-between gap-6 py-5 text-left"
        >
          <span className="text-[1.2rem] font-medium text-ink-900">{item.question}</span>
          <span
            className={cn(
              "grid size-9 shrink-0 place-items-center rounded-full bg-paper-deep text-berry-700 transition-transform duration-300 ease-soft",
              isOpen && "rotate-180",
            )}
          >
            <IconChevronDown width={20} height={20} />
          </span>
        </button>
      </h3>
      <div
        id={`${id}-panel`}
        role="region"
        aria-labelledby={`${id}-btn`}
        hidden={!isOpen}
        className="pb-6 pr-12"
      >
        <p className="text-ink-700">{item.answer}</p>
      </div>
    </div>
  );
}
