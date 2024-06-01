import { SignUp } from "@clerk/nextjs"

interface Props {
  params: {
    id: string
  }
}

export default async function InvitePage({ params }: Props) {
  return (
    <div className="flex h-dvh items-center justify-center">
      <SignUp routing="hash" unsafeMetadata={{ participant_id: params.id }} />
    </div>
  )
}
