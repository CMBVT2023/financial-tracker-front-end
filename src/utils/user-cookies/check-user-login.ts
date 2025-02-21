"use server";

import { cookies } from "next/headers";

export default async function checkUserLogin() {
  try {
    const storedCookies = await cookies();

    const isUserStored = storedCookies.has("user");

    return isUserStored;
  } catch (error) {
    console.error(error);
    return false;
  }
}
