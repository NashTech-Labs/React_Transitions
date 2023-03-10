import {
    Grow,
    Typography,
} from "@mui/material/";


export default function GrowTransition({checked, icon}){
    return(<>
        <Typography variant="h4">Grow:</Typography>
        <Grow in={checked} timeout={2000}>
            {icon}
        </Grow>
        </>
    )
}