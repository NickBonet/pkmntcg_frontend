import pokemon from "pokemontcgsdk";
import Layout from "../components/layout";
import { Grid, Typography } from "@material-ui/core";
import { useRouter } from "next/router";
import Head from "next/head";
import { isMobile } from "react-device-detect";

function Search({ res }) {
  const router = useRouter();
  const query = router.query.query;
  const cardList = [];
  const cardWidth = 246;
  const cardHeight = 342;

  // Build card grid array for the page depending on results.
  for (var i = 0; i < res.data.length; i++) {
    if (!isMobile) {
      cardList.push(
        <Grid item>
          <img
            src={res.data[i].images.small}
            width={cardWidth}
            height={cardHeight}
          />
        </Grid>
      );
    } else {
      cardList.push(
        <Grid item xs={6} sm={6}>
          <img
            src={res.data[i].images.small}
            width={cardWidth * 0.8}
            height={cardHeight * 0.8}
          />
        </Grid>
      );
    }
  }

  return (
    <Layout>
      <Head>
        <title>PTCG Tracker | Search</title>
      </Head>
      <Grid
        container
        align="center"
        justify="center"
        spacing={2}
        style={{
          paddingLeft: isMobile ? "3vw" : "10vw",
          paddingRight: isMobile ? "2vw" : "8vw",
          paddingTop: "1vh",
          minHeight: "90vh",
          maxWidth: "99vw",
        }}
      >
        <Grid item xl={12} xs={12}>
          <Typography variant="h4">
            Search results for: {query[0].toUpperCase() + query.slice(1)}
          </Typography>
        </Grid>
        {cardList}
      </Grid>
    </Layout>
  );
}

export const getServerSideProps = async (context) => {
  const searchParams = context.query.query;
  const res = await pokemon.card.where({ q: `name:"${searchParams}*"` });
  return { props: { res } };
};

export default Search;
