import styles from '@/styles/HeaderResume.module.css'
import { Typography } from '@mui/material'

export default function HeaderResume({name, resume}) {
  return (
    <div className={styles.resumeDate}>
      <Typography variant="h5" component="h1" sx={{marginBottom: 2}}>
        {name}
      </Typography>
      <Typography variant="body1" component="h2" sx={{marginBottom: 2}}>
        {resume}
      </Typography>
    </div>
  )
}