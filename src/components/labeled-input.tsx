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
    <>
      <label htmlFor={`${labelText}-input`}>{labelText}:</label>
      <input
        ref={inputRef}
        id={`${labelText}-input`}
        type={inputType}
        placeholder={`Enter ${labelText.toLowerCase()}...`}
        name={associatedVariable ? associatedVariable : ""}
      />
    </>
  );
}
