import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from "@mui/lab";

import SchoolIcon from '@mui/icons-material/School';
import { Grid, Typography } from "@mui/material";

export default function StudyResume({study}) {
  return (
    <Timeline sx={{alignItems: 'flex-start', marginBottom: 2 }}>

      <TimelineItem sx={{marginLeft: '-12px', "&::before": {display: 'none'}}}>
        <TimelineSeparator>
          <TimelineDot color="primary" variant="outlined">
            <SchoolIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            {study.title}
          </Typography>
        </TimelineContent>
      </TimelineItem>

      {study.studies.map((item) => (
        <TimelineItem sx={{ "&::before": {display: 'none'} }}>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ flex: 'none' }}>
              <Grid container>
                <Grid sx={{marginRight: 2}}>
                  {item.Date}
                </Grid>
                <Grid container xs={10} sx={{display: 'flex', flexDirection: 'column'}}>
                    <Typography variant="body2"  sx={{fontWeight: 'bold'}}>
                      {item.Name}
                    </Typography>
                    <Typography variant="body2" >
                      {item.Institution}
                    </Typography>
                </Grid>
              </Grid>
          </TimelineContent>
        </TimelineItem>
      ))}

    </Timeline>
  )
}