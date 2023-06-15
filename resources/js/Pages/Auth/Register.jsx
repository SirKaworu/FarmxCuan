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
import { A11y, Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Register() {
    return (
        <React.Fragment>
            <Head title="Register" />
            <CssBaseline />
            <CssVarsProvider>
                <Grid container sx={{ height: "100vh" }}>
                    <Grid
                        xs={6}
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                        }}
                        item={true}
                    >
                        <form
                            className="flex flex-col justify-center"
                            onSubmit={(e) => {
                                e.preventDefault();
                                window.location.href = "/";
                            }}
                        >
                            <h1 className="text-2xl font-bold text-center">
                                Register
                            </h1>
                            <p>Fill form below for register to our app.</p>
                            <Input
                                placeholder="Full name"
                                size="lg"
                                variant="soft"
                                type="text"
                                sx={{
                                    marginY: ".75rem",
                                }}
                            />
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
                            <Input
                                placeholder="Repeat Password"
                                size="lg"
                                variant="soft"
                                type="password"
                                sx={{
                                    marginY: ".75rem",
                                }}
                            />
                            <div className="my-3 flex flex-col justify-center">
                                <Button
                                    variant="solid"
                                    type="submit"
                                    sx={{
                                        marginY: ".75rem",
                                    }}
                                >
                                    Register
                                </Button>
                                <p className="my-3">
                                    Have an account?{" "}
                                    <Link href="/login">Sign in</Link>
                                </p>
                            </div>
                        </form>
                    </Grid>
                    <Grid
                        xs={6}
                        style={{
                            backgroundImage:
                                "url('https://images.unsplash.com/photo-1630096126752-47c50c5f905d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                        }}
                        item={true}
                    >
                        <div className="h-full w-full bg-black bg-opacity-50 flex flex-col justify-center text-white">
                            <div>
                                <Swiper
                                    modules={[
                                        Navigation,
                                        Pagination,
                                        A11y,
                                        Autoplay,
                                    ]}
                                    spaceBetween={50}
                                    slidesPerView={1}
                                    navigation
                                    pagination={{ clickable: true }}
                                    loop={true}
                                    autoplay={{
                                        delay: 5000,
                                        disableOnInteraction: false,
                                    }}
                                >
                                    <SwiperSlide>
                                        <div className="p-8">
                                            <h1 className="my-3 text-5xl text-center font-bold">
                                                Buy grade-controlled poultry
                                                products.
                                            </h1>
                                            <p className="my-3 text-xl text-center">
                                                We are committed to providing
                                                the best quality products by
                                                sourcing from the best farms in
                                                the country.
                                            </p>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="p-8">
                                            <h1 className="my-3 text-5xl text-center font-bold">
                                                Sell poultry products in one
                                                click.
                                            </h1>
                                            <p className="my-3 text-xl text-center">
                                                We simplify the process of
                                                selling their products by
                                                providing a platform for them.
                                            </p>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="p-8">
                                            <h1 className="my-3 text-5xl text-center font-bold">
                                                Invest in poultry products.
                                            </h1>
                                            <p className="my-3 text-xl text-center">
                                                We provide a platform for
                                                investors to invest in poultry
                                                products with ease.
                                            </p>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </CssVarsProvider>
        </React.Fragment>
    );
}
