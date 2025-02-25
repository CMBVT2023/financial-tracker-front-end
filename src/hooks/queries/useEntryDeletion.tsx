import { useMutation, useQueryClient } from "@tanstack/react-query";

import { endPointURL, getQueryKey } from "@/utils/constant-vars";
import axios from "axios";
import { ServerResponseObj } from "@/utils/types";
import getUserLogin from "@/utils/user-cookies/get-user-login";

export default function useEntryDeletion() {
  const mainQueryClient = useQueryClient();

  const { mutateAsync, isSuccess, error } = useMutation({
    mutationFn: deleteFinancialEntry,
    onSuccess: invalidateQueries,
  });

  async function deleteFinancialEntry(entryID: number) {
    const userSession = await getUserLogin();
    if (userSession === null || userSession === undefined) return null;
    const headers = {
      authorization: userSession,
    };

    const response = await axios({
      method: "delete",
      headers,
      url: `${endPointURL}/entries/remove-financial-entry`,
      data: {
        entryID,
      },
    });
    return response.data;
  }

  async function invalidateQueries() {
    mainQueryClient.invalidateQueries({ queryKey: [getQueryKey] });
  }

  return { mutateAsync, isSuccess, error };
}
