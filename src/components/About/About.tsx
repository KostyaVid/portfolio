import Image from "next/image";
import Link from "next/link";
import React from "react";
import s from "./About.module.scss";

const About = () => {
	return (
		<section className={"container " + s.about}>
			<div className="sectionContainer">
				<div className={s.imageContainer}>
					<Image
						className={s.photo}
						alt="Konstantin Vidyakin"
						src="/img/I.webp"
						priority
						fill
						sizes="(max-width: 768px) 100vw, (max-width: 996px) 45vw, 40vw"
					/>
					<div aria-hidden className="blueFilter"></div>
				</div>
				<div className="containerText">
					<h2 id="aboutID" className={s.title}>
						About me
					</h2>
					<p>
						An inquisitive Front-end developer, skilled in
						leadership, seeking to leverage solid development skills
						with focus on quality, security and availability.
					</p>
					<Link
						className={s.linkCV}
						href="https://career.habr.com/constat"
						target="_blank"
					>
						Go to CV
					</Link>
				</div>
			</div>
		</section>
	);
};

export default About;
