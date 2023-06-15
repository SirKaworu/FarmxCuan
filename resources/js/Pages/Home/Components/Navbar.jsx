import { Grid, Stack, Link, Typography } from "@mui/joy";

export default function Navbar() {
    return (
        <Grid
            container
            spacing={2}
            sx={{
                margin: "0",
                position: "sticky",
            }}
        >
            <Grid xs={3}>
                <Typography level="h2">Farm X Cuan</Typography>
            </Grid>
            <Grid xs={6}></Grid>
            <Grid
                xs={3}
                sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                }}
            >
                <Stack direction="row" spacing={2}>
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
                        Login
                    </Link>
                    <Link
                        href="/register"
                        color="primary"
                        level="body1"
                        underline="none"
                        variant="solid"
                        sx={{
                            padding: "0.5rem 1rem",
                            borderRadius: "1rem",
                        }}
                    >
                        Register
                    </Link>
                </Stack>
            </Grid>
        </Grid>
    );
}
