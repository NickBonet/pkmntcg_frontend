import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    cursor: "pointer",
    "@media (hover: hover)": {
      "&:hover": {
        transition: "color .15s ease-in",
        color: "cornflowerblue",
      },
    },
  },
}));

export default function Layout({ children }) {
  const classes = useStyles();
  const router = useRouter();

  return (
    <div>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            color="inherit"
            className={classes.title}
            onClick={() => {
              router.push("/");
            }}
          >
            TCG Card Search
          </Typography>
        </Toolbar>
      </AppBar>
      <motion.div
        key={router.route}
        initial="pageInit"
        animate="pageAnim"
        variants={{
          pageInit: {
            opacity: 0,
          },
          pageAnim: {
            opacity: 1,
          },
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
