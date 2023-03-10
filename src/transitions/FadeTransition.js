import {
    Fade,
    Typography,
} from "@mui/material/";


export default function FadeTransition({checked, icon}){
    return(<>
        <Typography variant="h4">Fade:</Typography>
        <Fade in={checked} timeout={2000}>
            {icon}
        </Fade>
        </>
    )
}