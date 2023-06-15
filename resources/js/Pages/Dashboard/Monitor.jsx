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

export default function Monitor() {
    useEffect(() => {
        if (localStorage.getItem("role") === null) {
            window.location.href = "/login";
        }
    }, []);

    return <DashboardLayout>
        <Stack
            spacing={4}
            sx={{
                padding: "1rem",
            }}
        >
            <Typography level="h1">Monitor</Typography>
        </Stack>
    </DashboardLayout>
}
