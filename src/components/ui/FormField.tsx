import type { InputHTMLAttributes, SelectHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

const baseControl =
  "mt-1.5 h-[52px] w-full rounded-md border bg-surface px-4 text-[1.05rem] text-ink-900 placeholder:text-ink-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-berry-500";

export function TextField({
  label,
  id,
  error,
  hint,
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement> & { label: string; id: string; error?: string; hint?: string }) {
  return (
    <div className={className}>
      <label htmlFor={id} className="block text-[1.02rem] font-medium text-ink-900">
        {label}
        {props.required ? <span className="text-danger-600"> *</span> : null}
      </label>
      <input
        id={id}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-err` : hint ? `${id}-hint` : undefined}
        className={cn(baseControl, error ? "border-danger-600" : "border-line-300")}
        {...props}
      />
      {error ? (
        <p id={`${id}-err`} role="alert" className="mt-1 text-small text-danger-600">
          {error}
        </p>
      ) : hint ? (
        <p id={`${id}-hint`} className="mt-1 text-small text-ink-500">
          {hint}
        </p>
      ) : null}
    </div>
  );
}

export function SelectField({
  label,
  id,
  error,
  children,
  className,
  ...props
}: SelectHTMLAttributes<HTMLSelectElement> & { label: string; id: string; error?: string; children: ReactNode }) {
  return (
    <div className={className}>
      <label htmlFor={id} className="block text-[1.02rem] font-medium text-ink-900">
        {label}
        {props.required ? <span className="text-danger-600"> *</span> : null}
      </label>
      <select
        id={id}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-err` : undefined}
        className={cn(baseControl, error ? "border-danger-600" : "border-line-300")}
        {...props}
      >
        {children}
      </select>
      {error ? (
        <p id={`${id}-err`} role="alert" className="mt-1 text-small text-danger-600">
          {error}
        </p>
      ) : null}
    </div>
  );
}
