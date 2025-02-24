"use server";

import { cookies } from "next/headers";

export default async function getUserLogin() {
  try {
    const storedCookies = await cookies();

    const userJsonInfo = storedCookies.get("user");

    return userJsonInfo?.value;
  } catch (error) {
    console.log(error);
    return null;
  }
}
