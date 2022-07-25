import Head from "next/head"
import Main from "../components/Main"
import Navbar from "../components/Navbar"

const Home = () => {
	return (
		<div>
			<Head>
				<title>Best of Africa</title>
				<meta name="description" content="An African platform for reviews, deals and advice" />
				<link rel="icon" href="/pro.ico" />
			</Head>
			<Navbar />
			<Main />
		</div>
	)
}
export default Home