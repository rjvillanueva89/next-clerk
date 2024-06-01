import axios from "axios"

export const addParticipant = async () => {
  const result = await axios.post<Participant>(
    "http://localhost:4000/participants",
    {
      is_active: false,
      created_at: Date.now(),
    }
  )

  return result.data
}
