import React from "react";
import cn from "classnames";
import s from "./ProgressBar.module.scss";

export type ProgressBarProps = {
	name: string;
	percent: number;
};

const ProgressBar: React.FC<ProgressBarProps> = ({ name, percent }) => {
	const styleDiagram = cn(s.progress, { [s.over_50]: percent >= 50 });
	let deg = (360 * percent) / 100 + 180;
	return (
		<article>
			<div role="figure" aria-label={`${name}'s value equals ${percent} percents`} className={styleDiagram}>
				<div className={[s.piece, s.left].join(" ")}></div>
				<div
					style={{ transform: `rotate(${deg}deg)` }}
					className={[s.piece, s.right].join(" ")}
				></div>
				<div className={s.text}>
					<div className={s.textContainer}>
						<b aria-hidden>{`${percent}%`}</b>
					</div>
				</div>
			</div>
			<h3 className={s.caption}>{name}</h3>
		</article>
	);
};
export default ProgressBar;
