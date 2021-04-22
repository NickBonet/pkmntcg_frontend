import pokemon from "pokemontcgsdk";
import Layout from "../components/layout";
import { Grid, Typography } from "@material-ui/core";
import { useRouter } from "next/router";
import Head from "next/head";

function Search({ res }) {
  const router = useRouter();
  const query = router.query.query;
  const cardList = [];
  var i;

  for (i = 0; i < res.data.length; i++) {
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
        <link rel="icon" href="/pokeball.svg" />
      </Head>
      <Grid
        container
        align="center"
        justify="center"
        spacing={2}
        style={{ minHeight: "90vh" }}
      >
        <Grid item container direction="column" display="flex">
          <Typography variant="h3">
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
  console.log(res.data.length);

  return { props: { res } };
};

export default Search;
