import React from 'react';

import { Box, Typography } from '@mui/material';

import styles from './NotFound.module.scss';

export const NotFound = () => {
    return (
        <Box className={styles.Box}>
            <Typography variant="h1" className={styles.Typography}>
                404
            </Typography>
        </Box>
    );
};
