import { Avatar, Grid, List, ListItem, ListItemAvatar, ListItemText, Rating, Typography } from "@mui/material";

import FolderIcon from '@mui/icons-material/Folder';

import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
import JavascriptIcon from '@mui/icons-material/Javascript';
import PhpIcon from '@mui/icons-material/Php';
import Image from "next/image";

export default function SkillResume({skill}) {

  return (
    <Grid item xs={12} md={6}>
      <Typography sx={{ mt: 2}} variant="h6" component="div">
        {skill.title}
      </Typography>
     
      <List>
        {
          skill.skills.map((i) => {
            return (
              <ListItem key={i.Name}>
                <ListItemAvatar>
                  <Avatar sx={{background: 'transparent'}}>
                    <Image src={i.Icon} alt={i.Name} width={30} height={30} />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={i.Name}
                  secondary= {<Rating name="size-small" defaultValue={i.Level} size="small" />}
                />
              </ListItem>
            )
          })
        }
      </List>
    </Grid>
  )
}