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
  currentInputValue,
}: UserInputProps) {
  return (
    <div className="flex justify-between w-full">
      <label htmlFor={`${labelText}-input`} className="w-1/3">
        {labelText}:
      </label>
      <input
        className="w-2/3 placeholder:text-blue-600 text-blue-600"
        onChange={(e) => alterInput(e.target.value)}
        value={currentInputValue}
        id={`${labelText}-input`}
        type={inputType}
        placeholder={`Enter ${labelText.toLowerCase()}...`}
      />
    </div>
  );
}
