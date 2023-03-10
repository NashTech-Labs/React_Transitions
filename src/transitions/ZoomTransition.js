import {
    Typography,
    Zoom
} from "@mui/material/";


export default function ZoomTransition({checked, icon}){
    return(<>
        <Typography variant="h4">Zoom:</Typography>
        <Zoom in={checked} timeout={2000}>
            {icon}
        </Zoom>
        </>
    )
}