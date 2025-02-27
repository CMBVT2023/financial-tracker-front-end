"use client";
import useUserAccess from "@/hooks/queries/useUserAccess";
import LabeledInput from "@/components/labeled-input";
import { FormEvent, useRef } from "react";

export default function RegisterForm() {
  const userNameRef = useRef<HTMLInputElement>(null);
  const userKeyRef = useRef<HTMLInputElement>(null);
  const {
    mutateAsync: triggerRegister,
    error,
    isSuccess,
  } = useUserAccess({ isRegistering: true });

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const userName = userNameRef?.current?.value || "";
    const userKey = userKeyRef?.current?.value || "";

    if (userName !== "" && userKey !== "") {
      triggerRegister({
        userName,
        userKey,
      });
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full sm:w-1/2 h-1/2 md:h-1/3 flex flex-col justify-around bg-blue-800 text-white p-2"
    >
      <h1 className="text-4xl">Register</h1>
      <LabeledInput
        inputType="text"
        labelText="Username"
        inputRef={userNameRef}
      />
      <LabeledInput
        inputType="password"
        labelText="New Password"
        inputRef={userKeyRef}
      />
      <input
        type="submit"
        value="Sign Up"
        className="outline-white outline w-1/2 self-center cursor-pointer"
      />
    </form>
  );
}
