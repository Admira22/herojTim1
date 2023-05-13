import {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import * as React from "react";
import {styled} from "@mui/material/styles";
import TableCell, {tableCellClasses} from "@mui/material/TableCell";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    }
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));
function ListOfQuestions(){
    const url = 'http://127.0.0.1:8000/'
    const [pitanja, setPitanja] = useState([])
    const { id } = useParams()

    async function fetchQuestions(){
        const response =  await axios.get(`${url}pitanja/${id}/`)
        console.log(response.data)
        setPitanja(response.data)
    }

    useEffect(() => {
        fetchQuestions()
    }, [])
    return(
        <>
            <TableContainer component={Paper}>
                <Table sx={{marginLeft: 10, minWidth: 600, maxWidth: 900}} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Broj pitanja</StyledTableCell>
                            <StyledTableCell align="left">Tekst</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {pitanja.map((pitanja) => (
                            <StyledTableRow key={pitanja.id}>
                                <StyledTableCell component="th" scope="row">
                                    {pitanja.id}
                                </StyledTableCell>
                                <StyledTableCell align="left">
                                        {pitanja.tekst}
                                </StyledTableCell>

                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}
export default ListOfQuestions;