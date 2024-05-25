import BasicTable from '@/components/tables/BasicTable';
import MuiAccordion from '@/components/ui/MuiAccordion';
import MuiAlerts from '@/components/ui/MuiAlerts';
import MuiButton from '@/components/ui/MuiButton';
import MuiCard from '@/components/ui/MuiCard';
import MuiDialog from '@/components/ui/MuiDialog';
import MuiList from '@/components/ui/MuiList';
import MuiPagination from '@/components/ui/MuiPagination';
import MuiRating from '@/components/ui/MuiRating';
import MuiTextField from '@/components/ui/MuiTextField';
import { Divider, Grid, Typography } from '@mui/material';

const components = [
    { title: 'Basic Table', component: BasicTable },
    { title: 'Accordion', component: MuiAccordion },
    { title: 'List', component: MuiList },
    { title: 'Alert', component: MuiAlerts },
    { title: 'Button', component: MuiButton },
    { title: 'Card', component: MuiCard },
    { title: 'Basic Rating', component: MuiRating },
    { title: 'Text Field', component: MuiTextField },
    { title: 'Dialog', component: MuiDialog },
    { title: 'Pagination', component: MuiPagination },
];

const ComponentSection = ({ title, Component }: { title: string, Component: React.ElementType }) => (
    <>
        <Grid
            item
            xs={12}
            sx={{
                mb: 3, display: 'flex', alignItems: 'center', flexDirection: 'column',
            }}
        >
            <Typography variant="h4" gutterBottom>
                {title}
            </Typography>
            <Component />
        </Grid>
        <Grid item xs={12} sx={{ mt: 3, mb: 3 }}>
            <Divider />
        </Grid>
    </>
);

export default function HomePage() {
    return (
        <Grid container spacing={2} sx={{ mt: 5 }}>
            {components.map(({ title, component: Component }) => (
                <ComponentSection key={title} title={title} Component={Component} />
            ))}
        </Grid>
    );
}
