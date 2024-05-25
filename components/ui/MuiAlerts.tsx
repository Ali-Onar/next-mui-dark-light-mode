import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function BasicAlerts() {
    return (
        <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert variant="outlined" severity="success">This is a success Alert.</Alert>
            <Alert variant="outlined" severity="info">This is an info Alert.</Alert>
            <Alert variant="outlined" severity="warning">This is a warning Alert.</Alert>
            <Alert variant="outlined" severity="error">This is an error Alert.</Alert>
        </Stack>
    );
}
