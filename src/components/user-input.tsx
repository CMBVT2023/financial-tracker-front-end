"use client";

import type { Dispatch, SetStateAction } from "react";

interface UserInputProps {
  inputType: string;
  labelText: string;
  alterInput: Dispatch<SetStateAction<string>>;
  currentInputValue: string | number;
}

export default function UserInput({
  inputType,
  labelText,
    alterInput,
    currentInputValue
}: UserInputProps) {
  return (
    <>
      <label htmlFor={`${labelText}-input`}>{labelText}:</label>
      <input
        onChange={(e) => alterInput(e.target.value)}
        value={currentInputValue}
        id={`${labelText}-input`}
        type={inputType}
        placeholder={`Enter ${labelText.toLowerCase()}...`}
      />
    </>
  );
}
