"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { Medal, Rocket, Target, Trophy } from "lucide-react"
import Image from "next/image"

import {
  CardTransformed,
  CardsContainer,
  ContainerScroll,
  ReviewStars,
} from "@/components/ui/animated-cards-stack"
import { cn } from "@/lib/utils"

const TESTIMONIALS = [
  {
    id: "testimonial-3",
    name: "James Scott",
    profession: "Frontend Developer",
    rating: 5,
    description:
      "Their innovative solutions and quick turnaround made our collab incredibly successful. Highly recommended!",
    avatarUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&w=600&h=600&q=80",
  },
  {
    id: "testimonial-1",
    name: "Jessica Harper",
    profession: "Web Designer",
    rating: 4.5,
    description:
      "The attention to detail and user experience in their work is exceptional. I'm thoroughly impressed.",
    avatarUrl:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=facearea&w=600&h=600&q=80",
  },
  {
    id: "testimonial-2",
    name: "Lisa Monroe",
    profession: "UX Designer",
    rating: 5,
    description:
      "Working with them was a game-changer. Their expertise and professionalism exceeded expectations.",
    avatarUrl:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=facearea&w=600&h=600&q=80",
  },
  {
    id: "testimonial-4",
    name: "Jane Doe",
    profession: "Product Designer",
    rating: 4.5,
    description:
      "The quality of work and communication throughout the project was outstanding. They delivered exactly what we needed.",
    avatarUrl:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=facearea&w=600&h=600&q=80",
  },
]

const ANIM_IMAGES = [
  "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1503342250614-ca4407868a5b?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
]

function getSectionClass(theme: string | undefined) {
  return theme === "dark"
    ? "border border-white/10 bg-gradient-to-b from-zinc-950 via-zinc-900 to-black text-zinc-100 shadow-[0_35px_120px_-70px_rgba(0,0,0,0.9)]"
    : "border border-slate-200/80 bg-gradient-to-b from-white via-slate-50 to-white text-slate-900 shadow-[0_35px_120px_-60px_rgba(15,23,42,0.9)]"
}

function getReviewStarsClass(theme: string | undefined) {
  return theme === "dark" ? "text-primary" : "text-teal-500"
}

function getTextClass(theme: string | undefined) {
  return theme === "dark" ? "text-zinc-200" : "text-slate-600"
}

function getAvatarClass(theme: string | undefined) {
  return theme === "dark"
    ? "!size-12 border border-stone-700"
    : "!size-12 border border-stone-300"
}

function getCardVariant(theme: string | undefined) {
  return theme === "dark" ? "dark" : "light"
}

export function TestimonialsVariant() {
  const { theme } = useTheme()
  const [erroredAvatars, setErroredAvatars] = React.useState<Record<string, boolean>>({})

  return (
    <section
      className={cn(
        "relative mx-auto w-full max-w-6xl rounded-[40px] px-6 py-14 sm:px-10",
        getSectionClass(theme),
      )}
    >
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-[0.65rem] uppercase tracking-[0.45em] text-muted-foreground">
          Testimonials
        </p>
        <h3 className="text-4xl font-semibold">Signals from teams</h3>
        <p className="mt-3 text-sm text-muted-foreground opacity-80 sm:text-base">
          Stories from founders, product leads, and creatives who shipped with us
          week over week.
        </p>
      </div>
      <ContainerScroll className="mx-auto mt-12 h-[220vh] max-w-xl">
        <div className="sticky left-0 top-0 flex h-svh w-full items-center justify-center py-8">
          <CardsContainer className="size-full h-[430px] w-full max-w-sm">
            {TESTIMONIALS.map((testimonial, index) => (
              <CardTransformed
                arrayLength={TESTIMONIALS.length}
                key={testimonial.id}
                variant={getCardVariant(theme)}
                index={index + 2}
                role="article"
                aria-labelledby={`card-${testimonial.id}-title`}
                aria-describedby={`card-${testimonial.id}-content`}
              >
                <div className="flex flex-col items-center space-y-5 text-center">
                  <ReviewStars
                    className={getReviewStarsClass(theme)}
                    rating={testimonial.rating}
                  />
                  <div
                    className={cn(
                      "mx-auto w-4/5 text-balance text-base sm:text-lg",
                      getTextClass(theme),
                    )}
                  >
                    <blockquote cite="#" id={`card-${testimonial.id}-content`}>
                      {testimonial.description}
                    </blockquote>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div
                    className={cn(
                      "relative flex h-12 w-12 shrink-0 overflow-hidden rounded-full",
                      getAvatarClass(theme),
                    )}
                  >
                    {erroredAvatars[testimonial.id] ? (
                      <span className="flex h-full w-full items-center justify-center text-sm font-semibold text-slate-600">
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    ) : (
                      <Image
                        src={testimonial.avatarUrl}
                        alt={`Portrait of ${testimonial.name}`}
                        fill
                        sizes="48px"
                        className="object-cover"
                        onError={() =>
                          setErroredAvatars((prev) => ({
                            ...prev,
                            [testimonial.id]: true,
                          }))
                        }
                      />
                    )}
                  </div>
                  <div>
                    <span
                      id={`card-${testimonial.id}-title`}
                      className="block text-lg font-semibold tracking-tight md:text-xl"
                    >
                      {testimonial.name}
                    </span>
                    <span className="block text-sm text-muted-foreground opacity-80">
                      {testimonial.profession}
                    </span>
                  </div>
                </div>
              </CardTransformed>
            ))}
          </CardsContainer>
        </div>
      </ContainerScroll>
    </section>
  )
}

