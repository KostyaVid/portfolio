import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import s from "./Hero.module.scss";

const Hero = () => {
	useEffect(() => {
		const timeline = gsap.timeline({ repeat: -1, repeatDelay: 1, yoyo: true });
		timeline.to("." + s.subtitle, {
			duration: 2,
			text: {
				value: "Front-end Developer",
				delimiter: "",
			},
			ease: "none",
			delay: 1,
		});
	}, []);
	return (
		<section className={"container " + s.hero}>
			<h1 className={s.title}>KostyaVid</h1>
			<h2 className={s.subtitle}>_</h2>
			<div className={s.socialLinks}>
				<Link href="https://t.me/constat9" aria-label="Telegram">
					<Image
						src="img/icons/telegram.svg"
						width={36}
						height={36}
						aria-hidden
						alt="Telegrem"
					/>
				</Link>
				<Link href="https://github.com/KostyaVid" aria-label="GitHub">
					<Image
						src="img/icons/github.svg"
						width={36}
						height={36}
						aria-hidden
						alt="GitHub"
					/>
				</Link>
				<Link href="https://vk.com/constat9" aria-label="Vkontakte">
					<Image
						src="img/icons/vk.svg"
						width={36}
						height={36}
						aria-hidden
						alt="Vkontacte"
					/>
				</Link>
			</div>
		</section>
	);
};

export default Hero;
