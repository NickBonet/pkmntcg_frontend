import pokemon from "pokemontcgsdk";
import Layout from "../components/layout";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useRouter } from "next/router";
import Head from "next/head";
import { isMobile } from "../helpers";
import { motion } from "framer-motion";

const useStyles = makeStyles(() => ({
  imgHover: {
    transition: "transform .2s",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
}));

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export default function Search({ res }) {
  const classes = useStyles();
  const router = useRouter();
  const theme = useTheme();
  const query = router.query.query;

  const cardList = [];
  const cardWidth = 246;
  const cardHeight = 342;

  // Build card grid array for the page depending on results.
  for (var i = 0; i < res.data.length; i++) {
    cardList.push(
      <Grid
        item
        xs={isMobile(theme) ? 6 : false}
        sm={isMobile(theme) ? 4 : false}
      >
        <motion.img
          variants={item}
          src={res.data[i].images.small}
          width={isMobile(theme) ? cardWidth * 0.8 : cardWidth}
          height={isMobile(theme) ? cardHeight * 0.8 : cardHeight}
          className={classes.imgHover}
        />
      </Grid>
    );
  }

  return (
    <Layout>
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
    </Layout>
  );
}

export const getServerSideProps = async (context) => {
  const searchParams = context.query.query;
  const res = await pokemon.card.where({ q: `name:"${searchParams}*"` });
  return { props: { res } };
};
