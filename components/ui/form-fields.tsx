"use client";

import React, { forwardRef } from "react";
import { Check } from "lucide-react";

interface FieldProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label: string;
  error?: string;
  required?: boolean;
}

export const InputField = forwardRef<HTMLInputElement, FieldProps>(
  ({ label, error, required, className = "", ...props }, ref) => {
    return (
      <div className="space-y-2">
        <label className="text-[10px] font-bold font-mono uppercase tracking-[0.2em] text-muted-foreground ml-1">
          {label} {required && <span className="text-primary">*</span>}
        </label>
        <input
          ref={ref}
          type="text"
          className={`w-full bg-background/30 border ${
            error ? "border-red-500" : "border-border"
          } rounded-xl px-5 py-4 font-mono text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all placeholder:text-muted-foreground/30 text-foreground ${className}`}
          {...props}
        />
        {error && <p className="text-[10px] text-red-500 font-mono ml-1 animate-in fade-in slide-in-from-top-1">{error}</p>}
      </div>
    );
  }
);
InputField.displayName = "InputField";

export const TextAreaField = forwardRef<HTMLTextAreaElement, FieldProps>(
  ({ label, error, required, className = "", ...props }, ref) => {
    return (
      <div className="space-y-2">
        <label className="text-[10px] font-bold font-mono uppercase tracking-[0.2em] text-muted-foreground ml-1">
          {label} {required && <span className="text-primary">*</span>}
        </label>
        <textarea
          ref={ref as any}
          rows={3}
          className={`w-full bg-background/30 border ${
            error ? "border-red-500" : "border-border"
          } rounded-xl px-5 py-4 font-mono text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all resize-none placeholder:text-muted-foreground/30 leading-relaxed text-foreground ${className}`}
          {...props}
        />
        {error && <p className="text-[10px] text-red-500 font-mono ml-1 animate-in fade-in slide-in-from-top-1">{error}</p>}
      </div>
    );
  }
);
TextAreaField.displayName = "TextAreaField";

interface CheckboxProps {
  label: string;
  value: boolean;
  onChange: (val: boolean) => void;
}

export const CheckboxField = ({ label, value, onChange }: CheckboxProps) => {
  return (
    <div
      onClick={() => onChange(!value)}
      className="group flex items-center gap-4 cursor-pointer select-none"
    >
      <div
        className={`
                flex items-center justify-center w-6 h-6 rounded-md border transition-all duration-300
                ${value ? "bg-primary border-primary" : "bg-background border-border group-hover:border-primary/50"}
            `}
      >
        {value && <Check className="w-4 h-4 text-primary-foreground" />}
      </div>
      <span
        className={`font-mono text-xs uppercase tracking-wider transition-colors ${
          value ? "text-foreground font-bold" : "text-muted-foreground"
        }`}
      >
        {label}
      </span>
    </div>
  );
};
