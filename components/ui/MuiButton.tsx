import * as React from 'react';
import Button from '@mui/material/Button';
import { Grid, Stack } from '@mui/material';

type ButtonColor = 'success' | 'primary' | 'warning' | 'error' | 'inherit' | 'secondary' | 'info';

const buttonGroups = [
    { color: 'success', label: 'Success' },
    { color: 'primary', label: 'Primary' },
    { color: 'warning', label: 'Warning' },
    { color: 'error', label: 'Error' },
];

const ButtonGroup = ({ color }: { color: ButtonColor }) => (
    <Grid
        item
        xs={12}
        sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}
    >
        <Stack spacing={2} direction="row">
            <Button color={color} variant="text">Text</Button>
            <Button color={color} variant="contained">Contained</Button>
            <Button color={color} variant="outlined">Outlined</Button>
        </Stack>
    </Grid>
);

export default function BasicButtons() {
    return (
        <Grid container spacing={2}>
            {buttonGroups.map(({ color }) => (
                <ButtonGroup key={color} color={color as ButtonColor} /> // Cast the color prop to ButtonColor type
            ))}
        </Grid>
    );
}
