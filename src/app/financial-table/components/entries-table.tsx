"use client";

import useEntryRetrieval from "@/hooks/queries/useEntryRetrieval";
import type { FinancialEntryDataBaseInfo, ReactQueryData } from "@/utils/types";
import Entry from "./entry";

export default function EntriesTable() {
  const { data, isLoading, error }: ReactQueryData = useEntryRetrieval();

  if (isLoading) {
    return <>Loading...</>;
  }

  const financialEntries = data?.transferData?.entriesArray?.map(
    (entryInfo: FinancialEntryDataBaseInfo) => {
      return <Entry key={entryInfo.entry_id} entryInfoObj={entryInfo} />;
    }
  );

  return (
    <div>
      <div>
        <h2>Name</h2>
        <h2>Cost</h2>
        <h2>Purchase Location</h2>
        <h2>Quantity</h2>
        <h2>Manufacturer</h2>
      </div>
      {financialEntries}
    </div>
  );
}
