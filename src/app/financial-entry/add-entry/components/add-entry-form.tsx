import type { FormEvent } from "react";
import { RefObject } from "react";
import LabeledInput from "../../../../components/labeled-input";

interface EntryFormProps {
  itemName: RefObject<HTMLInputElement | null>;
  itemCost: RefObject<HTMLInputElement | null>;
  purchasedFrom: RefObject<HTMLInputElement | null>;
  entryDate: RefObject<HTMLInputElement | null>;
  itemQuantity: RefObject<HTMLInputElement | null>;
  itemManufacturer: RefObject<HTMLInputElement | null>;
  handleFormSubmission: (e: FormEvent<HTMLFormElement>) => void;
}

export default function AddEntryForm({
  itemName,
  itemCost,
  purchasedFrom,
  entryDate,
  itemQuantity,
  itemManufacturer,
  handleFormSubmission,
}: EntryFormProps) {
  return (
    <form onSubmit={handleFormSubmission}>
      <LabeledInput
        inputType="text"
        labelText={"Item Name"}
        inputRef={itemName}
        associatedVariable="itemName"
      />
      <LabeledInput
        inputType="number"
        labelText={"Item Cost"}
        inputRef={itemCost}
        associatedVariable="itemCost"
      />
      <LabeledInput
        inputType="text"
        labelText={"Purchased From"}
        inputRef={purchasedFrom}
        associatedVariable="purchasedFrom"
      />
      <LabeledInput
        inputType="date"
        labelText={"Entry Date"}
        inputRef={entryDate}
        associatedVariable="entryDate"
      />
      <LabeledInput
        inputType="number"
        labelText={"Item Quantity"}
        inputRef={itemQuantity}
        associatedVariable="itemQuantity"
      />
      <LabeledInput
        inputType="text"
        labelText={"Item Manufacturer"}
        inputRef={itemManufacturer}
        associatedVariable="itemManufacturer"
      />
      <input type="submit" value={`AddEntry`} />
    </form>
  );
}
