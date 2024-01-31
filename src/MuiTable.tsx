import React from 'react'
import { TableContainer, Table, TableHead, TableBody, TableRow, Paper, TableCell } from '@mui/material'

const MuiTable = () => {
    return (
        <TableContainer component={Paper} sx={{ maxHeight: "300px" }}>
            <Table aria-label="simple-label" stickyHeader>
                <TableHead>
                    <TableRow>
                        <TableCell>id</TableCell>
                        <TableCell>First Name</TableCell>
                        <TableCell>Last Name</TableCell>
                        <TableCell align="center">Email</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tableData.map(row => (
                        <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell>{row.id}</TableCell>
                            <TableCell>{row.first_name}</TableCell>
                            <TableCell>{row.last_name}</TableCell>
                            <TableCell align="center">{row.email}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

const tableData = [{
    "id": 1,
    "first_name": "Patsy",
    "last_name": "Leason",
    "email": "pleason0@cocolog-nifty.com",
    "gender": "Male",
    "ip_address": "203.192.82.195"
}, {
    "id": 2,
    "first_name": "Chaddie",
    "last_name": "Blaxall",
    "email": "cblaxall1@dropbox.com",
    "gender": "Male",
    "ip_address": "158.97.6.158"
}, {
    "id": 3,
    "first_name": "Pryce",
    "last_name": "Froud",
    "email": "pfroud2@tinypic.com",
    "gender": "Male",
    "ip_address": "218.117.36.66"
}, {
    "id": 4,
    "first_name": "Robin",
    "last_name": "Kestin",
    "email": "rkestin3@flavors.me",
    "gender": "Male",
    "ip_address": "14.253.244.7"
}, {
    "id": 5,
    "first_name": "Theressa",
    "last_name": "Ormiston",
    "email": "tormiston4@qq.com",
    "gender": "Polygender",
    "ip_address": "138.128.20.5"
}, {
    "id": 6,
    "first_name": "Jaimie",
    "last_name": "Pappin",
    "email": "jpappin5@scribd.com",
    "gender": "Male",
    "ip_address": "39.40.5.176"
}, {
    "id": 7,
    "first_name": "Caddric",
    "last_name": "Sign",
    "email": "csign6@wix.com",
    "gender": "Male",
    "ip_address": "43.77.70.80"
}, {
    "id": 8,
    "first_name": "Lee",
    "last_name": "Grunder",
    "email": "lgrunder7@themeforest.net",
    "gender": "Female",
    "ip_address": "56.217.15.254"
}, {
    "id": 9,
    "first_name": "Glennie",
    "last_name": "Crusham",
    "email": "gcrusham8@t-online.de",
    "gender": "Non-binary",
    "ip_address": "131.27.42.166"
}, {
    "id": 10,
    "first_name": "Mallorie",
    "last_name": "Bahde",
    "email": "mbahde9@java.com",
    "gender": "Polygender",
    "ip_address": "159.99.239.159"
}]

export default MuiTable