import React from "react";
import s from "./Label.module.scss";

export type LabelProps = { name: string };

const Label: React.FC<LabelProps> = ({ name }) => {
	return (
		<div className={s.labelContainer}>
			<span className={s.text}>{name}</span>
		</div>
	);
};

export default Label;
