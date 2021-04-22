import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Layout from "../../components/layout";
import Head from "next/head";
import pokemon from "pokemontcgsdk";

function CardInfo({ res }) {
  return (
    <Layout>
      <Container style={{ textAlign: "center" }}>
        <Head>
          <title>PTCG Tracker | Card View</title>
        </Head>

        <Typography variant="h3">TCG Card Page Example</Typography>

        <Typography variant="h5">
          Card Name: {res.name}
          <br />
          Set: {res.set.name}{" "}
          <img src={res.set.images.symbol} width="3%" height="3%" />
          <br />
          {res.number}/{res.set.printedTotal}
        </Typography>

        <img src={res.images.small} />
      </Container>
    </Layout>
  );
}

export const getServerSideProps = async (context) => {
  const cardId = context.params.cardId;
  const res = await pokemon.card.find(cardId);

  return { props: { res } };
};

export default CardInfo;
