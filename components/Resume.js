import styles from '@/styles/Resume.module.css'
import { Divider } from '@mui/material'
import HeaderResume from './HeaderResume'
import StudyResume from './StudyResume'
import WorkResume from './WorkResume'

export default function Resume({name, resume, study, works}) {
  return (
    <div className={styles.resumeDate}>
      <HeaderResume name={name} resume={resume} />
      <Divider />
      <StudyResume study={study} />
      <Divider />
      <WorkResume works={works} />
    </div>
  )
}