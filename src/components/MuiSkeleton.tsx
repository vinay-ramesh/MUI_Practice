import React, { useState, useEffect } from 'react'
import { Skeleton, Stack, Box, Avatar, Typography } from '@mui/material'

const MuiSkeleton = () => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, [])
    return (
        <Stack spacing={1} width={250}>
            {/* <Skeleton variant='text' animation={false} />
            <Skeleton variant='circular' width={40} height={40} animation={"wave"} />
            <Skeleton variant='rectangular' width={250} height={150} animation={"wave"} /> */}
            <Box sx={{ width: "250px" }}>
                {
                    loading ? (
                        <Skeleton variant='rectangular' width={256} height={144} animation={"wave"} />
                    ) : (
                        <img src="https://source.unsplash.com/random/256x144" alt="skeleton" width={256} height={144} />
                    )
                }
                <Stack spacing={1} direction="row" sx={{ width: "100%", marginTop: "12px" }}>
                    {
                        loading ? (
                            <Skeleton variant='circular' width={40} height={40} animation={"wave"} />
                        ) : (
                            <Avatar>V</Avatar>
                        )
                    }
                    <Stack sx={{ width: "80%" }}>
                        {
                            loading ? (
                                <>
                                    <Typography variant="body1">
                                        <Skeleton variant='text' width={"100%"} animation={"wave"} />
                                    </Typography>
                                    <Typography variant="body2">
                                        <Skeleton variant='text' width={"100%"} animation={"wave"} />
                                    </Typography>
                                </>
                            ) : (
                                <Typography variant="body1">React Mui Tutorial</Typography>
                            )
                        }
                    </Stack>
                </Stack>
            </Box>
        </Stack>
    )
}

export default MuiSkeleton