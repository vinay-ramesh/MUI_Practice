import { Button, Snackbar, Alert, AlertProps } from '@mui/material'
import React, { useState, forwardRef } from 'react'

const SnackBarAlert = forwardRef<HTMLDivElement, AlertProps>(
    function SnackBarAlert(props, ref) {
        return <Alert elevation={6} ref={ref} {...props} />
    }
)

const MuiSnackBar = () => {
    const [open, setOpen] = useState(false)

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === "clickaway") {
            return
        }
        setOpen(false)
    }
    return (
        <>
            <Button onClick={() => setOpen(true)}>Submit</Button>
            {/* <Snackbar
                message="Form submitted successfully"
                autoHideDuration={4000}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: "bottom", horizontal: "center"
                }}
            /> */}
            <Snackbar open={open} onClose={handleClose} autoHideDuration={6000}>
                <SnackBarAlert onClose={handleClose} severity='success'>
                    Form submitted succefully
                </SnackBarAlert>
            </Snackbar>
        </>
    )
}

export default MuiSnackBar