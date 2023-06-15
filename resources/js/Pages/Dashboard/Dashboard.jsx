import CallMadeIcon from "@mui/icons-material/CallMade";
import CallReceivedIcon from "@mui/icons-material/CallReceived";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import PaymentsIcon from "@mui/icons-material/Payments";
import { Box, Card, Grid, Link, Stack, Typography } from "@mui/joy";
import React, { useEffect } from "react";
import DashboardLayout from "./Layouts/DashboardLayout";
import InvestorDashboard from "./Components/InvestorDashboard";
import FarmerDashboard from "./Components/FarmerDashboard";

export default function Dashboard() {
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
                {localStorage.getItem("role") === "investor" && (
                    <InvestorDashboard />
                )}
                {localStorage.getItem("role") === "farmer" && (
                    <FarmerDashboard />
                )}
            </Stack>
        </DashboardLayout>
    );
}
