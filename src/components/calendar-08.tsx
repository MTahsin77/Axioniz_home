"use client"

import * as React from "react"

import { Calendar } from "@/components/ui/calendar"

interface Calendar08Props {
  date?: Date
  onDateChange?: (date: Date | undefined) => void
  minDate?: Date
}

export default function Calendar08({ date, onDateChange, minDate }: Calendar08Props) {
  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={onDateChange}
      disabled={minDate ? {
        before: minDate,
      } : undefined}
      className="rounded-lg border shadow-sm"
    />
  )
}
