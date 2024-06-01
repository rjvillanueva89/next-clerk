import { getParticipants } from "@/actions/get-participants"
import { AddParticipantButton } from "@/components/add-participant-button"
import { ParticipantsTable } from "@/components/participants-table"

export default async function ParticipantsPage() {
  const data = await getParticipants()

  return (
    <main className="h-dvh p-4">
      <div className="mb-4 flex items-center justify-between">
        <h1>Participants</h1>
        <AddParticipantButton />
      </div>
      <ParticipantsTable data={data} />
    </main>
  )
}
