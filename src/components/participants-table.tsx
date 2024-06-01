"use client"

import { ColumnDef } from "@tanstack/react-table"
import { DataTable } from "./data-table"

const columns: ColumnDef<Participant>[] = [
  {
    accessorKey: "id",
    header: "URL",
  },
  {
    accessorKey: "is_active",
    header: "Status",
  },
  {
    accessorKey: "created_at",
    header: "Created at",
  },
]

interface Props {
  data: Participant[]
}

export const ParticipantsTable = ({ data }: Props) => {
  return <DataTable data={data} columns={columns} />
}
