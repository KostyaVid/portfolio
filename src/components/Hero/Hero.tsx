import Image from "next/image";
import Link from "next/link";
import React from "react";
import s from "./Hero.module.scss";

const Hero = () => {
	return (
		<section className={"container " + s.hero}>
			<h1 className={s.title}>KostyaVid</h1>
			<h2 className={s.subtitle}>Front-end Developer</h2>
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
