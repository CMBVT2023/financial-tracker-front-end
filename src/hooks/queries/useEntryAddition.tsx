import { useMutation, useQueryClient } from "@tanstack/react-query";

import { endPointURL, getQueryKey, postMutationKey } from "@/utils/constant-vars";
import axios from "axios";
import type { ServerResponseObj, FinancialEntryInfo } from "@/utils/types";

export default function useEntryAddition() {
    const mainQueryClient = useQueryClient();

    const {mutateAsync, isSuccess, error} = useMutation({
        mutationKey: [postMutationKey],
        mutationFn: addFinancialEntry,
        onSuccess: invalidateQueries
    })

    async function addFinancialEntry({itemName, itemCost, purchasedFrom, itemQuantity, itemManufacturer}: FinancialEntryInfo) {
        const newFinancialEntry = {
            itemName,
            itemCost,
            purchasedFrom,
            itemQuantity,
            itemManufacturer
        }

        const response = await axios({
            method: "post",
            url: `${endPointURL}/entries/add-financial-entry`,
            data: newFinancialEntry
        })
        return response.data;
    }

    async function invalidateQueries() {
        mainQueryClient.invalidateQueries({queryKey: [getQueryKey]});
    }

    return {mutateAsync, isSuccess, error};
}