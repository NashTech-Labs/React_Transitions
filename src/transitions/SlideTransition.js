import {
    Slide,
    Typography,
} from "@mui/material/";


export default function SlideTransition({checked, icon, direction}){
    return(<>
        <Typography variant="h4">Slide:</Typography>
        <Slide in={checked} timeout={2000} direction={direction}>
            {icon}
        </Slide>
        </>
    )
}