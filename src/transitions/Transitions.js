import * as React from "react";
import Box from "@mui/material/Box";
import Switch from "@mui/material/Switch";
import {
    Container,
    Stack,
    Typography,
} from "@mui/material/";
import FormControlLabel from "@mui/material/FormControlLabel";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import CollapseTransition from "./CollapseTransition";
import FadeTransition from "./FadeTransition";
import GrowTransition from "./GrowTransition";
import SlideTransition from "./SlideTransition";
import ZoomTransition from "./ZoomTransition";

const icon = <AcUnitIcon sx={{ height: "120px", width: "200px" }} />;

export default function Transitions() {
    const [checked, setChecked] = React.useState(false);

    const handleChange = () => {
        setChecked((prev) => !prev);
    };

    return (
        <Box sx={{ height: 300, display: "flex", flexDirection: "column" }}>
            <Typography variant="h3" color="secondary" sx={{ alignSelf: "center", marginBottom:"5rem" }}>
                MUI Transitions
            </Typography>
            <Container>
                <FormControlLabel
                    control={<Switch checked={checked} onChange={handleChange} />}
                    label="Show" sx={{marginBottom:"5rem"}}
                />
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-around",
                        flexDirection: "row",
                        height: "100%",
                        width: "100%",
                        // marginTop: "10rem"
                    }}
                >

                    <Stack spacing={2} direction="row" mx={3} sx={{ marginTop: "0rem" }}>
                        <CollapseTransition checked={checked} icon={icon} />
                    </Stack>
                    <Stack spacing={2} direction="row" mx={3} sx={{ marginTop: "0rem" }}>
                        <FadeTransition checked={checked} icon={icon} />
                    </Stack>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-around",
                            flexDirection: "row",
                            height: "100%",
                            width: "100%"
                        }}
                    >
                        <Stack spacing={2} direction="row" mx={3}>
                            <GrowTransition checked={checked} icon={icon} />

                        </Stack>
                        <Stack spacing={2} direction="row" mx={3}>
                            <SlideTransition checked={checked} icon={icon} direction="left" />

                        </Stack>
                    </Box>
                    <Stack spacing={2} direction="row" mx={3}>
                        <ZoomTransition checked={checked} icon={icon} />

                    </Stack>
                </Box>
            </Container>
        </Box>
    );
}
