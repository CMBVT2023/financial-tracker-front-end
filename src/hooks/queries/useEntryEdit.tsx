import { useMutation, useQueryClient } from "@tanstack/react-query";

import { endPointURL, getQueryKey } from "@/utils/constant-vars";
import axios from "axios";
import type { FinancialEntryInfo, ServerResponseObj } from "@/utils/types";
import getUserLogin from "@/utils/user-cookies/get-user-login";
import { redirect } from "next/navigation";

export default function useEntryEdit() {
  const mainQueryClient = useQueryClient();

  const { mutateAsync, isSuccess, error } = useMutation({
    mutationFn: editFinancialEntry,
    onSuccess: invalidateQueries,
  });

  async function editFinancialEntry({
    itemName,
    itemCost,
    purchasedFrom,
    itemQuantity,
    itemManufacturer,
    entryID,
  }: FinancialEntryInfo) {
    const editedFinancialEntry = {
      newItemName: itemName,
      newItemCost: itemCost,
      newPurchasedFrom: purchasedFrom,
      newItemQuantity: itemQuantity,
      newItemManufacturer: itemManufacturer,
      entryID,
    };
    const userSession = await getUserLogin();
    if (userSession === null || userSession === undefined) return null;
    const headers = {
      authorization: userSession,
    };

    const response = await axios({
      method: "put",
      headers,
      url: `${endPointURL}/entries/edit-financial-entry`,
      data: editedFinancialEntry,
    });
    return response.data;
  }

  async function invalidateQueries() {
    mainQueryClient.invalidateQueries({ queryKey: [getQueryKey] });
    redirect("/financial-table");
  }

  return { mutateAsync, isSuccess, error };
}
