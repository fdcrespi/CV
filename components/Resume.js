import styles from '@/styles/Resume.module.css'
import { Divider, Grid } from '@mui/material'
import HeaderResume from './HeaderResume'
import StudyResume from './StudyResume'
import WorkResume from './WorkResume'
import SkillResume from './SkillResume'
import ProyectsResume from './ProyectsResume'

export default function Resume({name, resume, study, works, skill, project}) {
  return (
    <Grid item className={styles.resumeDate} xs={12} sm={8} md={9} sx={{padding: 0}}>
      <HeaderResume name={name} resume={resume} />
      <Divider />
      <StudyResume study={study} />
      <Divider />
      <WorkResume works={works} />
      <Divider />
      <ProyectsResume project={project} />
      <Divider />
      <SkillResume skill={skill}/>
    </Grid>
  )
}