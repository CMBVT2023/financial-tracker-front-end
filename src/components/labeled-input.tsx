"use client";
import { Ref } from "react";

interface LabeledInputProps {
  inputType: string;
  labelText: string;
  inputRef: Ref<HTMLInputElement>;
}

export default function LabeledInput({
  inputType,
  labelText,
  inputRef,
}: LabeledInputProps) {
  return (
    <>
      <label htmlFor={`${labelText}-input`}>{labelText}:</label>
      <input
        ref={inputRef}
        id={`${labelText}-input`}
        type={inputType}
        placeholder={`Enter ${labelText.toLowerCase()}...`}
      />
    </>
  );
}
