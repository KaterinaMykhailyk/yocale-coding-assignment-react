import React from 'react';

import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';

import { TicketDetailsPage } from './TicketDetails';

describe('TicketDetailsPage', () => {
    it('renders ticket ID from URL', () => {
        const testId = '1';

        render(
            <MemoryRouter initialEntries={['/tickets/1']}>
                <TicketDetailsPage />
            </MemoryRouter>
        );

        waitFor(() => {
            expect(
                screen.getByText(`Ticket ID: ${testId}`)
            ).toBeInTheDocument();
        });
    });
});
