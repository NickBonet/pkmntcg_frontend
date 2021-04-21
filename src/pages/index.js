import { Typography, Grid } from "@material-ui/core";
import SearchBar from "material-ui-search-bar";
import Head from "next/head";
import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>TCG Card Search App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid
        container
        direction="column"
        align="center"
        justify="center"
        style={{ minHeight: "90vh" }}
      >
        <Grid item container direction="column" display="flex">
          <Typography variant="h2">Welcome to TCG Card Search!</Typography>
          <Typography variant="h5">
            Start entering your query in the search box below to get started.
          </Typography>
        </Grid>
        <br />
        <Grid item container direction="column" display="flex" justify="center">
          <SearchBar
            placeholder="Search for a card"
            cancelOnEscape="true"
            style={{ margin: "0 auto", minWidth: "35vw" }}
          />
        </Grid>
      </Grid>
    </Layout>
  );
}
