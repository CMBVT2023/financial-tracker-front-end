import React from "react";
import EditEntryEditor from "./components/edit-entry-editor";
import type { FinancialEntryDataBaseInfo } from "@/utils/types";

interface EditEntryProps {
  searchParams: FinancialEntryDataBaseInfo;
}

export default async function EditEntry({ searchParams }: EditEntryProps) {
  const pageParameters = await searchParams;

  return (
    <div className="flex justify-center items-center w-full h-full">
      <EditEntryEditor entryValues={pageParameters} />
    </div>
  );
}
