"use client";
import { useMutation } from "@tanstack/react-query";
import { endPointURL } from "../utils/endpoint";

type LoginUserParams = {
  userName: string;
  userKey: string;
};

export default function useUserLogin() {
  const { error, isSuccess, mutateAsync } = useMutation({
    mutationFn: loginUser,
    onSuccess: storeUserSession,
  });

  async function loginUser({ userName, userKey }: LoginUserParams) {
    console.log(userName, userKey);
  }

  async function storeUserSession() {}

  return { mutateAsync, error, isSuccess };
}
