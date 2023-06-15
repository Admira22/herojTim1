import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

function Progres({ progress,
                     size = 100,
                     thickness = 5,
                     darkColor = '#b71c1c',
                     lightColor ="#e57373" }) {
    const normalizedProgress = Math.min(Math.max(progress, 0), 100); // Normalize progress value to range [0, 100]
    const progressColor = normalizedProgress >= 50 ?   lightColor : darkColor;
    const circleProps = {
        variant: 'determinate',
        value: normalizedProgress,
        size,
        thickness,
        sx: {
            color: progressColor,
            '& .MuiCircularProgress-trail': {
                color: `${progressColor}1A`,
            },
        },
    };

    return (
        <Box sx={{ position: 'relative', display: 'inline-flex' }}>
            <CircularProgress {...circleProps} />
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: progressColor,
                    fontWeight: 'bold',
                }}
            >
                {`${normalizedProgress}%`}
            </Box>
            <Box
                sx={{
                    position: 'absolute',
                    bottom: '-0.5em',
                    left: '-0.5em',
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
            </Box>
        </Box>
    );
}

export default Progres;