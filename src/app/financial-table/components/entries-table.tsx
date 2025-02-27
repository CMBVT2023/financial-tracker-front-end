"use client";

import useEntryRetrieval from "@/hooks/queries/useEntryRetrieval";
import type { FinancialEntryDataBaseInfo, ReactQueryData } from "@/utils/types";
import Entry from "./entry";
import useEntryDeletion from "@/hooks/queries/useEntryDeletion";

export default function EntriesTable() {
  const {
    data: retrievalData,
    isLoading: isRetrieving,
    error: retrievalError,
  }: ReactQueryData = useEntryRetrieval();
  const {
    mutateAsync: removeEntry,
    isSuccess: isDeletionSuccessful,
    error: deletionError,
  } = useEntryDeletion();

  if (isRetrieving) {
    return <>Loading...</>;
  }

  function deleteEntry(entryID: number) {
    const confirmation = confirm(
      "Warning, this will permanently remove the financial entry. Do you wish to continue?"
    );
    if (confirmation) removeEntry(entryID);
  }

  const financialEntries = retrievalData?.transferData?.entriesArray?.map(
    (entryInfo: FinancialEntryDataBaseInfo) => {
      return (
        <Entry
          key={entryInfo.entry_id}
          entryInfoObj={entryInfo}
          deleteEntry={deleteEntry}
        />
      );
    }
  );

  return (
    <div>
      <div className="grid-cols-5">
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
