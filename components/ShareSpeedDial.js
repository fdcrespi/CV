import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import Link from 'next/link';
import styles from '@/styles/Home.module.css';

const actions = [
  { icon: <FileCopyIcon />, name: 'Copy' },
  { icon: <SaveIcon />, name: 'Save' },
  { 
    icon: <Link href="javascript:window.print()" className={styles.buttonPrint}><PrintIcon /></Link>, 
    name: 'Print' 
  }
];

/* 
,
  { 
    icon: <Link href="whatsapp://send?text=CV%20http://localhost:3000" className={styles.buttonPrint}><ShareIcon /></Link>,
    name: 'Share'
  }
*/

export default function ShareSpeedDial() {
  return (
    <Box sx={{ height: '100vh', transform: 'translateZ(0px)', flexGrow: 1, zIndex: 1 }} className={styles.ShareSpeedDial}>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'fixed', bottom: 16, right: 20 }}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}