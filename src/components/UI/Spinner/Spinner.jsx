import { CircularProgress, Box } from '@mui/material';

const Spinner = () => {

    const styles = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <CircularProgress />
        </Box>
    )
}

export default Spinner;