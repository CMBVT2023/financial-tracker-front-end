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
  itemQuantity: StringState;
  itemManufacturer: StringState;
  handleFormSubmission: (e: FormEvent<HTMLFormElement>) => void;
}

export default function EditEntryForm({
  itemName,
  itemCost,
  purchasedFrom,
  itemQuantity,
  itemManufacturer,
  handleFormSubmission,
}: EditEntryFormProps) {
  return (
    <form onSubmit={handleFormSubmission}>
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
      <input type="submit" value={`Edit Entry`} />
    </form>
  );
}
