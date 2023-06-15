import { Head } from "@inertiajs/react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { AspectRatio, Box, Grid, Link, Typography } from "@mui/joy";
import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer"

export default function Home() {
    return (
        <React.Fragment>
            <Head title="Home" />
            <Navbar />
            <Box
                sx={{
                    height: "80vh",
                    width: "100%",
                    padding: "2rem",
                }}
            >
                <Grid
                    container
                    spacing={3}
                    sx={{
                        height: "100%",
                    }}
                >
                    <Grid
                        xs={6}
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "flex-start",
                        }}
                    >
                        <Typography
                            level="h1"
                            sx={{
                                marginBottom: "1rem",
                            }}
                        >
                            Invest in farmers the easy ways.
                        </Typography>
                        <Typography
                            level="body1"
                            sx={{
                                marginBottom: "1rem",
                            }}
                        >
                            Farm X Cuan is a platform that allows you to invest
                            in farmers and earn a profit.
                        </Typography>
                        <Link
                            href="/login"
                            color="primary"
                            level="body1"
                            underline="none"
                            variant="outlined"
                            sx={{
                                padding: "0.5rem 1rem",
                                borderRadius: "1rem",
                            }}
                        >
                            Start Invest Now <ArrowForwardIcon />
                        </Link>
                    </Grid>
                    <Grid
                        xs={6}
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <AspectRatio
                            ratio="4/3"
                            sx={{
                                width: "100%",
                                borderRadius: "md",
                            }}
                        >
                            <img src="https://images.unsplash.com/photo-1601933563307-c2cd93e9a0f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" />
                        </AspectRatio>
                    </Grid>
                </Grid>
            </Box>
            <Box
                sx={{
                    height: "80vh",
                    width: "100%",
                    padding: "2rem",
                    backgroundColor: "#323131",
                }}
            >
                <Grid container spacing={3} sx={{
                    height: "100%",
                }}>
                    <Grid xs={6} sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                        <AspectRatio
                            ratio="4/3"
                            sx={{
                                width: "100%",
                                borderRadius: "md",
                            }}
                        >
                            <img src="https://images.unsplash.com/photo-1542744173-05336fcc7ad4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1402&q=80" />
                        </AspectRatio>
                    </Grid>
                    <Grid xs={6} sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "flex-end",
                        textAlign: "right",
                    }}>
                        <Typography
                            level="h1"
                            sx={{
                                marginBottom: "1rem",
                                color: "#fff",
                            }}
                        >
                            Register now and start investing.
                        </Typography>
                        <Typography level="body1" sx={{
                            marginBottom: "1rem",
                            color: "#fff",
                        }}>
                            With your investment, farmers can grow their
                            business and you can earn a profit.
                        </Typography>
                        <Link
                            href="/login"
                            color="primary"
                            level="body1"
                            underline="none"
                            variant="outlined"
                            sx={{
                                padding: "0.5rem 1rem",
                                borderRadius: "1rem",
                                color: "#fff",
                                "&:hover": {
                                    color: "black",
                                }
                            }}
                        >
                            Start Invest Now <ArrowForwardIcon />
                        </Link>
                    </Grid>
                </Grid>
            </Box>
            <Footer />
        </React.Fragment>
    );
}
