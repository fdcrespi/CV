import { Avatar, Grid, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';

import FolderIcon from '@mui/icons-material/Folder';
import { cloneElement, useState } from "react";

function generate(element) {
  return [0, 1, 2].map((value) =>
    cloneElement(element, {
      key: value,
    }),
  );
}

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export default function SkillResume() {

  const [dense, setDense] = useState(false);
  const [secondary, setSecondary] = useState(false);

  return (
    <Grid item xs={12} md={6}>
      <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
        Avatar with text
      </Typography>
      <Demo>
        <List dense={dense}>
          {generate(
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <FolderIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Single-line item"
                secondary={secondary ? 'Secondary text' : null}
              />
            </ListItem>,
          )}
        </List>
      </Demo>
    </Grid>
  )
}