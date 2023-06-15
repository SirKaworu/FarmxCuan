import CallMadeIcon from "@mui/icons-material/CallMade";
import CallReceivedIcon from "@mui/icons-material/CallReceived";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import PaymentsIcon from "@mui/icons-material/Payments";
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { Box, Card, Grid, Link, Stack, Typography } from "@mui/joy";
import React from "react";

export default function FarmerDashboard() {
    return (
        <React.Fragment>
            <Typography level="h1">Dashboard</Typography>
            <Box>
                <Stack spacing={2}>
                    <Typography level="h2">My Performance</Typography>
                    <Grid container spacing={2}>
                        <Grid xs={3}>
                            <Card variant="outlined">
                                <Typography
                                    level="h3"
                                    startDecorator={<PaymentsIcon />}
                                >
                                    Income
                                </Typography>
                                <Typography level="body1">
                                    {/* + Rp.1.000.000,00 */} Cannot load data.
                                </Typography>
                            </Card>
                        </Grid>
                        <Grid xs={3}>
                            <Card variant="outlined">
                                <Typography
                                    level="h3"
                                    startDecorator={<PeopleAltIcon />}
                                >
                                    Investors
                                </Typography>
                                <Typography level="body1">
                                    {/* + Rp.500.000,00 */} Cannot load data.
                                </Typography>
                            </Card>
                        </Grid>
                    </Grid>
                </Stack>
            </Box>
        </React.Fragment>
    );
}
