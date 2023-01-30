import Image from "next/image";
import React from "react";
import ProgressBar, { ProgressBarProps } from "../ProgressBar/ProgressBar";
import s from "./Skills.module.scss";

const skillsItems: Array<ProgressBarProps & { id: number }> = [
	{ id: 0, name: "HTML", percent: 95 },
	{ id: 1, name: "CSS", percent: 85 },
	{ id: 2, name: "JavaScript", percent: 90 },
	{ id: 3, name: "TypeScript", percent: 80 },
	{ id: 4, name: "React", percent: 85 },
	{ id: 5, name: "Redux", percent: 85 },
];

const Skills = () => {
	return (
		<section className={"container " + s.skills}>
		<div className={s.background} aria-hidden></div>
			<div className="sectionContainer">
				<div className="containerText">
					<h2 id="SkillsID">Skills</h2>
					<p>
						I like to create different things, learn something new, improve
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
						className="imageMain"
						alt="Laptop"
						src="/img/laptop.webp"
						priority
						fill
						sizes="(max-width: 768px) 100vw, (max-width: 996px) 45vw, 40vw"
					/>
				</div>
			</div>
		</section>
	);
};

export default Skills;
