"use client";
import useEntryEdit from "@/hooks/queries/useEntryEdit";
import type {
  FinancialEntryDataBaseInfo,
  FinancialEntryInfo,
} from "@/utils/types";
import React, { useState } from "react";
import type { FormEvent } from "react";
import EditEntryForm from "./edt-entry-form";

interface EditEntryEditorProps {
  entryValues: FinancialEntryDataBaseInfo;
}

export default function EditEntryEditor({ entryValues }: EditEntryEditorProps) {
  const {
    item_name,
    item_cost,
    item_quantity,
    manufacturer,
    purchased_from,
    entry_date,
    entry_id,
  } = entryValues;
  const [itemName, setItemName] = useState<string>(item_name);
  const [itemCost, setItemCost] = useState<string>(item_cost.toString());
  const [purchasedFrom, setPurchasedFrom] = useState<string>(purchased_from);
  const [entryDate, setEntryDate] = useState<string>(entry_date.slice(0, 10));
  const [itemQuantity, setItemQuantity] = useState<string>(
    item_quantity.toString()
  );
  const [itemManufacturer, setItemManufacturer] =
    useState<string>(manufacturer);

  const { mutateAsync: editEntry, error, isSuccess } = useEntryEdit();

  console.log(entry_date)

  function checkInputs() {
    let isInputValid = true;
    for (const value of [itemName, itemCost, purchasedFrom]) {
      if (value === "") isInputValid = false;
    }
    return isInputValid;
  }

  function validateEntry(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const areMainInputsValid = checkInputs();
    if (!areMainInputsValid) return;

    editEntry({
      entryID: entry_id,
      itemName,
      itemCost: parseInt(itemCost),
      purchasedFrom,
      entryDate,
      itemQuantity: itemQuantity === "" ? 0 : parseInt(itemQuantity),
      itemManufacturer: itemManufacturer,
    });
  }

  return (
    <EditEntryForm
      itemName={{ stateValue: itemName, alterState: setItemName }}
      itemCost={{ stateValue: itemCost, alterState: setItemCost }}
      purchasedFrom={{
        stateValue: purchasedFrom,
        alterState: setPurchasedFrom,
      }}
      entryDate={{ stateValue: entryDate, alterState: setEntryDate }}
      itemQuantity={{ stateValue: itemQuantity, alterState: setItemQuantity }}
      itemManufacturer={{
        stateValue: itemManufacturer,
        alterState: setItemManufacturer,
      }}
      handleFormSubmission={validateEntry}
    />
  );
}
