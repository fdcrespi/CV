import styles from '@/styles/PersonalDate.module.css'
import { Divider, List, ListItem, ListItemAvatar, ListItemText, Rating, Typography } from '@mui/material'
import Image from 'next/image'

import PersonIcon from '@mui/icons-material/Person';
import EventIcon from '@mui/icons-material/Event';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import EmailIcon from '@mui/icons-material/Email';

export default function PersonalDate({data, lang, idiom}) {

  return (
    <div className={styles.personalDate}>
      <div className={styles.contentImageProfile}>
        <Image className={styles.imageProfile} src="/profile1.jpg" alt="profile" width={200} height={200} />
      </div>
      <div className={styles.contentDate}>
        <Typography variant="h5" component="div" gutterBottom sx={{marginBottom: 0}}>
          {data.Title}
        </Typography>
        <List dense>
          <ListItem>
            <ListItemAvatar>
              <PersonIcon />
            </ListItemAvatar>
            <ListItemText primary= {data.Name} />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <EventIcon />
            </ListItemAvatar>
            <ListItemText primary={data.Birthdate} />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <SmartphoneIcon />
            </ListItemAvatar>
            <ListItemText primary={data.Phone} />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <EmailIcon />
            </ListItemAvatar>
            <ListItemText primary={data.Email} />
          </ListItem>
        </List>
      </div>
      
      <div className={styles.contentIdiom}>
        <Typography variant="h5" component="div" gutterBottom sx={{marginBottom: 0}}>
          {idiom == 'English' ? "Languajes" : "Idiomas"}
        </Typography>
        <List dense>
          {lang.map((e) => (
            <ListItem key={e.Name} sx={{display: 'flex', justifyContent: 'space-around'}}>
              <Typography component="legend" sx={{width: 60}}>{e.Name}</Typography>
              <Rating name="read-only" value={e.Level} readOnly />
            </ListItem>
          ))}
        </List>
      </div>
    
    </div>
  )
}

