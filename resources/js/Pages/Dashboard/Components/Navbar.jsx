import { Avatar, Box, Button, Typography } from "@mui/joy";
import { ClickAwayListener, Popper } from "@mui/base";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React, { useState } from "react";

export default function Navbar() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const handleClickAway = () => {
        setAnchorEl(null);
      };

    const open = Boolean(anchorEl);
    const id = open ? "simple-popper" : undefined;

    return (
        <React.Fragment>
            <ClickAwayListener onClickAway={handleClickAway}>
                <Box
                    sx={{
                        width: "100%",
                        padding: "1rem",
                        display: "flex",
                        justifyContent: "flex-end",
                        boxShadow: "0 0 1rem rgba(0, 0, 0, 0.1)",
                    }}
                >
                    <Button
                        aria-describedby={id}
                        variant="plain"
                        onClick={handleClick}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: "1rem",
                        }}
                    >
                        <Avatar variant="soft" />
                        <Typography level="body1" fontWeight="bold">
                            John Doe
                        </Typography>
                        <ExpandMoreIcon />
                    </Button>
                    <Popper id={id} open={open} anchorEl={anchorEl}>
                        <Box
                            sx={{
                                width: "10rem",
                                padding: "1rem",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                backgroundColor: "#d6d6d6",
                            }}
                        >
                            <Button color="danger" onClick={() => {
                                localStorage.removeItem("role");
                                window.location.href = "/login";
                            }}>Logout</Button>
                        </Box>
                    </Popper>
                </Box>
            </ClickAwayListener>
        </React.Fragment>
    );
}
