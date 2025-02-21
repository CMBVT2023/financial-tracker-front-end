"use server";

import { cookies } from "next/headers";

export default async function storeUserLogin(jwt: string) {
  try {
    const storedCookies = await cookies();

    storedCookies.set("user", `${jwt}`);

    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}
