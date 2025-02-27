"use client";
import { Ref } from "react";

interface LabeledInputProps {
  inputType: string;
  labelText: string;
  inputRef: Ref<HTMLInputElement>;
  associatedVariable?: string;
}

export default function LabeledInput({
  inputType,
  labelText,
  inputRef,
  associatedVariable,
}: LabeledInputProps) {
  return (
    <div className="flex justify-between w-full">
      <label htmlFor={`${labelText}-input`} className="w-1/4">
        {labelText}:
      </label>
      <input
        className="w-3/4"
        ref={inputRef}
        id={`${labelText}-input`}
        type={inputType}
        placeholder={`Enter ${labelText.toLowerCase()}...`}
        name={associatedVariable ? associatedVariable : ""}
      />
    </div>
  );
}
