"use client";

import { useEffect, useState } from "react";
import checkUserLogin from "../user-cookies/check-user-login";
import { redirect, usePathname } from "next/navigation";

import { IsUserLoggedIn } from "../all-context";

interface LoginCheckProps {
  children: React.ReactNode;
}

export default function LoginCheck({ children }: LoginCheckProps) {
  const pageName = usePathname();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    async function checkAuth() {
      const isUserSessionValid = await checkUserLogin();

      if (!isUserSessionValid) {
        redirect("/user/login");
      }

      setIsLoggedIn(isUserSessionValid);
    }

    checkAuth();
  }, [pageName]);

  if (pageName === "/user/login" || pageName === "/user/register") {
    return (
      <IsUserLoggedIn.Provider value={isLoggedIn}>
        {children}
      </IsUserLoggedIn.Provider>
    );
  }

  return (
    <IsUserLoggedIn.Provider value={isLoggedIn}>
      {isLoggedIn && children}
    </IsUserLoggedIn.Provider>
  );
}
