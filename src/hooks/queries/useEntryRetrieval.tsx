import { useQuery } from "@tanstack/react-query";

import { endPointURL, getQueryKey } from "@/utils/constant-vars";
import axios from "axios";
import { ServerResponseObj } from "@/utils/types";

export default function useEntryEdit() {
    const {data, isSuccess, error} = useQuery({
        queryKey: [getQueryKey],
        queryFn: getFinancialEntry,
    })

    async function getFinancialEntry() {
        const response = await axios({
            method: "get",
            url: `${endPointURL}/entries/all-financial-entries`
        })
        return response.data;
    }

    return {data, isSuccess, error};
}