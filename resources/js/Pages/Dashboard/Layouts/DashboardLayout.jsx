import { Grid } from "@mui/joy";
import React from "react";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";

export default function DashboardLayout(props) {
    return (
        <React.Fragment>
            <Grid
                container
                sx={{
                    height: "100vh",
                }}
            >
                <Grid xs={2}>
                    <Sidebar />
                </Grid>
                <Grid
                    xs={10}
                    sx={{
                        height: "100%",
                        overflowY: "scroll",
                    }}
                >
                    <Navbar />
                    {props.children}
                </Grid>
            </Grid>
        </React.Fragment>
    );
}
