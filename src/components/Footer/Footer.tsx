import Image from "next/image";
import Link from "next/link";
import React from "react";
import s from "./Footer.module.scss";

const Footer = () => {
	return (
		<footer className={s.footer}>
			<div className={"container " + s.footerContainer}>
				<h2>KostyaVid</h2>
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
				<div className={s.rights}>
					All Rights Reserved
					<Image
						src="/img/icons/copy.svg"
						alt="Copyright"
						width={18}
						height={18}
					/>
					2023 KostyaVid
				</div>
			</div>
		</footer>
	);
};

export default Footer;
