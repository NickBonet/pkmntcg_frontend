import { Typography, Grid } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import SearchBar from "material-ui-search-bar";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import { isMobile } from "../helpers";

export default function Home() {
  const router = useRouter();
  const theme = useTheme();
  const [searchVal, setSearchVal] = useState("");

  return (
    <div>
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
        style={{
          minHeight: isMobile(theme) ? "67vh" : "76vh",
          maxWidth: "100vw",
        }}
      >
        <Grid item>
          <Typography variant="h6">
            Start entering your query in the search box below to get started.
          </Typography>
        </Grid>
        <Grid item>
          <SearchBar
            placeholder="Search for a card"
            value={searchVal}
            cancelOnEscape="true"
            onChange={(newVal) => setSearchVal(newVal)}
            onRequestSearch={() => router.push(`/search?query=${searchVal}`)}
            style={{
              margin: "0 auto",
              maxWidth: isMobile(theme) ? "95vw" : "35vw",
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
}
