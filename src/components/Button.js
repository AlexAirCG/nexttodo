import React from "react";
import { cn } from "./utils";

export default function Button({ className, textButton, iconButton }) {
  return (
    <button
      className={cn(
        "py-1 px-2 rounded border border-gray-500 hover:border-gray-300",
        className
      )}
    >
      {textButton}
      {iconButton}
    </button>
  );
}
