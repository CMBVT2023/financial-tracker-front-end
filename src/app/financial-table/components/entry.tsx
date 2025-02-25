import type { FinancialEntryDataBaseInfo } from "@/utils/types";

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
    </div>
  );
}
