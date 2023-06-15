import { Box, Link, Stack, Typography, SvgIcon } from "@mui/joy";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PollIcon from "@mui/icons-material/Poll";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import PaidIcon from "@mui/icons-material/Paid";
import InventoryIcon from "@mui/icons-material/Inventory";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import ArticleIcon from "@mui/icons-material/Article";
import Access from "../../../Data/Access.json";
import React from "react";

export default function Sidebar() {
    return (
        <React.Fragment>
            <Box
                sx={{
                    height: "100%",
                    padding: "1rem",
                    display: "grid",
                    gridTemplateRows: "1fr 3fr 1fr",
                    backgroundColor: "#d6d6d6",
                }}
            >
                <Box>
                    <Typography level="h3" textAlign="center" fontWeight="bold">
                        FarmXCuan
                    </Typography>
                </Box>
                <Box
                    sx={{
                        padding: "1rem",
                    }}
                >
                    <Stack spacing={2} alignItems="center">
                        {Access.data.map((item, index) => {
                            let role = localStorage.getItem("role");
                            if (!item.role.includes(role)) {
                                return null;
                            }
                            return (
                                <Link
                                    key={index}
                                    href={item.path}
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
                                    {item.label}
                                </Link>
                            );
                        })}
                    </Stack>
                </Box>
            </Box>
        </React.Fragment>
    );
}
