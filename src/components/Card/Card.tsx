import Image from "next/image";
import Link from "next/link";
import React from "react";
import Label, { LabelProps } from "../Label/Label";
import s from "./Card.module.scss";

type CardProps = {
	img: string;
	title: string;
	description: string;
	urlWebsite: string;
	labels: LabelProps[];
	onClickNext: () => void;
};

const Card: React.FC<CardProps> = ({
	img,
	title,
	description,
	urlWebsite,
	labels,
	onClickNext,
}) => {
	return (
		<section className={s.card}>
			<div className="sectionContainer">
				<div className={s.imageContainer}>
					<Image
						className={s.photo}
						alt={title}
						src={img}
						priority
						fill
						sizes="(max-width: 768px) 100vw, (max-width: 996px) 45vw, 40vw"
					/>
					<div aria-hidden className="blueFilter"></div>
					<button className={s.nextSlide} aria-label="To next work" onClick={onClickNext}>
						<svg
							className="Arrows"
							width="24"
							height="18"
							viewBox="0 0 24 18"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M18.255 10.5L12.885 15.885L15 18L24 9L15 0L12.885 2.115L18.255 7.5H0V10.5H18.255Z"
								fill="white"
							/>
						</svg>
					</button>
				</div>
				<div className={"containerText " + s.containerText}>
					<h2 className={s.title}>
						{title}
					</h2>
					<p>{description}</p>
					<div className={s.labels}>
						{labels.map((label, ind) => (
							<Label key={ind + "id"} name={label.name} />
						))}
					</div>
					<Link className="linkCV" href={urlWebsite} target="_blank">
						Go to Vercel
					</Link>
				</div>
			</div>
		</section>
	);
};
export default Card;
