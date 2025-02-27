import UserInput from "@/components/user-input";
import type { Dispatch, FormEvent, SetStateAction } from "react";

type StringState = {
  stateValue: string;
  alterState: Dispatch<SetStateAction<string>>;
};

interface EditEntryFormProps {
  itemName: StringState;
  itemCost: StringState;
  purchasedFrom: StringState;
  entryDate: StringState;
  itemQuantity: StringState;
  itemManufacturer: StringState;
  handleFormSubmission: (e: FormEvent<HTMLFormElement>) => void;
}

export default function EditEntryForm({
  itemName,
  itemCost,
  purchasedFrom,
  entryDate,
  itemQuantity,
  itemManufacturer,
  handleFormSubmission,
}: EditEntryFormProps) {
  return (
    <form
      onSubmit={handleFormSubmission}
      className="w-full sm:w-1/2 xl:w-1/3 h-1/2 md:h-1/3 flex flex-col justify-around bg-blue-800 text-white p-2"
    >
      <h1 className="text-4xl self-center">Edit Entry</h1>
      <UserInput
        inputType="text"
        labelText={"Item Name"}
        alterInput={itemName.alterState}
        currentInputValue={itemName.stateValue}
      />
      <UserInput
        inputType="number"
        labelText={"Item Cost"}
        alterInput={itemCost.alterState}
        currentInputValue={itemCost.stateValue}
      />
      <UserInput
        inputType="text"
        labelText={"Purchased From"}
        alterInput={purchasedFrom.alterState}
        currentInputValue={purchasedFrom.stateValue}
      />
      <UserInput
        inputType="date"
        labelText={"Entry Date"}
        alterInput={entryDate.alterState}
        currentInputValue={entryDate.stateValue}
      />
      <UserInput
        inputType="number"
        labelText={"Item Quantity"}
        alterInput={itemQuantity.alterState}
        currentInputValue={itemQuantity.stateValue}
      />
      <UserInput
        inputType="text"
        labelText={"Item Manufacturer"}
        alterInput={itemManufacturer.alterState}
        currentInputValue={itemManufacturer.stateValue}
      />
      <input
        type="submit"
        value={`Edit Entry`}
        className="outline-white outline w-1/2 self-center cursor-pointer"
      />
    </form>
  );
}
