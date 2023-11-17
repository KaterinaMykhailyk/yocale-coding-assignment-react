import React, { useState } from 'react';

import { useTicketsList } from 'components/pages/ticketsList/useTicketsList';
import Loader from 'components/UI/atoms/loader/Loader';
import PaginationTable from 'components/UI/atoms/table/PaginationTable';
import { HeadCell } from 'utils/types/table.types';
import { TicketStatus } from 'utils/types/ticket.types';

const tableColumns: HeadCell[] = [
    {
        id: 'firstName',
        numeric: false,
        disablePadding: false,
        label: 'First Name'
    },
    {
        id: 'lastName',
        numeric: false,
        disablePadding: false,
        label: 'Last Name'
    },
    {
        id: 'address',
        numeric: false,
        disablePadding: false,
        label: 'Address'
    },
    {
        id: 'number',
        numeric: false,
        disablePadding: false,
        label: 'Number'
    },
    {
        id: 'status',
        numeric: false,
        disablePadding: false,
        label: 'Status'
    }
];

export const TicketsListPage = () => {
    const [filter, setFilter] = useState<TicketStatus | undefined>(undefined);

    const { tickets, isLoading } = useTicketsList({ filter });

    return isLoading ? (
        <Loader />
    ) : (
        <PaginationTable
            dataSource={tickets}
            columns={tableColumns}
            isLoading={isLoading}
            setTicketStatus={setFilter}
        />
    );
};
