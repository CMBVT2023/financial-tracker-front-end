import { useMutation } from "@tanstack/react-query";

import { endPointURL, getQueryKey } from "@/utils/constant-vars";
import axios from "axios";
import { ServerResponseObj } from "@/utils/types";

export default function useEntryEdit() {
    const mainQueryClient = useQueryClient();

    const {mutateAsync, isSuccess, error} = useMutation({
        mutationFn: editFinancialEntry,
        onSuccess: invalidateQueries
    })

    async function editFinancialEntry() {
        const response = await axios({
            method: "put",
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