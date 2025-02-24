"use client";
import { useMutation } from "@tanstack/react-query";
import { endPointURL } from "@/utils/constant-vars";
import axios from "axios";
import { ServerResponseObj } from "@/utils/types";
import storeUserLogin from "@/utils/user-cookies/store-user-login";
import { redirect } from "next/navigation";

interface useUserAccessParams {
  isRegistering: boolean;
}

type UserParams = {
  userName: string;
  userKey: string;
};

export default function useUserAccess({ isRegistering }: useUserAccessParams) {
  const { error, isSuccess, mutateAsync } = useMutation({
    mutationFn: handleUserAccess,
    onSuccess: storeUserSession,
  });

  async function handleUserAccess({ userName, userKey }: UserParams) {
    if (isRegistering) {
      const { data } = await registerUser({ userName, userKey });
      return data;
    } else {
      const { data } = await loginUser({ userName, userKey });
      return data;
    }
  }

  async function registerUser({ userName, userKey }: UserParams) {
    return await axios({
      method: "post",
      url: `${endPointURL}/user/register`,
      data: {
        userName,
        userKey,
      },
    });
  }

  async function loginUser({ userName, userKey }: UserParams) {
    return await axios({
      method: "post",
      url: `${endPointURL}/user/login`,
      data: {
        userName,
        userKey,
      },
    });
  }

  async function storeUserSession(responseObj: ServerResponseObj) {
    if (responseObj.success && responseObj.transferData?.jwt) {
      const isStored = await storeUserLogin(responseObj.transferData?.jwt);
      if (isStored) redirect("/");
    }
  }

  return { mutateAsync, error, isSuccess };
}
