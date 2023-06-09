import { Avatar, Container, Grid, List, ListItem, ListItemAvatar, ListItemText, Rating, Typography } from "@mui/material";

import FolderIcon from '@mui/icons-material/Folder';

import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
import JavascriptIcon from '@mui/icons-material/Javascript';
import PhpIcon from '@mui/icons-material/Php';
import Image from "next/image";

export default function SkillResume({skill}) {

  return (
    <Container sx={{padding: 0}}>
      <Typography sx={{ mt: 2}} variant="h6" component="div">
        {skill.title}
      </Typography>
      <Grid container spacing={1}>
        {
          skill.skills.map((i) => {
            return (
              <Grid item xs={6} sm={6} md={3} key={i.name}>
                <ListItem key={i.Name} sx={{padding: 0}}>
                  <Avatar sx={{background: 'transparent'}}>
                    <Image src={`https://github.com/fdcrespi/CV/blob/main/public${i.Icon}?raw=true`} alt={i.Name} width={20} height={20} />
                  </Avatar>
                  <ListItemText
                    primary={i.Name}
                    secondary= {<Rating name="size-small" defaultValue={i.Level} size="small" readOnly />}
                    primaryTypographyProps={{fontSize: 14}}
                    secondaryTypographyProps={{fontSize: 12}}
                    />
                </ListItem>
              </Grid>
            )
          })
        }
      </Grid>
    </Container>
  )
}