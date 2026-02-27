import styles from '@/styles/HeaderResume.module.css'
import { Container, Typography } from '@mui/material'

export default function HeaderResume({name, resume}) {
  return (
    <Container sx={{ padding: 0, mb: 4 }}>
      <Typography variant="h5" component="h1" sx={{marginBottom: 2}}>
        {name}
      </Typography>
      <Typography variant="body1" component="h2" sx={{marginBottom: 2}}>
        {resume}
      </Typography>
    </Container>
  )
}