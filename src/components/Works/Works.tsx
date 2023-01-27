import React, { useState } from "react";
import Card from "../Card/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectFade } from "swiper";
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/css/effect-fade";
import s from "./Works.module.scss";
import { PaginationOptions } from "swiper/types";

const Works = () => {
	const [swiperRef, setSwiperRef] = useState<any | null>(null);
	const handleClickNext = () => {
		swiperRef.slideNext(1000);
	};
	const pagination: PaginationOptions = {
		clickable: true,
	};
	return (
		<section id="WorksID" className={"container " + s.works}>
			<Swiper
				onSwiper={setSwiperRef}
				pagination={pagination}
				loop={true}
				effect={"fade"}
				fadeEffect={{ crossFade: true }}
				modules={[EffectFade, Pagination]}
				className="mySwiper"
			>
				<SwiperSlide>
					<Card
						img="/img/shiba.webp"
						title="SpiderShiba Inu"
						description="Competitive layout of a website dedicated to NFT tokens."
						urlWebsite="https://spider-shiba-inu.vercel.app/"
						labels={[
							{ name: "ReactJS" },
							{ name: "Framer-motion" },
							{ name: "Responsive" },
						]}
						onClickNext={handleClickNext}
					/>
				</SwiperSlide>
				<SwiperSlide>
					<Card
						img="/img/krepair.webp"
						title="KRepair"
						description="Multi-page website of the service center for the repair of equipment."
						urlWebsite="https://kr-epair.vercel.app/home"
						labels={[{ name: "ReactJS" }, { name: "Responsive" }]}
						onClickNext={handleClickNext}
					/>
				</SwiperSlide>
			</Swiper>
		</section>
	);
};

export default Works;
