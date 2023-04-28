import Button from '@mui/material/Button';
import {Stack} from "@mui/material";
function Proba(){
    return(
        <div>
            <Stack spacing={10} direction="row">
            <Button variant="contained" color="secondary">Dugme</Button>
            <Button variant="outlined">Outlined</Button>
            <Button variant="text">Text</Button>
                </Stack>
        </div>
    );
}
export default Proba;