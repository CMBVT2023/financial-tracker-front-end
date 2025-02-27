export type ServerResponseObj = {
  success: boolean;
  transferMessage: string;
  // Putting any for now since I am not sure what data will be sent yet
  transferData: {
    jwt?: string;
    entriesArray?: FinancialEntryDataBaseInfo[];
  };
};

export type ReactQueryData = {
  data: ServerResponseObj;
  isLoading: boolean;
  error: Error | null;
};

export type FinancialEntryInfo = {
  itemName: string;
  itemCost: number;
  purchasedFrom: string;
  entryDate: string;
  itemQuantity: number | null;
  itemManufacturer: string | null;
  entryID?: number;
};

export type FinancialEntryDataBaseInfo = {
  entry_id: number;
  item_name: string;
  item_cost: number;
  purchased_from: string;
  entry_date: string;
  user_id: number;
  item_quantity: number;
  manufacturer: string;
  delete_flag: null | number;
};
