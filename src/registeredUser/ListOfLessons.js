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

function createData(number, name, questions, video) {
    return { number, name, questions, video };
}

const rows = [
    createData('Lekcija 1', 'Uvod u prvu pomoć', 'pitanja1', 'video1'),
    createData('Lekcija 2', 'ime2', 'pitanja2', 'video2'),
    createData('Lekcija 3', 'ime3', 'pitanja3', 'video3'),
    createData('Lekcija 4', 'ime4', 'pitanja4', 'video4'),
    createData('Lekcija 5', 'ime5', 'pitanja5', 'video5'),
];

function ListOfLessons() {
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
                    {rows.map((row) => (
                        <StyledTableRow key={row.number}>
                            <StyledTableCell component="th" scope="row">
                                {row.number}
                            </StyledTableCell>
                            <StyledTableCell align="right">
                                <Link href="/Lekcija1" color="#b71c1c">
                                   {row.name}
                                </Link>
                            </StyledTableCell>
                            <StyledTableCell align="right">{row.video}</StyledTableCell>
                            <StyledTableCell align="right">{row.questions}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
export default ListOfLessons;