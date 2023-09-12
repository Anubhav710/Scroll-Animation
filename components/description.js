"use client"
import React, { useEffect, useLayoutEffect, useRef } from "react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import gsap from "gsap"

const phrases = [
  "Los Flamencos National Reserve",
  "is a nature reserve located",
  "in the commune of San Pedro de Atacama",
  "The reserve covers a total area",
  "of 740 square kilometres (290 sq mi)",
]

const Description = () => {
  return (
    <div className="relative text-white text-[3vw] uppercase mt-[33vw] ml-[10vw] ">
      {phrases.map((phrase, index) => {
        return <AimatedText key={index}>{phrase}</AimatedText>
      })}
    </div>
  )
}

function AimatedText({ children }) {
  const text = useRef(null)

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.from(text.current, {
      scrollTrigger: {
        trigger: text.current,
        scrub: true,
        start: "0px bottom",
        end: "bottom+=400px bottom",
      },
      opacity: 0,
      left: "-200px",
      ease: "power3.Out",
    })
  }, [])
  return (
    <p ref={text} className="m-0 relative">
      {children}
    </p>
  )
}

export default Description