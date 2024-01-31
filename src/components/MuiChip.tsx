import { Face } from '@mui/icons-material'
import { Avatar, Chip, Stack } from '@mui/material'
import React, { useState } from 'react'

// Chips used - allow users to enter info, make selections, filter content or trigger actions 
// Ex: showcasing tags on blog post 
// chip size is medium by default
const MuiChip = () => {
    const [chips, setChips] = useState(['chip1', 'chip2', 'chip3'])

    const handleClick = (chipToDelete: string) => {
        setChips(chips => chips.filter(chip => chip !== chipToDelete))
    }
    return (
        <Stack spacing={1} direction={"row"}>
            <Chip label="Chip" color="primary" size="small" icon={<Face />} />
            <Chip label="Outlined Chip" color="secondary" size="small" variant="outlined" avatar={<Avatar>V</Avatar>} />
            <Chip label="Click" color="success" onClick={() => alert("Chip clicked")} />
            <Chip label="Delete" color="error" onClick={() => alert("Delete clicked")} onDelete={() => alert("Delete handler called")} />
            {chips.map((chip) => {
                return <Chip key={chip} label={chip} onDelete={() => handleClick(chip)} />
            })}
        </Stack>
    )
}

export default MuiChip