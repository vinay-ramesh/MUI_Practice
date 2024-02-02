import React, { useState } from 'react'
import { Box, TextField } from "@mui/material"
import { DateRange } from '@mui/x-date-pickers-pro';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';

function DaterangePicker() {
    const [value, setValue] = useState<DateRange<Date>>([null, null])
    return (
        <Box width="500px">
            <DateRangePicker value={value} onChange={(newVal: any) => setValue(newVal)} localeText={{ start: 'Check-in', end: 'Check-out' }} />
        </Box>
    )
}

export default DaterangePicker