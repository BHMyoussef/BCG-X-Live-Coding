import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from "@mui/material";
import React from "react";

export default function Dashboard({ content = [] }) {
    if (!content) return null;
    if( content.length == 0) return "No user found"
    return (
        <div>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>id</TableCell>
                            <TableCell>name</TableCell>
                            <TableCell>createdDate</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {content.map((c) => (
                            <TableRow>
                                <>
                                    <TableCell>{c.id}</TableCell>
                                    <TableCell>{c.name}</TableCell>
                                    <TableCell>{c.createdDate}</TableCell>
                                </>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
