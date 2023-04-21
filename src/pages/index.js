import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

import LanguajeSelector from '../../components/LanguajeSelector'
import PersonalDate from '../../components/PersonalDate'
import Resume from '../../components/Resume'
import { Grid } from '@mui/material'
import ShareSpeedDial from '../../components/ShareSpeedDial'


const inter = Inter({ subsets: ['latin'] })

export default function Home(props) {
  const { data } = props;
  return (
    <>
      <Head>
        <title>{`CV - ${data.personalDate.Name}`}</title>
        <meta name="description" content={`CV - ${data.personalDate.Name}`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Grid container className={styles.main}>
        <LanguajeSelector data={data.Idiom} />
        <PersonalDate data={data.personalDate} lang={data.languajes} idiom={data.Idiom} />
        <Resume name={data.personalDate.Name} resume={data.ResumeStudy} study={data.Education} works={data.Job} skill={data.skill}/>
        <ShareSpeedDial />
      </Grid>
    </>
  )
}


export async function getStaticProps({ locale }) {
  const response = await import(`../../lang/${locale}.json`)

  return {
    props: {
      data: response.default
    },
  }
}
