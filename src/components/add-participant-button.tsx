"use client"

import { addParticipant } from "@/actions/add-participant"
import { Button } from "./ui/button"

export const AddParticipantButton = () => {
  const handleAdd = async () => {
    await addParticipant()
  }

  return <Button onClick={handleAdd}>Add</Button>
}
