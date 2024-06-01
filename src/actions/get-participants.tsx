import axios from "axios"

export const getParticipants = async () => {
  const result = await axios.get<Participant[]>(
    "http://localhost:4000/participants"
  )

  return result.data
}
