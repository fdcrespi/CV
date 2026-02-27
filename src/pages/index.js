import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

import LanguajeSelector from '../../components/LanguajeSelector'
import PersonalDate from '../../components/PersonalDate'
import Resume from '../../components/Resume'
import { Grid } from '@mui/material'
import ShareSpeedDial from '../../components/ShareSpeedDial'
import { useState } from 'react'

export default function Home(props) {
  const { data } = props;
  const [languaje, setLanguaje] = useState(data);

  const changeLange = async (lang) => {
    if (lang === "English") {
      const response = await import(`../../lang/en.json`) 
      setLanguaje(response.default);
      return;
    }
    const response = await import(`../../lang/es.json`)
    setLanguaje(response.default);
  }



  return (
    <>
      <Head>
        <title>{`CV - ${languaje.personalDate.Name}`}</title>
        <meta name="description" content={`CV - ${languaje.personalDate.Name}`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Grid container className={styles.main}>
        <LanguajeSelector changeLange={changeLange} lang={languaje.Idiom} />
        <PersonalDate data={languaje.personalDate} lang={languaje.languajes} idiom={languaje.Idiom} />
        <Resume name={languaje.personalDate.Name} resume={languaje.ResumeStudy} study={languaje.Education} works={languaje.Job} skill={languaje.skill} project={languaje.Project} />
        <ShareSpeedDial />
      </Grid>
    </>
  )
}


export async function getStaticProps() {
  
  const response = await import(`../../lang/es.json`)

  return {
    props: {
      data: response.default
    },
  }
}
