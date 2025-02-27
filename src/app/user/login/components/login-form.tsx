"use client";
import useUserAccess from "@/hooks/queries/useUserAccess";
import LabeledInput from "@/components/labeled-input";
import { FormEvent, useContext, useRef } from "react";

export default function LoginForm() {
  const userNameRef = useRef<HTMLInputElement>(null);
  const userKeyRef = useRef<HTMLInputElement>(null);
  const {
    mutateAsync: triggerLogin,
    error,
    isSuccess,
  } = useUserAccess({ isRegistering: false });

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const userName = userNameRef?.current?.value || "";
    const userKey = userKeyRef?.current?.value || "";

    if (userName !== "" && userKey !== "") {
      triggerLogin({
        userName,
        userKey,
      });
    }
  }

  const RenderForm = () => {
      return (
        <form
          onSubmit={handleSubmit}
          className="w-full sm:w-1/2 xl:w-1/3 h-1/2 md:h-1/3 flex flex-col justify-around bg-blue-800 text-white p-2"
        >
          <h1 className="text-4xl">Login</h1>
          <LabeledInput
            inputType="text"
            labelText="Username"
            inputRef={userNameRef}
          />
          <LabeledInput
            inputType="password"
            labelText="Password"
            inputRef={userKeyRef}
          />
          <input
            type="submit"
            value="Sign In"
            className="outline-white outline w-1/2 self-center cursor-pointer"
          />
        </form>
      );
  };

  return <RenderForm />;
}
