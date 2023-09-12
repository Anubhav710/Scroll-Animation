"use client"
import React, { useLayoutEffect, useRef } from "react"
import "@/app/globals.css"
import Image from "next/image"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export default function Index() {
  const background = useRef(null)
  const introImage = useRef(null)

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: true,
        start: "top",
        end: "+=500px",
      },
    })

    timeline
      .from(background.current, { clipPath: `inset(15%)` })
      .to(introImage.current, { height: "200px" }, 0)
  }, [])

  return (
    <div className="relative w-[100%] flex justify-center">
      <div
        className="w-[100%] h-[140vh] absolute brightness-[60%]"
        ref={background}
      >
        <Image
          src={"/images/background.jpeg"}
          fill={true}
          alt="background image"
          priority={true}
          className="bg-cover"
        />
      </div>
      <div className="flex justify-center relative mt-[40vh]   items-center">
        <div
          ref={introImage}
          data-scroll
          data-scroll-speed="0.3"
          className="brightness-[70%] w-[350px] h-[475px] absolute"
        >
          <Image
            src={"/images/intro.png"}
            alt="intro image"
            fill={true}
            priority={true}
            className="bg-cover object-top"
          />
        </div>
        <h1
          data-scroll
          data-scroll-speed="0.7"
          className="text-white text-[7vw] z-3 text-center whitespace-nowrap"
        >
          SMOOTH SCROLL
        </h1>
      </div>
    </div>
  )
}
