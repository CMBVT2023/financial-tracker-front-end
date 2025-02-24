"use client";
import useUserAccess from "@/hooks/queries/useUserAccess";
import LabeledInput from "@/components/labeled-input";
import { FormEvent, useContext, useRef } from "react";
import { redirect } from "next/navigation";
import { IsUserLoggedIn } from "@/utils/all-context";

export default function LoginForm() {
  const isUserLoggedIn = useContext(IsUserLoggedIn);
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

  if (isUserLoggedIn) {
    redirect("/");
  }

  const RenderForm = () => {
    if (!isUserLoggedIn) {
      return (
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
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
          <input type="submit" value="Sign In" />
        </form>
      );
    }
  };

  return <RenderForm />;
}
