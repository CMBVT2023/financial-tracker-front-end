"use client";
import { redirect } from "next/navigation";

export default function AddEntryButton() {
  function addNewEntry() {
    redirect("financial-entry/add-entry");
  }

  return (
    <button
      className="outline outline-white p-2 fixed bottom-4 right-4"
      onClick={addNewEntry}
    >
      Add New Entry
    </button>
  );
}
