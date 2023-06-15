import { Head } from "@inertiajs/react";
import {
    Button,
    CssBaseline,
    CssVarsProvider,
    Grid,
    Input,
    Link
} from "@mui/joy";
import React from "react";

export default function Login() {
    return (
        <React.Fragment>
            <Head title="Login" />
            <CssBaseline />
            <CssVarsProvider>
                <Grid
                    container
                    sx={{
                        height: "100vh",
                    }}
                >
                    <Grid
                        xs={6}
                        sx={{
                            backgroundImage:
                                "url('https://images.unsplash.com/photo-1630096126752-47c50c5f905d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                        }}
                        item={true}
                    >
                        <div className="h-full w-full bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
                            <h1 className="text-[5rem] font-bold">FarmxCuan</h1>
                            <p className="text-xl">
                                Buy, Sell, Invest in one stop.
                            </p>
                        </div>
                    </Grid>
                    <Grid
                        xs={6}
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                        }}
                        item={true}
                    >
                        <form
                            className="flex flex-col justify-center "
                            onSubmit={(e) => {
                                e.preventDefault();
                            }}
                        >
                            <h1 className="text-2xl font-bold text-center">
                                Login
                            </h1>
                            <Input
                                placeholder="Email"
                                size="lg"
                                variant="soft"
                                type="email"
                                sx={{
                                    marginY: ".75rem",
                                }}
                            />
                            <Input
                                placeholder="Password"
                                size="lg"
                                variant="soft"
                                type="password"
                                sx={{
                                    marginY: ".75rem",
                                }}
                            />
                            <div className="my-3 flex flex-col justify-center">
                                <Button
                                    onClick={() => {
                                        let role = prompt("Enter role")
                                        if (!["admin", "investor", "distributor", "farmer"].includes(role)) {
                                            alert("Invalid role")
                                            return
                                        }
                                        localStorage.setItem("role", role)
                                        window.location.href = "/dashboard";
                                    }}
                                    variant="solid"
                                    type="submit"
                                    sx={{
                                        marginY: ".75rem",
                                    }}
                                >
                                    Login
                                </Button>
                                <p className="my-3">
                                    Don't have an account?{" "}
                                    <Link href="/register">Sign up</Link>
                                </p>
                            </div>
                        </form>
                    </Grid>
                </Grid>
            </CssVarsProvider>
        </React.Fragment>
    );
}
