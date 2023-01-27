import React, {
	FC,
	useCallback,
	useEffect,
	useLayoutEffect,
	useRef,
	useState,
} from "react";
import cn from "classnames";
import s from "./Header.module.scss";
import Link from "next/link";
import Image from "next/image";

type TopLink = { id: number; name: string; url: string };

const links: TopLink[] = [
	{ id: 0, name: "Home", url: "/#HomeID" },
	{ id: 1, name: "About", url: "/#AboutID" },
	{ id: 2, name: "Skills", url: "/#SkillsID" },
	{ id: 3, name: "Works", url: "/#WorksID" },
];

const Header: FC = () => {
	const [menuActive, setMenuActive] = useState(false);
	const [isMobile, setIsMobile] = useState(globalThis.innerWidth < 769);
	const menuRef = useRef<HTMLUListElement | null>(null);

	useLayoutEffect(() => {
		if (menuActive && isMobile) {
			document.querySelector("html")?.classList.add("scroll_hidden");
		} else {
			document.querySelector("html")?.classList.remove("scroll_hidden");
		}
	}, [menuActive, isMobile]);

	const handleClickOverlay = useCallback(() => {
		if (isMobile) setMenuActive(false);
	}, [isMobile]);

	useEffect(() => {
		const mql = window.matchMedia("(max-width:768px)");
		const resize = (e: MediaQueryListEvent) =>
			e.matches ? setIsMobile(true) : setIsMobile(false);

		mql.addEventListener("change", resize);
		return () => mql.removeEventListener("change", resize);
	}, []);

	useEffect(() => {
		let count = 0;
		const operateFocused = (e: KeyboardEvent) => {
			if (e.key === "Tab") {
				const focuses = Array.from(
					document.querySelectorAll<HTMLElement>("[data-focused-menu]")
				);
				e.preventDefault();
				if (e.shiftKey) {
					if (!count) {
						count = focuses.length - 1;
					} else {
						--count;
					}
				} else {
					if (count === focuses.length - 1) {
						count = 0;
					} else {
						++count;
					}
				}
				focuses[count]?.focus();
				e.stopPropagation();
			}
		};

		if (isMobile) {
			if (menuActive) window.addEventListener("keydown", operateFocused);
		}
		return () => window.removeEventListener("keydown", operateFocused);
	}, [isMobile, menuActive]);

	return (
		<header className={"container " + s.header} id="#HomeID">
			<Image
				className={s.clacks}
				width={180}
				height={134}
				priority
				src="/img/clacks.webp"
				alt=""
			/>
			<nav
				className={cn(s.menu__Container, { [s.openMenu]: menuActive })}
				onClick={handleClickOverlay}
			>
				<ul className={s.menu__List} ref={menuRef}>
					{links.map((link) => (
						<li key={link.id} className={s.menu_Item}>
							<Link
								href={link.url}
								className={cn(s.link, {
									[s.openMenuLink]: !menuActive,
								})}
								data-focused-menu
								tabIndex={0}
							>
								{link.name}
							</Link>
						</li>
					))}
				</ul>
			</nav>
			<button
				aria-label="Menu"
				className={s.menu__button}
				data-focused-menu
				onClick={() => {
					setMenuActive((val) => !val);
				}}
			>
				<div className={cn(s.navIcon, { [s.open]: menuActive })}>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
				</div>
			</button>
		</header>
	);
};

export default Header;
