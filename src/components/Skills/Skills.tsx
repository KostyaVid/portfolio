import Image from "next/image";
import React from "react";
import ProgressBar, { ProgressBarProps } from "../ProgressBar/ProgressBar";
import s from "./Skills.module.scss";

const skillsItems: Array<ProgressBarProps & { id: number }> = [
	{ id: 0, name: "HTML", percent: 95 },
	{ id: 1, name: "HTML", percent: 95 },
	{ id: 2, name: "HTML", percent: 95 },
	{ id: 3, name: "HTML", percent: 95 },
	{ id: 4, name: "HTML", percent: 95 },
	{ id: 5, name: "HTML", percent: 95 },
	{ id: 6, name: "HTML", percent: 95 },
	{ id: 7, name: "HTML", percent: 95 },
	{ id: 8, name: "HTML", percent: 95 },
];

const Skills = () => {
	return (
		<section className={"container " + s.skills}>
			<div className="sectionContainer">
				<div className="containerText">
					<h2 id="skillsID">Skills</h2>
					<p>
						I like to create differnt things, learn something new, improve
						knowledge and skills, enjoy it.
					</p>
					<div className={s.itemsContainer}>
						{skillsItems.map((item) => (
							<ProgressBar
								key={item.id}
								name={item.name}
								percent={item.percent}
							/>
						))}
					</div>
				</div>
				<div className={s.imageContainer}>
					<Image
						className={s.photo}
						alt="Laptop"
						src="/img/laptop.webp"
						priority
						fill
						sizes="(max-width: 768px) 100vw, (max-width: 996px) 45vw, 40vw"
					/>
					<div aria-hidden className="blueFilter"></div>
				</div>
			</div>
		</section>
	);
};

export default Skills;
