import type { FinancialEntryDataBaseInfo } from "@/utils/types";
import Link from "next/link";

interface EntryProps {
  entryInfoObj: FinancialEntryDataBaseInfo;
}

export default function Entry({ entryInfoObj }: EntryProps) {
  return (
    <div key={entryInfoObj.entry_id}>
      <p>{entryInfoObj.item_name}</p>
      <p>{entryInfoObj.item_cost}</p>
      <p>{entryInfoObj.purchased_from}</p>
      <p>{entryInfoObj.item_quantity}</p>
      <p>{entryInfoObj.manufacturer}</p>
      <Link href={{
        pathname: '/financial-entry/edit-entry',
        query: {...entryInfoObj}
      }}>Edit</Link>
      {/* <Link>Remove</Link> */}
    </div>
  );
}
