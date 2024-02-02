import { Box } from '@mui/material'
import React from 'react'
import { styled } from "@mui/material"

// const styledBox = styled(Box)(({ theme }) => ({
//     height: "250px",
//     width: "250px",
//     backgroundColor: theme.status.danger
// }))
const MuiResponsiveness = () => {
    return (
        <>
            <Box sx={{
                height: "300px",
                width: {
                    xs: 100, //view port width is greater than 0 and above
                    sm: 200, //view port width is greater than 600 and above
                    md: 300, //view port width is greater than 900 and above
                    lg: 400, //view port width is greater than 1200 and above
                    xl: 500 //view port width is greater than 1536 and above
                },
                bgcolor: "secondary.light"
            }}></Box>
        </>
    )
}

export default MuiResponsiveness