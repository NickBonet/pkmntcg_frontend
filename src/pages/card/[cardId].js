import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Head from "next/head";
import pokemon from "pokemontcgsdk";

export default function CardInfo({ res }) {
  return (
    <div>
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

        <img
          src={res.images.small}
          style={{
            borderRadius: "4%",
          }}
        />
      </Container>
    </div>
  );
}

export const getServerSideProps = async (context) => {
  try {
    const cardId = context.params.cardId;
    const res = await pokemon.card.find(cardId);
    if (cardId.length == 0) {
      return { notFound: true };
    } else {
      return { props: { res } };
    }
  } catch (err) {
    return { notFound: true };
  }
};
