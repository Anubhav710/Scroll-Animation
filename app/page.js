"use client"
import Intro from "@/components/Intro"
import Project from "@/components/Project"
import Description from "@/components/description"
import Image from "next/image"
import { useEffect } from "react"

export default function Home() {
  useEffect(() => {
    ;(async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default
      const locomotiveScroll = new LocomotiveScroll()
    })()
  }, [])
  return (
    <main className="w-full h-full">
      <Intro />
      <Description />
      <Project />
    </main>
  )
}
