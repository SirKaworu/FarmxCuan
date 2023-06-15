import DashboardLayout from "./Layouts/DashboardLayout";
import {
    AspectRatio,
    Button,
    Box,
    Card,
    Grid,
    Link,
    Stack,
    Typography,
} from "@mui/joy";
import React, { useEffect } from "react";

export default function Transaction() {
    useEffect(() => {
        if (localStorage.getItem("role") === null) {
            window.location.href = "/login";
        }
    }, []);

    return (
        <DashboardLayout>
            <Stack
                spacing={4}
                sx={{
                    padding: "1rem",
                }}
            >
                <Typography level="h1">Transaction</Typography>
                <Stack spacing={2}>
                    <Card>
                        <Grid container spacing={2}>
                            <Grid>
                                <Typography level="h3">Product A</Typography>
                            </Grid>
                            <Grid>
                                <Typography level="h3">Farmer B</Typography>
                            </Grid>
                            <Grid>
                                <Typography level="h3">
                                    <Typography color="neutral">
                                        Price:{" "}
                                    </Typography>
                                    Rp. 12.000 / KG
                                </Typography>
                            </Grid>
                            <Grid>
                                <Typography level="h3">
                                    <Typography color="neutral">
                                        Total Amount:{" "}
                                    </Typography>
                                    30 KG
                                </Typography>
                            </Grid>
                            <Grid>
                                <Button>See Details</Button>
                            </Grid>
                        </Grid>
                    </Card>
                </Stack>
            </Stack>
        </DashboardLayout>
    );
}
