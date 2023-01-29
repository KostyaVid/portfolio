import Head from "next/head";
import { League_Spartan } from "@next/font/google";
import cn from "classnames";
import s from "@/styles/Home.module.scss";
import Header from "@/src/components/Header/Header";
import Hero from "@/src/components/Hero/Hero";
import Footer from "@/src/components/Footer/Footer";
import About from "@/src/components/About/About";
import Skills from "@/src/components/Skills/Skills";
import Works from "@/src/components/Works/Works";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import TextPlugin from "gsap/TextPlugin";

const spartan = League_Spartan({ subsets: ["latin"] });

export default function Home() {
	gsap.registerPlugin(ScrollTrigger, TextPlugin);
	return (
		<>
			<Head>
				<title>Portfolio - Konstantin Vidyakin</title>
				<meta name="description" content="Portfolio by Konstantin Vidyakin" />
				<meta property="og:title" content="Portfolio by Konstantin Vidyakin" />
				<meta
					property="og:description"
					content="Portfolio of a react developer with completed examples of sites. By Konstantin Vidyakin"
				/>
				<meta property="og:type" content="website" />
				<meta property="og:locale" content="en_EN" />
				<meta
					property="og:url"
					content="https://portfolio-xi-six-88.vercel.app"
				/>
				<meta property="og:image" content="/img/OG.png" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="manifest" href="/manifest.json" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className={cn(s.container, spartan.className)}>
				<Header />
				<div className={s.heroBackground}></div>
				<main>
					<Hero />
					<About />
					<Skills />
					<Works />
				</main>
				<Footer />
			</div>
		</>
	);
}
