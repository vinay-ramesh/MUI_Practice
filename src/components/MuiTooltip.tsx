import { Delete } from '@mui/icons-material'
import { IconButton, Tooltip } from '@mui/material'
import React from 'react'

// Helps to display informative text on hover on elements and especially used on icons 
const MuiTooltip = () => {
    return (
        <Tooltip title="Delete" placement="right" arrow enterDelay={500} leaveDelay={200}>
            <IconButton><Delete /></IconButton>
        </Tooltip>
    )
}

export default MuiTooltip