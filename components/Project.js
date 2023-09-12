import React, { useState, useEffect, useRef } from "react"
import Image from "next/image"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger" // Import ScrollTrigger from the correct source

const projects = [
  {
    title: "Salar de Atacama",
    src: "salar_de_atacama.jpg",
  },
  {
    title: "Valle de la luna",
    src: "valle_de_la_muerte.jpeg",
  },
  {
    title: "Miscanti Lake",
    src: "miscani_lake.jpeg",
  },
  {
    title: "Miniques Lagoons",
    src: "miniques_lagoon.jpg",
  },
]

const Project = () => {
  const [selectedProject, setSelectedProject] = useState(0)

  const imageContainer = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    ScrollTrigger.create({
      trigger: imageContainer.current,
      start: "-=100px",
      end: "bottom top",
      pin: true,
    })
  }, [])

  return (
    <div className="relative text-white mt-[25vh] p-[10%]">
      <div className="flex h-[70vh] justify-between gap-[5%]">
        <div ref={imageContainer} className="relative h-[100%] w-[40%]">
          <Image
            src={`/images/${projects[selectedProject].src}`}
            fill={true}
            alt="project image"
            priority={true}
            className="bg-cover"
          />
        </div>
        <div className="flex h-[100%] w-[20%] text-[1.6vw] last-of-type:items-end last-of-type:text-[1vw]">
          <p>
            The flora is characterized by the presence of high elevation
            wetland, as well as yellow straw, broom sedge, tola de agua and tola
            amaia.
          </p>
        </div>
        <div className="flex h-[100%] w-[20%] text-[1.6vw] last-of-type:items-end last-of-type:text-[1vw]">
          <p>
            Some, like the southern viscacha, vicuña and Darwin's rhea, are
            classified as endangered species. Others, such as Andean goose,
            horned coot, Andean gull, puna tinamou and the three flamingo
            species inhabiting in Chile (Andean flamingo, Chilean flamingo, and
            James's flamingo) are considered vulnerable.
          </p>
        </div>
      </div>
      <div className="flex flex-col relative mt-[20vh]">
        {projects.map((project, index) => (
          <div
            key={index}
            onMouseOver={() => {
              setSelectedProject(index)
            }}
            className="w-[100%] text-white uppercase text-[3vw] border-b-[1px] border-solid border-white flex justify-end"
          >
            <h2
              className="m-0 mt-[4vh] mb-[2vh] cursor-pointer"
              onMouseOver={() => {
                setSelectedProject(index)
              }}
            >
              {project.title}
            </h2>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Project
