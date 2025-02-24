"use client"
import EntryForm from "@/components/entry-form";
import { useState } from "react";

export default function AddEntryEditor() {
    const [ itemName, setItemName ] = useState<string>('');

    return (
        <EntryForm />
    )
}