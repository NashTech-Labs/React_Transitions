import {
    Collapse,
    Typography,
} from "@mui/material/";


export default function CollapseTransition({checked, icon}){
    return(<>
        <Typography variant="h4">Collapse:</Typography>
        <Collapse in={checked} timeout={2000}>
            {icon}
        </Collapse>
        </>
    )
}