import { useMutation, useQueryClient } from "@tanstack/react-query";

import {
  endPointURL,
  getQueryKey,
  postMutationKey,
} from "@/utils/constant-vars";
import axios from "axios";
import type { FinancialEntryInfo } from "@/utils/types";
import getUserLogin from "@/utils/user-cookies/get-user-login";
import { redirect } from "next/navigation";

export default function useEntryAddition() {
  const mainQueryClient = useQueryClient();

  const { mutateAsync, isSuccess, error } = useMutation({
    mutationKey: [postMutationKey],
    mutationFn: addFinancialEntry,
    onSuccess: invalidateQueries,
  });

  async function addFinancialEntry({
    itemName,
    itemCost,
    purchasedFrom,
    entryDate,
    itemQuantity,
    itemManufacturer,
  }: FinancialEntryInfo) {
    const newFinancialEntry = {
      itemName,
      itemCost,
      purchasedFrom,
      entryDate,
      itemQuantity,
      itemManufacturer,
    };
    const userSession = await getUserLogin();
    if (userSession === null || userSession === undefined) return null;
    const headers = {
      authorization: userSession,
    };

    const response = await axios({
      method: "post",
      headers,
      url: `${endPointURL}/entries/add-financial-entry`,
      data: newFinancialEntry,
    });
    return response.data;
  }

  async function invalidateQueries() {
    mainQueryClient.invalidateQueries({ queryKey: [getQueryKey] });
    redirect("/financial-table");
  }

  return { mutateAsync, isSuccess, error };
}