export const AwardsVariant = () => {
  const awards = [
    {
      id: "awwwards",
      title: "Site of the Day",
      subtitle: "Awwwards",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus consequatur reprehenderit.",
      icon: Trophy,
    },
    {
      id: "performance",
      title: "100% Performance Score",
      subtitle: "Performance",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus consequatur reprehenderit.",
      icon: Rocket,
    },
    {
      id: "css",
      title: "Honorable Mention",
      subtitle: "CSS Design Awards",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus consequatur reprehenderit.",
      icon: Target,
    },
    {
      id: "creative",
      title: "Most Creative Design",
      subtitle: "Awwwards",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus consequatur reprehenderit.",
      icon: Medal,
    },
  ]

  return (
    <section className="rounded-[40px] bg-accent px-8 py-12">
      <div>
        <h2 className="text-center text-4xl font-semibold">Recognitions</h2>
        <p className="mx-auto mt-2 max-w-lg text-center text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          consequatur reprehenderit.
        </p>
      </div>
      <ContainerScroll className="container h-[300vh] ">
        <div className="sticky left-0 top-0 h-svh w-full py-12">
          <CardsContainer className="mx-auto size-full h-72 w-[440px]">
            {awards.map((award, index) => {
              const Icon = award.icon
              const backgroundClasses = [
                "bg-blue-600/80",
                "bg-orange-600/80",
                "bg-cyan-600/80",
                "bg-violet-600/80",
              ]
              return (
                <CardTransformed
                  key={award.id}
                  className={cn(
                    "items-start justify-evenly border-none text-secondary backdrop-blur-md",
                    backgroundClasses[index % backgroundClasses.length],
                  )}
                  arrayLength={awards.length}
                  index={index + 1}
                  variant="dark"
                >
                  <div className="flex flex-col items-start justify-start space-y-4 ">
                    <div className="flex size-16 items-center justify-center rounded-sm bg-secondary/50 text-2xl">
                      <Icon className="size-7" />
                    </div>
                    <div>
                      <h4 className="text-sm uppercase tracking-wide">
                        {award.subtitle}
                      </h4>
                      <h3 className="text-2xl font-bold">{award.title}</h3>
                    </div>
                  </div>
                  <p className=" text-secondary/80">{award.description}</p>
                </CardTransformed>
              )
            })}
          </CardsContainer>
        </div>
      </ContainerScroll>
    </section>
  )
}

export const ImagesVariant = () => {
  return (
    <section className="rounded-[40px] bg-slate-900 px-8 py-12">
      <div>
        <h2 className="text-center text-4xl font-semibold">
          Try our AI Fantázomai
        </h2>
        <p className="mx-auto mt-2 max-w-lg text-center text-sm text-slate-200">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          consequatur reprehenderit.
        </p>
      </div>
      <ContainerScroll className="container h-[300vh] ">
        <div className="sticky left-0 top-0 h-svh w-full py-12">
          <CardsContainer className="mx-auto size-full h-[420px] w-[320px]">
            {ANIM_IMAGES.map((imageUrl, index) => (
              <CardTransformed
                arrayLength={ANIM_IMAGES.length}
                key={index}
                index={index + 2}
                variant="dark"
                className="overflow-hidden !rounded-sm !p-0"
              >
                <Image
                  src={imageUrl}
                  alt="featured inspiration"
                  className="size-full object-cover"
                  fill
                  sizes="320px"
                />
              </CardTransformed>
            ))}
          </CardsContainer>
        </div>
      </ContainerScroll>
    </section>
  )
}
