import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import {
  Grid,
  Typography,
  Button,
  TextField,
  Card,
  CardMedia,
  CardActions,
  CardContent,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";

const Home: NextPage = () => {

  return (
    <div>
      <Head>
        <title>Healthy Food | Home</title>
        <meta name="description" content="Healthy Food Commerce Landing Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <section className={styles.introduction}>
          <div className={styles.introduction_header}>
            <Grid container justifyContent="space-between">
              <Grid item>
                <Typography variant="h1">Healthy Food</Typography>
              </Grid>
              <Grid item>
                <Link href="#">Healthy Recipes</Link>
                <Link href="#">Blog</Link>
                <Link href="#">Join</Link>
                <Button href="#" variant="contained">
                  Register
                </Button>
              </Grid>
            </Grid>
          </div>
          <div className={styles.introduction_search}>
            <Grid container flexDirection="column" spacing={4}>
              <Grid item>
                <Typography variant="h2">
                  Ready for <br /> Trying a new <br /> recipe?
                </Typography>
              </Grid>
              <Grid item>
                <TextField
                  placeholder="Search healthy recipes"
                  variant="outlined"
                  color="success"
                />
                <Button variant="contained">
                  <SearchIcon />
                </Button>
              </Grid>
            </Grid>
          </div>
        </section>
        <section className="recipes">
          <Typography variant="h3">Our Best Recipes</Typography>
          <Typography variant="body1">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </Typography>
          <Grid container>
            <Grid item>
              <Card sx={{ display: "flex" }}>
                <CardMedia
                  component="img"
                  height="140"
                  image="/images/comida_1.svg"
                  alt="Broccoli Salad with Bacon"
                />
                <CardContent sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography variant="subtitle1">
                    Broccoli Salad with Bacon
                  </Typography>
                  <Button size="small">See Recipe</Button>
                </CardContent>
              </Card>
            </Grid>
            <Grid item>
              <Card sx={{ display: "flex" }}>
                <CardMedia
                  component="img"
                  height="140"
                  image="/images/comida_2.svg"
                  alt="Classic Beef Burgers"
                />
                <CardContent sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography variant="subtitle1">
                    Classic Beef Burgers
                  </Typography>
                  <Button size="small">See Recipe</Button>
                </CardContent>
              </Card>
            </Grid>
            <Grid item>
              <Card sx={{ display: "flex" }}>
                <CardMedia
                  component="img"
                  height="140"
                  image="/images/comida_3.svg"
                  alt="Classic Potato Salad"
                />
                <CardContent sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography variant="subtitle1">
                    Classic Potato Salad
                  </Typography>
                  <Button size="small">See Recipe</Button>
                </CardContent>
              </Card>
            </Grid>
            <Grid item>
              <Card sx={{ display: "flex" }}>
                <CardMedia
                  component="img"
                  height="140"
                  image="/images/comida_4.svg"
                  alt="Cherry Cobbler on the Grill"
                />
                <CardContent sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography variant="subtitle1">
                    Cherry Cobbler on the Grill
                  </Typography>
                  <Button size="small">See Recipe</Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </section>
        <section className={styles.services}>
          <Grid container>
            <Grid item>
              <Typography variant="subtitle1">
                The best services ready To serve you
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean. A small river named Duden flows by their
                place and supplies it with the necessary regelialia.
              </Typography>
            </Grid>
            <Grid item>
              <Button>Know More</Button>
            </Grid>
          </Grid>
        </section>
        <section className={styles.blog}>
       
        </section>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
