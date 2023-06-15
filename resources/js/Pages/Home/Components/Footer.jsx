import { Typography } from "@mui/joy";

export default function Footer() {
    return <footer>
        <Typography level="body1" sx={{
            textAlign: "center",
            padding: "1rem",
        }}>
            &copy; {new Date().getFullYear()} Farm X Cuan. Created with ❤️ by our developers.
        </Typography>
    </footer>
}
