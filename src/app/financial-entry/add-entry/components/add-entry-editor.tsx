"use client";
import AddEntryForm from "@/app/financial-entry/add-entry/components/add-entry-form";
import useEntryAddition from "@/hooks/queries/useEntryAddition";
import type { FinancialEntryInfo } from "@/utils/types";
import { useRef } from "react";
import type { FormEvent } from "react";

export default function AddEntryEditor() {
  const itemNameRef = useRef<HTMLInputElement | null>(null);
  const itemCostRef = useRef<HTMLInputElement | null>(null);
  const purchasedFromRef = useRef<HTMLInputElement | null>(null);
  const entryDateRef = useRef<HTMLInputElement | null>(null);
  const itemQuantityRef = useRef<HTMLInputElement | null>(null);
  const itemManufacturerRef = useRef<HTMLInputElement | null>(null);

  const { mutateAsync: addEntry, error, isSuccess } = useEntryAddition();

  function gatherRefValues(): FinancialEntryInfo | null {
    const entryObjectInfo: Record<string, unknown> & FinancialEntryInfo = {
      itemName: "",
      itemCost: 0,
      purchasedFrom: "",
      entryDate: "",
      itemQuantity: null,
      itemManufacturer: null,
    };

    // Checks that all refs have an associated html input else return a null value and false;
    for (const ref of [
      itemNameRef,
      itemCostRef,
      purchasedFromRef,
      entryDateRef,
      itemQuantityRef,
      itemManufacturerRef,
    ]) {
      if (ref["current"] === undefined || ref["current"] === null) return null;
    }

    // Constructs the entryInfoObject starting with the required values.
    for (const ref of [
      itemNameRef,
      itemCostRef,
      purchasedFromRef,
      entryDateRef,
    ]) {
      if (ref.current?.name !== undefined && ref.current?.value !== undefined) {
        entryObjectInfo[ref.current?.name] = ref.current?.value;
      } else {
        return null;
      }
    }

    // Finishes constructing the entryInfoObject with the last optional values,
    //! If these values are empty then the placeholder null value is kept instead.
    for (const ref of [itemQuantityRef, itemManufacturerRef]) {
      if (ref.current?.name !== undefined && ref.current?.value) {
        entryObjectInfo[ref.current?.name] = ref.current?.value;
      }
    }

    // Finally, all values within the new object are validated.
    for (const value of Object.values(entryObjectInfo)) {
      if (value === 0 || value === "") {
        return null;
      }
    }

    // If all criteria are met then a true value is returned.
    return entryObjectInfo;
  }

  function validateEntry(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const entryInfo = gatherRefValues();

    if (entryInfo !== null) {
      addEntry(entryInfo);
    }
  }

  return (
    <AddEntryForm
      itemName={itemNameRef}
      itemCost={itemCostRef}
      purchasedFrom={purchasedFromRef}
      entryDate={entryDateRef}
      itemQuantity={itemQuantityRef}
      itemManufacturer={itemManufacturerRef}
      handleFormSubmission={validateEntry}
    />
  );
}
