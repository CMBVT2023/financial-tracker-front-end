"use client";

import useEntryRetrieval from "@/hooks/queries/useEntryRetrieval";

export default function EntriesTable() {
  const { data, isLoading, error } = useEntryRetrieval();

  return <>{JSON.stringify(data)}</>;
}
