import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Link from "@mui/material/Link";
import {useEffect, useState} from "react";
import axios from "axios";

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

function ListOfLessons(props) {
    const url = 'http://127.0.0.1:8000/'
    const [lekcija, setLekcija] = useState([])

    async function fetchLesson(){
        const response =  await axios.get(`${url}lekcije/`)
        console.log(response.data)
        setLekcija(response.data)
    }

    useEffect(() => {
        fetchLesson()
    }, [])
    return (
        <TableContainer component={Paper}>
            <Table sx={{marginLeft: 10, minWidth: 600, maxWidth: 900}} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Broj lekcije</StyledTableCell>
                        <StyledTableCell align="right">Naziv lekcije</StyledTableCell>
                        <StyledTableCell align="right">Video</StyledTableCell>
                        <StyledTableCell align="right">Pitanja</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {lekcija.map((lekcija) => (
                        <StyledTableRow key={lekcija.id}>
                            <StyledTableCell component="th" scope="row">
                                {lekcija.id}
                            </StyledTableCell>
                            <StyledTableCell align="right">
                                <Link href={`/Lekcija/${lekcija.id}`} color="#b71c1c">
                                   {lekcija.title}
                                </Link>
                            </StyledTableCell>
                            <StyledTableCell align="right">
                               <Link href={lekcija.video}>
                                   Link
                               </Link>
                            </StyledTableCell>
                            <StyledTableCell align="right">
                                <Link href={lekcija.video}>
                                    Pitanja
                                </Link>
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
export default ListOfLessons;