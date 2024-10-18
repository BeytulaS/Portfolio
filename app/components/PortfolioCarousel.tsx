"use client";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import HoverCheck from "./HoverCheck";

export default function PortfolioCarousel() {
  const items = [
    {
      id: 1,
      name: "top bikini",
      nameColor: "text-pink-600",
      content: "Item 1",
      bg: "bg-pink-50",
      image: "/portfolio/topbikini-grid.webp",
      headline: "Ecommerce store from scratch",
      description:
        "A fully custom-built ecommerce platform for a swimwear brand, leveraging Next.js for fast performance and Supabase for seamless backend operations. This project includes product listings, a shopping cart, and custom payment integration.",
    },
    {
      id: 2,
      name: "bevelo web",
      nameColor: "text-blue-600",
      content: "Item 2",
      bg: "bg-blue-50",
      image: "/portfolio/bevelo-grid.webp",
      headline: "Web design agency website",
      description:
        "The official website for my digital agency, Bevelo Web, created to showcase services, previous projects, and client testimonials. Built with Next.js for fast, responsive performance and optimized with Tailwind CSS.",
    },
    {
      id: 3,
      name: "toraban",
      nameColor: "text-orange-600",
      content: "Item 3",
      bg: "bg-orange-400/20",
      image: "/portfolio/toraban-grid.webp",
      headline: "web app",
      description:
        "A functional and intuitive Kanban board web application named Toraban. Developed with React for smooth drag-and-drop task management, and Supabase to handle real-time data synchronization. Ideal for task tracking and project management.",
    },
    {
      id: 4,
      name: "this portfolio",
      nameColor: "text-yellow-600",
      content: "my portfolio",
      bg: "bg-yellow-50",
      image: "/portfolio/topbikini-grid.webp",
      headline: "Personal portfolio website",
      description:
        "A personal portfolio designed to present my projects, skills, and professional background. Built with Next.js and styled using Tailwind CSS to deliver a clean, modern, and responsive user experience.",
    },
  ];

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="select-none mt-8 flex flex-col gap-2 items-center justify-center"
    >
      <HoverCheck hoverType="carousel">
        <CarouselContent className="max-w-[100vw]">
          {items.map((item) => (
            <CarouselItem key={item.id} className=" md:basis-1/2">
              <Card className="group border-none shadow-none rounded-none bg-transparen">
                <CardContent className="flex flex-col p-0">
                  <div className={`${item.bg}`}>
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={740}
                      height={460}
                      className="max-w-full max-h-full"
                    />
                  </div>
                  <div className="">
                    <p className={`pt-1 uppercase ${item.nameColor}`}>
                      {item.name}
                    </p>
                    <h4 className="font-thunderLc uppercase text-2xl lg:text-4xl py-1">
                      {item.headline}
                    </h4>
                    <p className="opacity-60 transition-opacity duration-300 group-hover:opacity-100 text-sm md:text-base">
                      {item.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </HoverCheck>
      <div className="mt-4 space-x-2">
        <CarouselPrevious className="shrink-0 border-0 hover:border shadow-none bg-transparen" />

        <CarouselNext className="shrink-0 border-0 hover:border shadow-none bg-transparen" />
      </div>
    </Carousel>
  );
}

function Card1({ item }: { item: { content: number } }) {
  return (
    <Card>
      <CardContent className="flex aspect-square items-center justify-center p-6">
        <span className="text-3xl font-semibold">{item.content}</span>
      </CardContent>
    </Card>
  );
}

function Card2() {
  return (
    <div className="grid grid-cols-1 grid-rows-2 h-full aspect-square hover:border border-neutral-950">
      <div className="bg-pink-100 w-full h-full"></div>
      <div className="bg-neutral-100 font-sans text-lg lg:text-2xl py-1 px-2">
        <p>Designed and developed a full fledged online store from scratch</p>
      </div>
    </div>
  );
}

function Card3() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 p-8 h-full justify-between">
      <div>
        <p>Designed and developed a full fledged online store from scratch</p>
      </div>
      <Image
        src="/bikini-mockup2.webp"
        alt="Portfolio 1"
        width={720}
        height={620}
        placeholder="blur"
        blurDataURL="/portfolio/1.jpg"
        className="object-cover"
      />
    </div>
  );
}
