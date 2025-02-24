export type ServerResponseObj = {
  success: boolean;
  transferMessage: string;
  // Putting any for now since I am not sure what data will be sent yet
  transferData: {
    jwt?: string;
  };
};

export type FinancialEntryInfo = {
  itemName: string;
  itemCost: number;
  purchasedFrom: string;
  itemQuantity: number | null;
  itemManufacturer: string | null;
  entryID?: number;
}