import DashboardLayout from "./Layouts/DashboardLayout";
import {
    AspectRatio,
    Button,
    Box,
    Card,
    Grid,
    Modal,
    ModalDialog,
    ModalClose,
    Input,
    Link,
    Stack,
    Typography,
} from "@mui/joy";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import React, { useState, useReducer } from "react";

export default function Products() {
    const [openModal, setOpenModal] = useState(false);
    const [modalContext, setModalContext] = useState("");
    const [editedProductId, setEditedProductId] = useState(null);
    const [newProduct, setNewProduct] = useReducer(
        (state, newState) => ({ ...state, ...newState }),
        {
            name: "",
            price: "",
            amount: "",
        }
    );

    return (
        <DashboardLayout>
            <Stack
                spacing={4}
                sx={{
                    padding: "1rem",
                }}
            >
                <Typography level="h1">Products</Typography>
                <Button
                    startDecorator={<AddCircleIcon />}
                    onClick={() => {
                        setModalContext("add");
                        setOpenModal(true);
                    }}
                >
                    Add new product
                </Button>
                <Stack spacing={2}>
                    {localStorage.getItem("products") !== null && JSON.parse(localStorage.getItem("products")).map(
                        (product, index) => (
                            <Card key={index}>
                                <Grid container spacing={2}>
                                    <Grid>
                                        <Typography level="h3">
                                            {product.name}
                                        </Typography>
                                    </Grid>
                                    <Grid>
                                        <Typography level="h3">
                                            Farmer Name
                                        </Typography>
                                    </Grid>
                                    <Grid>
                                        <Typography level="h3">
                                            <Typography color="neutral">
                                                Price:{" "}
                                            </Typography>
                                            Rp. {product.price} / KG
                                        </Typography>
                                    </Grid>
                                    <Grid>
                                        <Typography level="h3">
                                            <Typography color="neutral">
                                                Total Amount:{" "}
                                            </Typography>
                                            {product.amount} KG
                                        </Typography>
                                    </Grid>
                                    <Grid>
                                        <Button
                                            onClick={() => {
                                                setModalContext("edit");
                                                setOpenModal(true);
                                            }}
                                        >
                                            See Details
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Card>
                        )
                    )}

                    {/* <Card>
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
                                <Button
                                    onClick={() => {
                                        setModalContext("edit")
                                        setOpenModal(true)
                                    }}
                                >See Details</Button>
                            </Grid>
                        </Grid>
                    </Card> */}
                </Stack>
            </Stack>
            <Modal
                open={openModal}
                onClose={() => {
                    setOpenModal(false);
                    setModalContext("");
                }}
            >
                <ModalDialog>
                    <ModalClose />
                    {modalContext === "add" && (
                        <>
                            <Typography>Add new product</Typography>
                            <Input
                                type="text"
                                placeholder="Product name"
                                onChange={(e) =>
                                    setNewProduct({ name: e.target.value })
                                }
                            />
                            <Input
                                type="price"
                                placeholder="Product price"
                                onChange={(e) =>
                                    setNewProduct({ price: e.target.value })
                                }
                            />
                            <Input
                                type="price"
                                placeholder="Product amount"
                                onChange={(e) =>
                                    setNewProduct({ amount: e.target.value })
                                }
                            />
                            <Button
                                onClick={() => {
                                    let storedProducts = JSON.parse(
                                        localStorage.getItem("products")
                                    );
                                    if (storedProducts === null) {
                                        storedProducts = [];
                                    }
                                    storedProducts.push({
                                        id: storedProducts.length + 1,
                                        ...newProduct,
                                    });
                                    localStorage.setItem(
                                        "products",
                                        JSON.stringify(storedProducts)
                                    );
                                    setOpenModal(false);
                                    setNewProduct({
                                        name: "",
                                        price: "",
                                        amount: "",
                                    });
                                }}
                            >
                                Save
                            </Button>
                        </>
                    )}
                    {modalContext === "edit" && (
                        <>
                            <Typography>Add new product</Typography>
                        </>
                    )}
                </ModalDialog>
            </Modal>
        </DashboardLayout>
    );
}
