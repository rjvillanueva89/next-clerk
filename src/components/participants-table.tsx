"use client"

import { ColumnDef } from "@tanstack/react-table"
import { DataTable, DataTableHeader } from "./data-table"

const columns: ColumnDef<Participant, Participant>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => <DataTableHeader label="URL" column={column} />,
  },
  {
    accessorKey: "is_active",
    header: ({ column }) => <DataTableHeader label="Status" column={column} />,
  },
  {
    accessorKey: "created_at",
    header: ({ column }) => (
      <DataTableHeader label="Created at" column={column} />
    ),
  },
]

interface Props {
  data: Participant[]
}

export const ParticipantsTable = ({ data }: Props) => {
  return <DataTable data={data} columns={columns} />
}
