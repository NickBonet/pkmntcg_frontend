import { Typography, Grid } from "@material-ui/core";
import SearchBar from "material-ui-search-bar";
import Head from "next/head";
import Layout from "../components/layout";
import { useRouter } from "next/router";
import { useState } from "react";
import { isMobile } from "react-device-detect";

export default function Home() {
  const router = useRouter();
  const [searchVal, setSearchVal] = useState("");

  return (
    <Layout>
      <Head>
        <title>PTCG Tracker | Home</title>
      </Head>
      <Typography
        variant="h3"
        align="center"
        style={{
          paddingTop: "1vh",
        }}
      >
        Welcome to PTCG Tracker!
      </Typography>
      <Grid
        container
        direction="column"
        align="center"
        justify="center"
        spacing={1}
        style={{ minHeight: isMobile ? "67vh" : "76vh", maxWidth: "100vw" }}
      >
        <Grid item>
          <Typography variant="h6">
            Start entering your query in the search box below to get started.
          </Typography>
        </Grid>
        <Grid item direction="column">
          <SearchBar
            placeholder="Search for a card"
            value={searchVal}
            cancelOnEscape="true"
            onChange={(newVal) => setSearchVal(newVal)}
            onRequestSearch={() => router.push(`/search?query=${searchVal}`)}
            style={{ margin: "0 auto", maxWidth: isMobile ? "95vw" : "35vw" }}
          />
        </Grid>
      </Grid>
    </Layout>
  );
}
