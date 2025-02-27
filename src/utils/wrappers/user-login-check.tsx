"use client";

import { useEffect, useState } from "react";
import checkUserLogin from "../user-cookies/check-user-login";
import { redirect, usePathname } from "next/navigation";

import { IsUserLoggedIn } from "../all-context";
import Header from "@/components/header";

interface LoginCheckProps {
  children: React.ReactNode;
}

export default function LoginCheck({ children }: LoginCheckProps) {
  const pageName = usePathname();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    async function checkAuth() {
      const isUserSessionValid = await checkUserLogin();

      if (
        !isUserSessionValid &&
        pageName !== "/user/register" &&
        pageName !== "/user/login"
      ) {
        redirect("/user/login");
      }

      setIsLoggedIn(isUserSessionValid);
    }

    checkAuth();
  }, [pageName]);

  if (pageName === "/user/login") {
    return (
      <IsUserLoggedIn.Provider value={isLoggedIn}>
        <Header showLoginButton={false} showRegisterButton={true}>
          {children}
        </Header>
      </IsUserLoggedIn.Provider>
    );
  } else if (pageName === "/user/register") {
    return (
      <IsUserLoggedIn.Provider value={isLoggedIn}>
        <Header showLoginButton={true} showRegisterButton={false}>
          {children}
        </Header>
      </IsUserLoggedIn.Provider>
    );
  }

  return (
    <IsUserLoggedIn.Provider value={isLoggedIn}>
      <Header showLoginButton={true} showRegisterButton={true}>
        {isLoggedIn && children}
      </Header>
    </IsUserLoggedIn.Provider>
  );
}
