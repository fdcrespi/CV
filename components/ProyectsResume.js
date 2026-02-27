import { Avatar, Container, Grid, Typography, Card, CardContent, CardMedia, Button } from "@mui/material";
import Image from "next/image";

export default function ProyectsResume({ project }) {
  return (
    <Container sx={{ padding: 0 }}>
      <Typography sx={{ mt: 2, mb: 2 }} variant="h5" component="div" align="center">
        Proyectos
      </Typography>
      <Grid container spacing={3}>
        {project.projects.map((i) => {
          return (
            <Grid item xs={12} sm={6} md={4} key={i.Name}>
              <Card>
                <CardMedia>
                  <Image
                    src={`https://github.com/fdcrespi/CV/blob/main/public${i.Image}?raw=true`}
                    alt={i.Name}
                    width={300}
                    height={200}
                    style={{ objectFit: "cover" }}
                  />
                </CardMedia>
                <CardContent>
                  <Typography variant="h6" component="div">
                    {i.Name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {i.Description}
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary" sx={{ mt: 1 }}>
                    Tecnologías: {i.Technologies.join(", ")}
                  </Typography>
                  {i.Link && (
                    <Button
                      variant="contained"
                      color="primary"
                      href={i.Link}
                      target="_blank"
                      sx={{ mt: 2 }}
                    >
                      Ver Proyecto
                    </Button>
                  )}
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}
