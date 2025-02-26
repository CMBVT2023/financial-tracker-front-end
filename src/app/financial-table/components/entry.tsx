import type { FinancialEntryDataBaseInfo } from "@/utils/types";
import Link from "next/link";

interface EntryProps {
  entryInfoObj: FinancialEntryDataBaseInfo;
  deleteEntry: (entryID: number) => void;
}

export default function Entry({ entryInfoObj, deleteEntry }: EntryProps) {
  return (
    <div key={entryInfoObj.entry_id}>
      <p>{entryInfoObj.item_name}</p>
      <p>{entryInfoObj.item_cost}</p>
      <p>{entryInfoObj.purchased_from}</p>
      <p>{entryInfoObj.item_quantity}</p>
      <p>{entryInfoObj.manufacturer}</p>
      <Link
        href={{
          pathname: "/financial-entry/edit-entry",
          query: { ...entryInfoObj },
        }}
      >
        Edit
      </Link>
      <button onClick={() => deleteEntry(entryInfoObj.entry_id)}>Remove</button>
    </div>
  );
}
