"use client";

import { useEffect, useState } from "react";
import checkUserLogin from "../user-cookies/check-user-login";
import { redirect, usePathname } from "next/navigation";
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
        <Header showLoginButton={false} showRegisterButton={true} isUserLoggedIn={isLoggedIn}>
          {children}
        </Header>
    );
  } else if (pageName === "/user/register") {
    return (
      <Header showLoginButton={true} showRegisterButton={false} isUserLoggedIn={isLoggedIn}>
        {children}
      </Header>
    );
  }

  return (
    <Header showLoginButton={true} showRegisterButton={true} isUserLoggedIn={isLoggedIn}>
      {isLoggedIn && children}
    </Header>
  );
}
