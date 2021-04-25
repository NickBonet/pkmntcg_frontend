import pokemon from "pokemontcgsdk";
import { Grid, Typography } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { useRouter } from "next/router";
import Head from "next/head";
import { isMobile } from "../helpers";
import { buildCardList } from "../logic/searchLogic";
import { motion } from "framer-motion";

// Styling options for search result animations
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function Search({ res }) {
  const router = useRouter();
  const theme = useTheme();
  const query = router.query.query;
  const cardList = buildCardList(res, theme);

  return (
    <div>
      <Head>
        <title>PTCG Tracker | Search</title>
      </Head>
      <motion.div variants={container} initial="hidden" animate="show">
        <Grid
          container
          align="center"
          justify="center"
          spacing={2}
          style={{
            paddingLeft: isMobile(theme) ? "4vw" : "10vw",
            paddingRight: isMobile(theme) ? "2vw" : "8vw",
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
      </motion.div>
    </div>
  );
}

export const getServerSideProps = async (context) => {
  try {
    const searchParams = context.query.query;
    const res = await pokemon.card.where({ q: `name:"${searchParams}*"` });
    if (res.data.length === undefined || searchParams.length == 0) {
      return { notFound: true };
    } else {
      return { props: { res } };
    }
  } catch (err) {
    return { notFound: true };
  }
};
