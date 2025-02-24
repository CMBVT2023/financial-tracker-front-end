import { useMutation, useQueryClient } from "@tanstack/react-query";

import { endPointURL, getQueryKey } from "@/utils/constant-vars";
import axios from "axios";
import type { FinancialEntryInfo, ServerResponseObj } from "@/utils/types";

export default function useEntryEdit() {
    const mainQueryClient = useQueryClient();

    const {mutateAsync, isSuccess, error} = useMutation({
        mutationFn: editFinancialEntry,
        onSuccess: invalidateQueries
    })

    async function editFinancialEntry({itemName, itemCost, purchasedFrom, itemQuantity, itemManufacturer}: FinancialEntryInfo) {
        const editedFinancialEntry = {
            newItemName: itemName,
            newItemCost: itemCost,
            newPurchasedFrom: purchasedFrom,
            newItemQuantity: itemQuantity,
            newItemManufacturer: itemManufacturer
        }

        const response = await axios({
            method: "put",
            url: `${endPointURL}`,
            data: editedFinancialEntry
        })
        return response.data;
    }

    async function invalidateQueries() {
        mainQueryClient.invalidateQueries({queryKey: [getQueryKey]});
    }

    return {mutateAsync, isSuccess, error};
}