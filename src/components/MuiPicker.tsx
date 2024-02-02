import React, { useState } from 'react'
import { Stack, TextField } from "@mui/material"
import { DatePicker, TimePicker, DateTimePicker } from '@mui/x-date-pickers'

const MuiPicker = () => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null)
    const [selectedTime, setSelectedTime] = useState<Date | null>(null)
    const [selectedDateTime, setSelectedDateTime] = useState<Date | null>(null)

    console.log({ selectedDate, selectedDateTime, selectedTime })
    return (
        <Stack spacing={4} sx={{ width: "250px" }}>
            <DatePicker label="Date Picker" onSelectedSectionsChange={(props: any) => <TextField {...props} />} value={selectedDate} onChange={(newVal) => setSelectedDate(newVal)} />
            <TimePicker label="Time Picker" value={selectedTime} onChange={(newVal) => setSelectedTime(newVal)} onSelectedSectionsChange={(props: any) => <TextField {...props} />} />
            <DateTimePicker label="Date Time Picker" value={selectedDateTime} onChange={(newVal) => setSelectedDateTime(newVal)} onSelectedSectionsChange={(props: any) => <TextField {...props} />} />
        </Stack >
    )
}

export default MuiPicker