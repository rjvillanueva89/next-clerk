"use client"

import { ColumnDef } from "@tanstack/react-table"
import Link from "next/link"
import { DataTable, DataTableHeader } from "./data-table"

const columns: ColumnDef<Participant, Participant>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => <DataTableHeader label="URL" column={column} />,
    cell: ({ row }) => <Link href={`/invite/${row.getValue("id")}`}>LINK</Link>,
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
    cell: ({ row }) => {
      const date = new Date(row.getValue("created_at"))
      return date.toLocaleDateString()
    },
  },
]

interface Props {
  data: Participant[]
}

export const ParticipantsTable = ({ data }: Props) => {
  return <DataTable data={data} columns={columns} />
}
