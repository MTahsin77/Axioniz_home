'use client'

import * as React from 'react'
import { format } from 'date-fns'
import { Calendar as CalendarIcon } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import Calendar08 from '@/components/calendar-08'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

interface DatePickerProps {
  date?: Date
  onDateChange?: (date: Date | undefined) => void
  placeholder?: string
  className?: string
  disabled?: boolean
  minDate?: Date
}

export function DatePicker({
  date,
  onDateChange,
  placeholder = 'DD/MM/YYYY',
  className,
  disabled,
  minDate,
}: DatePickerProps) {
  const [open, setOpen] = React.useState(false)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            'w-full justify-start text-left font-normal border-[#eb5e28] text-[#eb5e28] hover:bg-[#eb5e28]/10 hover:border-[#eb5e28] focus:border-[#eb5e28] focus:ring-[#eb5e28]/20',
            !date && 'text-[#eb5e28]',
            className
          )}
          disabled={disabled}
        >
          <CalendarIcon className="mr-2 h-4 w-4 text-[#eb5e28]" />
          {date ? format(date, 'dd/MM/yyyy') : <span className="uppercase tracking-wide">{placeholder}</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0 bg-background shadow-xl" align="start">
        <div className="p-3">
          <Calendar08 
            date={date}
            onDateChange={(selectedDate) => {
              onDateChange?.(selectedDate)
              setOpen(false)
            }}
            minDate={minDate}
          />
        </div>
      </PopoverContent>
    </Popover>
  )
}
