import CallMadeIcon from "@mui/icons-material/CallMade";
import CallReceivedIcon from "@mui/icons-material/CallReceived";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import PaymentsIcon from "@mui/icons-material/Payments";
import { Box, Card, Grid, Link, Stack, Typography } from "@mui/joy";
import React from "react";

export default function InvestorDashboard() {
    return (
        <React.Fragment>
            <Typography level="h1">Dashboard</Typography>
            <Box>
                <Stack spacing={2}>
                    <Typography level="h2">My Portfolio</Typography>
                    <Grid container spacing={2}>
                        <Grid xs={3}>
                            <Card variant="outlined">
                                <Typography
                                    level="h3"
                                    startDecorator={<PaymentsIcon />}
                                >
                                    Gain
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
                                    startDecorator={<EqualizerIcon />}
                                >
                                    Investment
                                </Typography>
                                <Typography level="body1">
                                    {/* + Rp.500.000,00 */} Cannot load data.
                                </Typography>
                            </Card>
                        </Grid>
                    </Grid>
                </Stack>
            </Box>
            <Box>
                <Stack spacing={2}>
                    <Typography level="h2">Recent Transaction</Typography>
                    <Stack spacing={2}>
                        <Card variant="outlined">
                            <Grid container spacing={2}>
                                <Grid
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                    }}
                                    xs={1}
                                >
                                    <Box
                                        sx={{
                                            padding: "1rem",
                                            backgroundColor: "#d6d6d6",
                                            borderRadius: "1rem",
                                        }}
                                    >
                                        <CallMadeIcon />
                                    </Box>
                                </Grid>
                                <Grid xs={4}>
                                    <Stack spacing={2}>
                                        <Typography level="h3">
                                            Investing on Product A from B Farm
                                        </Typography>
                                        <Typography level="h5" color="neutral">
                                            Poultry Investment
                                        </Typography>
                                    </Stack>
                                </Grid>
                                <Grid xs={3}>
                                    <Typography level="h3">
                                        <Typography color="neutral">
                                            Interest Rate:
                                        </Typography>{" "}
                                        10%
                                    </Typography>
                                </Grid>
                                <Grid xs={3}>
                                    <Typography level="h3">
                                        Rp.500.000,00
                                    </Typography>
                                </Grid>
                                <Grid>
                                    <Link
                                        color="primary"
                                        level="body1"
                                        underline="none"
                                        variant="solid"
                                        sx={{
                                            padding: "0.5rem 1rem",
                                            borderRadius: "1rem",
                                        }}
                                    >
                                        View Details
                                    </Link>
                                </Grid>
                            </Grid>
                        </Card>
                    </Stack>
                    <Stack spacing={2}>
                        <Card variant="outlined">
                            <Grid container spacing={2}>
                                <Grid
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                    }}
                                    xs={1}
                                >
                                    <Box
                                        sx={{
                                            padding: "1rem",
                                            backgroundColor: "#d6d6d6",
                                            borderRadius: "1rem",
                                        }}
                                    >
                                        <CallReceivedIcon />
                                    </Box>
                                </Grid>
                                <Grid xs={4}>
                                    <Stack spacing={2}>
                                        <Typography level="h3">
                                            Income from D Farm Product C selling
                                            revenue
                                        </Typography>
                                        <Typography level="h5" color="neutral">
                                            Plantation Investment
                                        </Typography>
                                    </Stack>
                                </Grid>
                                <Grid xs={3}>
                                    <Typography level="h3">
                                        <Typography color="neutral">
                                            Interest Rate:
                                        </Typography>{" "}
                                        5%
                                    </Typography>
                                </Grid>
                                <Grid xs={3}>
                                    <Typography level="h3">
                                        Rp.200.000,00
                                    </Typography>
                                </Grid>
                                <Grid>
                                    <Link
                                        color="primary"
                                        level="body1"
                                        underline="none"
                                        variant="solid"
                                        sx={{
                                            padding: "0.5rem 1rem",
                                            borderRadius: "1rem",
                                        }}
                                    >
                                        View Details
                                    </Link>
                                </Grid>
                            </Grid>
                        </Card>
                    </Stack>
                    <Stack spacing={2}>
                        <Card variant="outlined">
                            <Grid container spacing={2}>
                                <Grid
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                    }}
                                    xs={1}
                                >
                                    <Box
                                        sx={{
                                            padding: "1rem",
                                            backgroundColor: "#d6d6d6",
                                            borderRadius: "1rem",
                                        }}
                                    >
                                        <CallReceivedIcon />
                                    </Box>
                                </Grid>
                                <Grid xs={4}>
                                    <Stack spacing={2}>
                                        <Typography level="h3">
                                            Income from D Farm Product C selling
                                            revenue
                                        </Typography>
                                        <Typography level="h5" color="neutral">
                                            Plantation Investment
                                        </Typography>
                                    </Stack>
                                </Grid>
                                <Grid xs={3}>
                                    <Typography level="h3">
                                        <Typography color="neutral">
                                            Interest Rate:
                                        </Typography>{" "}
                                        5%
                                    </Typography>
                                </Grid>
                                <Grid xs={3}>
                                    <Typography level="h3">
                                        Rp.200.000,00
                                    </Typography>
                                </Grid>
                                <Grid>
                                    <Link
                                        color="primary"
                                        level="body1"
                                        underline="none"
                                        variant="solid"
                                        sx={{
                                            padding: "0.5rem 1rem",
                                            borderRadius: "1rem",
                                        }}
                                    >
                                        View Details
                                    </Link>
                                </Grid>
                            </Grid>
                        </Card>
                    </Stack>
                </Stack>
            </Box>
        </React.Fragment>
    );
}
