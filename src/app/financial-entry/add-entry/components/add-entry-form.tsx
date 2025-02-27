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
    <form
      onSubmit={handleFormSubmission}
      className="w-full sm:w-1/2 xl:w-1/3 h-1/2 md:h-1/3 flex flex-col justify-around bg-blue-800 text-white p-2"
    >
      <h1 className="text-4xl self-center">New Entry</h1>
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
      <input
        type="submit"
        value={`Add Entry`}
        className="outline-white outline w-1/2 self-center cursor-pointer"
      />
    </form>
  );
}
