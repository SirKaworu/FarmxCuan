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

export default function News() {
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
                <Typography level="h1">News</Typography>
                <Grid container spacing={2}>
                    <Grid xs={12}>
                        <Card>
                            <Stack spacing={2}>
                                <Typography level="h2" textAlign="center">
                                    Breaking news
                                </Typography>
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                    }}
                                >
                                    <AspectRatio
                                        objectFit="contain"
                                        sx={{
                                            width: "25vw",
                                        }}
                                    >
                                        <img src="https://picsum.photos/200/300" />
                                    </AspectRatio>
                                </Box>
                                <Typography>
                                    Lorem ipsum, dolor sit amet consectetur
                                    adipisicing elit. Amet omnis, laudantium non
                                    aliquid labore porro officiis dolore
                                    deserunt magni possimus eos eligendi
                                    delectus excepturi est nobis aut
                                    voluptatibus unde iure.
                                </Typography>
                                <Link
                                    href="/dashboard"
                                    color="primary"
                                    level="body1"
                                    underline="none"
                                    variant="solid"
                                    sx={{
                                        width: "100%",
                                        padding: "0.5rem 1rem",
                                        borderRadius: "1rem",
                                    }}
                                >
                                    Read more
                                </Link>
                            </Stack>
                        </Card>
                    </Grid>
                    <Grid xs={6}>
                        <Card>
                            <Stack spacing={2}>
                                <Typography level="h2" textAlign="center">
                                    Breaking news
                                </Typography>
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                    }}
                                >
                                    <AspectRatio
                                        objectFit="contain"
                                        sx={{
                                            width: "25vw",
                                        }}
                                    >
                                        <img src="https://picsum.photos/200/300" />
                                    </AspectRatio>
                                </Box>
                                <Typography>
                                    Lorem ipsum, dolor sit amet consectetur
                                    adipisicing elit. Amet omnis, laudantium non
                                    aliquid labore porro officiis dolore
                                    deserunt magni possimus eos eligendi
                                    delectus excepturi est nobis aut
                                    voluptatibus unde iure.
                                </Typography>
                                <Link
                                    href="/dashboard"
                                    color="primary"
                                    level="body1"
                                    underline="none"
                                    variant="solid"
                                    sx={{
                                        width: "100%",
                                        padding: "0.5rem 1rem",
                                        borderRadius: "1rem",
                                    }}
                                >
                                    Read more
                                </Link>
                            </Stack>
                        </Card>
                    </Grid>
                    <Grid xs={6}>
                        <Card>
                            <Stack spacing={2}>
                                <Typography level="h2" textAlign="center">
                                    Breaking news
                                </Typography>
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                    }}
                                >
                                    <AspectRatio
                                        objectFit="contain"
                                        sx={{
                                            width: "25vw",
                                        }}
                                    >
                                        <img src="https://picsum.photos/200/300" />
                                    </AspectRatio>
                                </Box>
                                <Typography>
                                    Lorem ipsum, dolor sit amet consectetur
                                    adipisicing elit. Amet omnis, laudantium non
                                    aliquid labore porro officiis dolore
                                    deserunt magni possimus eos eligendi
                                    delectus excepturi est nobis aut
                                    voluptatibus unde iure.
                                </Typography>
                                <Link
                                    href="/dashboard"
                                    color="primary"
                                    level="body1"
                                    underline="none"
                                    variant="solid"
                                    sx={{
                                        width: "100%",
                                        padding: "0.5rem 1rem",
                                        borderRadius: "1rem",
                                    }}
                                >
                                    Read more
                                </Link>
                            </Stack>
                        </Card>
                    </Grid>
                    <Grid xs={3}>
                        <Card>
                            <Stack spacing={2}>
                                <Typography level="h2" textAlign="center">
                                    Breaking news
                                </Typography>
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                    }}
                                >
                                    <AspectRatio
                                        objectFit="contain"
                                        sx={{
                                            width: "25vw",
                                        }}
                                    >
                                        <img src="https://picsum.photos/200/300" />
                                    </AspectRatio>
                                </Box>
                                <Typography>
                                    Lorem ipsum, dolor sit amet consectetur
                                    adipisicing elit. Amet omnis, laudantium non
                                    aliquid labore porro officiis dolore
                                    deserunt magni possimus eos eligendi
                                    delectus excepturi est nobis aut
                                    voluptatibus unde iure.
                                </Typography>
                                <Link
                                    href="/dashboard"
                                    color="primary"
                                    level="body1"
                                    underline="none"
                                    variant="solid"
                                    sx={{
                                        width: "100%",
                                        padding: "0.5rem 1rem",
                                        borderRadius: "1rem",
                                    }}
                                >
                                    Read more
                                </Link>
                            </Stack>
                        </Card>
                    </Grid>
                    <Grid xs={3}>
                        <Card>
                            <Stack spacing={2}>
                                <Typography level="h2" textAlign="center">
                                    Breaking news
                                </Typography>
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                    }}
                                >
                                    <AspectRatio
                                        objectFit="contain"
                                        sx={{
                                            width: "25vw",
                                        }}
                                    >
                                        <img src="https://picsum.photos/200/300" />
                                    </AspectRatio>
                                </Box>
                                <Typography>
                                    Lorem ipsum, dolor sit amet consectetur
                                    adipisicing elit. Amet omnis, laudantium non
                                    aliquid labore porro officiis dolore
                                    deserunt magni possimus eos eligendi
                                    delectus excepturi est nobis aut
                                    voluptatibus unde iure.
                                </Typography>
                                <Link
                                    href="/dashboard"
                                    color="primary"
                                    level="body1"
                                    underline="none"
                                    variant="solid"
                                    sx={{
                                        width: "100%",
                                        padding: "0.5rem 1rem",
                                        borderRadius: "1rem",
                                    }}
                                >
                                    Read more
                                </Link>
                            </Stack>
                        </Card>
                    </Grid>
                    <Grid xs={3}>
                        <Card>
                            <Stack spacing={2}>
                                <Typography level="h2" textAlign="center">
                                    Breaking news
                                </Typography>
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                    }}
                                >
                                    <AspectRatio
                                        objectFit="contain"
                                        sx={{
                                            width: "25vw",
                                        }}
                                    >
                                        <img src="https://picsum.photos/200/300" />
                                    </AspectRatio>
                                </Box>
                                <Typography>
                                    Lorem ipsum, dolor sit amet consectetur
                                    adipisicing elit. Amet omnis, laudantium non
                                    aliquid labore porro officiis dolore
                                    deserunt magni possimus eos eligendi
                                    delectus excepturi est nobis aut
                                    voluptatibus unde iure.
                                </Typography>
                                <Link
                                    href="/dashboard"
                                    color="primary"
                                    level="body1"
                                    underline="none"
                                    variant="solid"
                                    sx={{
                                        width: "100%",
                                        padding: "0.5rem 1rem",
                                        borderRadius: "1rem",
                                    }}
                                >
                                    Read more
                                </Link>
                            </Stack>
                        </Card>
                    </Grid>
                    <Grid xs={3}>
                        <Card>
                            <Stack spacing={2}>
                                <Typography level="h2" textAlign="center">
                                    Breaking news
                                </Typography>
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                    }}
                                >
                                    <AspectRatio
                                        objectFit="contain"
                                        sx={{
                                            width: "25vw",
                                        }}
                                    >
                                        <img src="https://picsum.photos/200/300" />
                                    </AspectRatio>
                                </Box>
                                <Typography>
                                    Lorem ipsum, dolor sit amet consectetur
                                    adipisicing elit. Amet omnis, laudantium non
                                    aliquid labore porro officiis dolore
                                    deserunt magni possimus eos eligendi
                                    delectus excepturi est nobis aut
                                    voluptatibus unde iure.
                                </Typography>
                                <Link
                                    href="/dashboard"
                                    color="primary"
                                    level="body1"
                                    underline="none"
                                    variant="solid"
                                    sx={{
                                        width: "100%",
                                        padding: "0.5rem 1rem",
                                        borderRadius: "1rem",
                                    }}
                                >
                                    Read more
                                </Link>
                            </Stack>
                        </Card>
                    </Grid>
                </Grid>
                <Button>Load more</Button>
            </Stack>
        </DashboardLayout>
    );
}
