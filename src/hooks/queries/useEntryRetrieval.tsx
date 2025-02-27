"use client";
import { useQuery } from "@tanstack/react-query";

import { endPointURL, getQueryKey } from "@/utils/constant-vars";
import axios from "axios";
import getUserLogin from "@/utils/user-cookies/get-user-login";

export default function useEntryRetrieval() {
  const { data, isLoading, error } = useQuery({
    queryKey: [getQueryKey],
    queryFn: getFinancialEntry,
  });

  async function getFinancialEntry() {
    const userSession = await getUserLogin();
    if (userSession === null || userSession === undefined) return null;
    const headers = {
      authorization: userSession,
    };
    const response = await axios({
      method: "get",
      headers,
      url: `${endPointURL}/entries/all-financial-entries`,
    });
    return response.data;
  }

  return { data, isLoading, error };
}
