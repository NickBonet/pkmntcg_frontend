import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Head from 'next/head'
import pokemon from 'pokemontcgsdk'

function Test({ res }) {
    return (
      <Container maxWidth="xs" style={{textAlign: "center"}}>
        <Head>
          <title>Card View</title>
          <link rel="icon" href="/favicon.ico" />
        </Head> 

        <Typography variant="h3" align="center">
          TCG Card Page Example
        </Typography>

        <Typography variant="h5" align="center" color="grey">
          Card Name: {res.name}
          <br />
          Set: {res.set.name} <img src={res.set.images.symbol} width="10%" height="10%" />
          <br />
          {res.number}/{res.set.printedTotal} 
        </Typography>

        <img src={res.images.small} />
      </Container>
    )
}

export const getServerSideProps = async (context) => {
  const cardId = context.params.cardId
  const res = await pokemon.card.find(cardId)
  console.log(res)

  return { props: { res } }
}

export default Test
