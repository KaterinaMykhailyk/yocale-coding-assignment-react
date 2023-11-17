import * as React from 'react';

import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

import styles from './Loader.module.scss';

export default function Loader() {
    return (
        <Box className={styles.Container}>
            <CircularProgress />
        </Box>
    );
}
