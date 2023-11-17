import React, { useState } from 'react';

import {
    Box,
    Paper,
    Table,
    TableContainer,
    TablePagination
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

import PaginationTableBody from 'components/UI/atoms/table/tableBody/PaginationTableBody';
import PaginationTableHead from 'components/UI/atoms/table/tableHead/PaginationTableHead';
import TableToolbar from 'components/UI/atoms/table/tableToolbar/TableToolbar';
import { HeadCell } from 'utils/types/table.types';
import { TicketStatus, TicketWithUser } from 'utils/types/ticket.types';

import styles from './PaginationTable.module.scss';

export interface ITableProps {
    columns: HeadCell[];
    dataSource: TicketWithUser[];
    isLoading: boolean;
    setTicketStatus: (status: TicketStatus) => void;
}

export default function PaginationTable({
    columns,
    dataSource,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setTicketStatus
}: ITableProps) {
    const [selected, setSelected] = useState<readonly number[]>([]);
    const [page, setPage] = React.useState(0);
    const navigate = useNavigate();
    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const isSelected = (id: number) => selected.indexOf(id) !== -1;

    const handleClick = (event: React.MouseEvent, id: number) => {
        const targetElement = event.target as HTMLElement;
        if (targetElement.tagName === 'INPUT') {
            event.stopPropagation();
            selected[0] === id ? setSelected([]) : setSelected([id]);
            return;
        } else {
            navigate(`${id}`);
        }
    };

    return (
        <Box className={styles.Container}>
            <Paper className={styles.Wrapper}>
                <TableToolbar numSelected={selected.length} />
                <TableContainer>
                    <Table
                        sx={{ minWidth: 750 }}
                        aria-labelledby="tableTitle"
                        size="medium"
                    >
                        <PaginationTableHead
                            numSelected={selected.length}
                            order="asc"
                            orderBy={'id'}
                            onSelectAllClick={() => {}}
                            onRequestSort={() => {}}
                            rowCount={dataSource.length}
                            headCells={columns}
                        />
                        <PaginationTableBody
                            dataSource={dataSource}
                            rowCells={columns}
                            isSelected={isSelected}
                            handleClick={handleClick}
                            emptyRows={[]}
                        />
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={dataSource.length}
                    rowsPerPage={10}
                    page={page}
                    onPageChange={handleChangePage}
                />
            </Paper>
        </Box>
    );
}
