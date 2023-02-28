import React, { useState } from "react";
import Card from "../Card/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectFade } from "swiper";
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/css/effect-fade";
import s from "./Works.module.scss";
import { PaginationOptions } from "swiper/types";
import gsap from "gsap";

const Works = () => {
  const [swiperRef, setSwiperRef] = useState<any | null>(null);
  const timeLine = gsap.timeline();
  let activeButton = true;
  const handleClickNext = () => {
    if (activeButton) {
      timeLine.to(".Arrows", { x: 60 }).fromTo(".Arrows", { x: -60 }, { x: 0 });
      swiperRef.slideNext(1000);
      activeButton = false;
      setTimeout(() => {
        activeButton = true;
      }, 1000);
    }
  };
  const pagination: PaginationOptions = {
    clickable: true,
  };
  return (
    <section id="WorksID" className={"container " + s.works}>
      <div className={s.background} aria-hidden></div>
      <h2 className={s.title}>Works</h2>
      <Swiper
        onSwiper={setSwiperRef}
        pagination={pagination}
        loop={true}
        effect={"fade"}
        fadeEffect={{ crossFade: true }}
        modules={[EffectFade, Pagination]}
      >
        <SwiperSlide>
          <Card
            img="/img/inu.webp"
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
            img="/img/trident.webp"
            title="trident"
            description="Multi-page website of the houses shop."
            urlWebsite="https://trident-gamma.vercel.app"
            labels={[
              { name: "HTML" },
              { name: "SCSS" },
              { name: "JavaScript" },
              { name: "Responsive" },
            ]}
            onClickNext={handleClickNext}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            img="/img/krep.webp"
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
