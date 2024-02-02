import { Stack } from '@mui/material'
import { LoadingButton } from '@mui/lab'
import { Save } from '@mui/icons-material'

const MuiLoadingButton = () => {
    return (
        <Stack spacing={2}>
            <LoadingButton variant='outlined'>Submit</LoadingButton>
            <LoadingButton loading variant='outlined'>Submit</LoadingButton>
            <LoadingButton variant='outlined' loadingIndicator="loading...">Fetch Data</LoadingButton>
            <LoadingButton loading variant='outlined' loadingIndicator="loading...">Fetch Data</LoadingButton>
            <LoadingButton variant='outlined' loadingPosition='start' startIcon={<Save />}>Fetch Data</LoadingButton>
            <LoadingButton loading variant='outlined' loadingPosition='start' startIcon={<Save />}>Fetch Data</LoadingButton>
        </Stack>
    )
}

export default MuiLoadingButton