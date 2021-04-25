import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import { isMobile } from "../helpers";
import { motion } from "framer-motion";
import { Grid } from "@material-ui/core";

// Styling for image hover effect on cards
const useStyles = makeStyles(() => ({
  imgHover: {
    transition: "transform .2s",
    "&:hover": {
      transform: "scale(1.05)",
      cursor: "pointer",
    },
  },
}));

// Framer Motion animation styling for cards
const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export function buildCardList(res, theme) {
  const classes = useStyles();
  const cardList = [];
  const cardWidth = 246;
  const cardHeight = 342;

  // Build card grid array for the page depending on results.
  for (var i = 0; i < res.data.length; i++) {
    cardList.push(
      <Grid
        item
        key={i}
        xs={isMobile(theme) ? 6 : false}
        sm={isMobile(theme) ? 4 : false}
      >
        <Link href={`/card/${res.data[i].id}`}>
          <motion.img
            variants={item}
            src={res.data[i].images.small}
            width={isMobile(theme) ? cardWidth * 0.8 : cardWidth}
            height={isMobile(theme) ? cardHeight * 0.8 : cardHeight}
            className={classes.imgHover}
          />
        </Link>
      </Grid>
    );
  }
  return cardList;
}
