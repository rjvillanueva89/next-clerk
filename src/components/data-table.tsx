"use client"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Column,
  ColumnDef,
  RowData,
  SortDirection,
  SortingState,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { MoveDownIcon, MoveUpIcon, MoveVerticalIcon } from "lucide-react"
import { useState } from "react"
import { Button } from "./ui/button"

interface DataTableHeaderProps<TData, TValue> {
  label: string
  column: Column<TData, TValue>
}

export const DataTableHeader = <TData extends RowData, TValue>({
  label,
  column,
}: DataTableHeaderProps<TData, TValue>) => {
  return (
    <Button
      variant="ghost"
      onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      className="group"
    >
      {label}
      <SortIcon sort={column.getIsSorted()} />
    </Button>
  )
}

interface SortIconProps {
  sort: false | SortDirection
}

const SortIcon = ({ sort }: SortIconProps) => {
  if (!sort)
    return (
      <MoveVerticalIcon className="ml-2 size-4 opacity-0 group-hover:opacity-100" />
    )

  return (
    <>
      {sort === "asc" ? (
        <MoveUpIcon className="ml-2 size-4" />
      ) : (
        <MoveDownIcon className="ml-2 size-4" />
      )}
    </>
  )
}

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

export const DataTable = <TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) => {
  const [sorting, setSorting] = useState<SortingState>([
    { id: "created_at", desc: false },
  ])
  console.log(sorting)
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
    },
  })

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  )
}
