import Head from "next/head"

const IndexPage = () => {
  return (
    <div>
      <Head>
        <title>Boa Next Project</title>
        <meta name="description" content="next app" />
        <link rel="icon" href="/favicon.ico" />

        <h1 className="text-3xl font-bold bg-green-600">Best Of Africa</h1>
      </Head>
    </div>
  )
}

export default IndexPage