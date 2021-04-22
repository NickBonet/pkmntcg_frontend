import pokemon from "pokemontcgsdk";
import Layout from "../components/layout";
import { Grid, Typography } from "@material-ui/core";
import { useRouter } from "next/router";
import Head from "next/head";

function Search({ res }) {
  const router = useRouter();
  const query = router.query.query;
  const cardList = [];

  for (var i = 0; i < res.data.length; i++) {
    cardList.push(
      <Grid item display="flex" align="center">
        <img src={res.data[i].images.small} />
      </Grid>
    );
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
          paddingLeft: "3vw",
          paddingRight: "2vw",
          paddingTop: "2vh",
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
