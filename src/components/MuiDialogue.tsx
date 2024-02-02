import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import React, { useState } from 'react'

const MuiDialogue = () => {
    const [open, setOpen] = useState(false)

    return (
        <>
            <Button onClick={() => setOpen(true)}>
                Open Dialogue
            </Button>
            <Dialog aria-labelledby='dialog-title' aria-describedby='dialog-description' open={open} onClose={() => setOpen(false)}>
                <DialogTitle id="dialog-title">Submit the test?</DialogTitle>
                <DialogContent>
                    <DialogContentText id="dialog-description">Are you sure you want to submit the text?</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpen(false)}>Cancel</Button>
                    <Button autoFocus onClick={() => setOpen(false)}>Submit</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default MuiDialogue