import type { FinancialEntryDataBaseInfo } from "@/utils/types";
import Link from "next/link";

interface EntryProps {
  entryInfoObj: FinancialEntryDataBaseInfo;
  deleteEntry: (entryID: number) => void;
}

export default function Entry({ entryInfoObj, deleteEntry }: EntryProps) {
  return (
    <div key={entryInfoObj.entry_id} className="grid grid-cols-6 text-lg">
      <p>{entryInfoObj.item_name}</p>
      <p>{entryInfoObj.item_cost}</p>
      <p>{entryInfoObj.purchased_from}</p>
      <p>{entryInfoObj.item_quantity}</p>
      <p>{entryInfoObj.manufacturer}</p>
      <div className="flex gap-2 w-full text-lg">
        <Link
          className="outline outline-white p-2 w-3/4 text-center"
          href={{
            pathname: "/financial-entry/edit-entry",
            query: { ...entryInfoObj },
          }}
        >
          Edit
        </Link>
        <button
          onClick={() => deleteEntry(entryInfoObj.entry_id)}
          className="outline outline-white p-2 w-auto"
        >
          X
        </button>
      </div>
    </div>
  );
}
