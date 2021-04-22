import { Typography, Grid } from "@material-ui/core";
import SearchBar from "material-ui-search-bar";
import Head from "next/head";
import Layout from "../components/layout";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [searchVal, setSearchVal] = useState("");

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
        spacing={1}
        style={{ minHeight: "90vh" }}
      >
        <Grid item container direction="column" display="flex">
          <Typography variant="h2">Welcome to TCG Card Search!</Typography>
        </Grid>
        <Grid item container direction="column" display="flex">
          <Typography variant="h5">
            Start entering your query in the search box below to get started.
          </Typography>
        </Grid>
        <Grid item container direction="column" display="flex">
          <SearchBar
            placeholder="Search for a card"
            value={searchVal}
            cancelOnEscape="true"
            onChange={(newVal) => setSearchVal(newVal)}
            onRequestSearch={() => router.push(`/search?query=${searchVal}`)}
            style={{ margin: "0 auto", minWidth: "35vw" }}
          />
        </Grid>
      </Grid>
    </Layout>
  );
}
