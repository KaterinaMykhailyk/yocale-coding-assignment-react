import * as React from 'react';

import { Checkbox, TableBody } from '@mui/material';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

import { HeadCell } from 'utils/types/table.types';
import { TicketWithUser } from 'utils/types/ticket.types';

interface IProps {
    dataSource: TicketWithUser[];
    rowCells: HeadCell[];
    isSelected: (id: number) => boolean;
    handleClick: (event: React.MouseEvent, id: number) => void;
    emptyRows: TicketWithUser[];
}

export default function PaginationTableBody({
    dataSource,
    rowCells,
    isSelected,
    handleClick,
    emptyRows
}: IProps) {
    return (
        <TableBody>
            {dataSource.map((row, index) => {
                const isItemSelected = isSelected(row.id);
                const labelId = `enhanced-table-checkbox-${index}`;
                return (
                    <TableRow
                        hover
                        onClick={(event) => handleClick(event, row.id)}
                        role="checkbox"
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={row.id}
                        selected={isItemSelected}
                        sx={{ cursor: 'pointer' }}
                    >
                        <TableCell padding="checkbox">
                            <Checkbox
                                color="primary"
                                checked={isItemSelected}
                                inputProps={{
                                    'aria-labelledby': labelId
                                }}
                            />
                        </TableCell>
                        {rowCells.map((cell) => (
                            <TableCell align="right" key={cell.id}>
                                {row[cell.id as keyof TicketWithUser]}
                            </TableCell>
                        ))}
                    </TableRow>
                );
            })}
            {emptyRows.length > 0 && (
                <TableRow
                    style={{
                        height: 53 * emptyRows.length
                    }}
                >
                    <TableCell colSpan={6} />
                </TableRow>
            )}
        </TableBody>
    );
}
