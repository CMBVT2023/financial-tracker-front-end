import { useMutation, useQueryClient } from "@tanstack/react-query";

import { endPointURL, getQueryKey, postMutationKey } from "@/utils/constant-vars";
import axios from "axios";
import { ServerResponseObj } from "@/utils/types";

export default function useEntryAddition() {
    const mainQueryClient = useQueryClient();

    const {mutateAsync, isSuccess, error} = useMutation({
        mutationKey: [postMutationKey],
        mutationFn: addFinancialEntry,
        onSuccess: invalidateQueries
    })

    async function addFinancialEntry() {
        const response = await axios({
            method: "post",
            url: `${endPointURL}`,
            data: {
                
            }
        })
        return response.data;
    }

    async function invalidateQueries() {
        mainQueryClient.invalidateQueries({queryKey: [getQueryKey]});
    }

    return {mutateAsync, isSuccess, error};
}