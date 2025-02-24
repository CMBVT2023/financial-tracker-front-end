import { useMutation, useQueryClient } from "@tanstack/react-query";

import { endPointURL, getQueryKey } from "@/utils/constant-vars";
import axios from "axios";
import { ServerResponseObj } from "@/utils/types";

export default function useEntryDeletion() {
    const mainQueryClient = useQueryClient();

    const {mutateAsync, isSuccess, error} = useMutation({
        mutationFn: deleteFinancialEntry,
        onSuccess: invalidateQueries
    })

    async function deleteFinancialEntry(entryID: number) {
        const response = await axios({
            method: "delete",
            url: `${endPointURL}/entries/remove-financial-entry`,
            data: {
                entryID
            }
        })
        return response.data;
    }

    async function invalidateQueries() {
        mainQueryClient.invalidateQueries({queryKey: [getQueryKey]});
    }

    return {mutateAsync, isSuccess, error};
}