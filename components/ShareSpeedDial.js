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

const handleClick = () => {
  if (navigator.share) {
    navigator.share({
      title: 'CV - Crespi Federico',
      text: 'CV - Crespi Federico',
      url: 'https://fdcrespi.github.io/CV/',
    })
      .then(() => console.log('Successful share'))
      .catch((error) => console.log('Error sharing', error));
  }
};

/* { icon: <FileCopyIcon />, name: 'Copy' },
{ icon: <SaveIcon />, name: 'Save' }, */
const actions = [
  { 
    icon: <Link href="javascript:window.print()" className={styles.buttonPrint}><PrintIcon /></Link>, 

  },
  {
    icon: <ShareIcon onClick={handleClick} />,
 
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
    <Box className={styles.ShareSpeedDial} id="option-plus">
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'fixed', bottom: 16, right: 20 }}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.icon}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}