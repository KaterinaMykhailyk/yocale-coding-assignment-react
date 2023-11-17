import React from 'react';

import { Routes, Route, Outlet, Navigate } from 'react-router-dom';

import App from 'App';
import { NotFound } from 'components/pages/notFound/NotFound';
import { TicketDetailsPage } from 'components/pages/ticketDetails/TicketDetails';
import { TicketsListPage } from 'components/pages/ticketsList/TicketsList';
import { RoutesList } from 'utils/constants/RoutesList';

import { Main } from '../components/pages/main/Main';

export const AppRoutes = () => {
    const { ROOT, NOT_FOUND, TICKETS } = RoutesList;

    return (
        <Routes>
            <Route path={ROOT} element={<Navigate to={TICKETS.ROOT} />} />
            <Route element={<App />}>
                <Route path={ROOT} element={<Main />}>
                    {/* TICKETS */}
                    <Route path={TICKETS.ROOT} element={<Outlet />}>
                        <Route index element={<TicketsListPage />}></Route>
                        <Route
                            path={TICKETS.TICKETS_DETAILS.VIEW}
                            element={<TicketDetailsPage />}
                        />
                    </Route>
                    <Route path="*" element={<NotFound />} />
                    <Route path={NOT_FOUND} element={<NotFound />} />
                </Route>
            </Route>
        </Routes>
    );
};
