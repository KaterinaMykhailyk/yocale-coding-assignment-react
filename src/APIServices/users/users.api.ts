import { User } from 'utils/types/user.types';

import { REQUEST_PATH } from './users.types';
import { API_URL } from '../apiUrl';

export const getUsers = async (): Promise<User[]> => {
    try {
        const response = await fetch(`${API_URL}${REQUEST_PATH.USERS}`);
        return await response.json();
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
};
