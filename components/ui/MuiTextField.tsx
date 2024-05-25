import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function BasicTextFields() {
    return (
        <Box
            component="form"
            sx={{ '& > :not(style)': { mr: 1, width: '25ch' } }}
            noValidate
            autoComplete="off"
        >
            <TextField size="small" id="outlined-basic" label="Outlined" variant="outlined" />
            <TextField size="small" id="filled-basic" label="Filled" variant="filled" />
            <TextField size="small" id="standard-basic" label="Standard" variant="standard" />
        </Box>
    );
}
