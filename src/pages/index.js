import { Typography, Container } from '@material-ui/core'
import Head from 'next/head'
import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout>
      <Container style={{textAlign: "center"}}>
        <Head>
          <title>TCG Card Search App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Typography variant="h1" align="center">
          Welcome to TCG Card Search!
        </Typography>
      </Container>
    </Layout>
  )
}
