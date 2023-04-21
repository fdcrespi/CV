import styles from '@/styles/Resume.module.css'
import { Divider, Grid } from '@mui/material'
import HeaderResume from './HeaderResume'
import StudyResume from './StudyResume'
import WorkResume from './WorkResume'
import SkillResume from './SkillResume'

export default function Resume({name, resume, study, works, skill}) {
  return (
    <Grid item className={styles.resumeDate} xs={12} sm={8} md={9}>
      <HeaderResume name={name} resume={resume} />
      <Divider />
      <StudyResume study={study} />
      <Divider />
      <WorkResume works={works} />
      <Divider />
      <SkillResume skill={skill}/>
    </Grid>
  )
}