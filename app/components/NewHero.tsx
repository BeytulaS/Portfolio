import HoverCheck from "./HoverCheck";
import Image from "next/image";
import TextReveal from "./TextReveal";
import SlideInSide from "./SlideInSide";
import ProfilePic from "@/public/profile-pic-2.webp";

export default function NewHero() {
  return (
    <section
      id="hero"
      className=" overflow-hidden px-4 md:px-24 w-screen h-screen flex flex-col items-center justify-center -z-20"
    >
      <div className="flex flex-col md:flex-row md:gap-6 max-w-[1500px] md:justify-between w-full">
        <div className="flex flex-col justify-between">
          <h1 className="font-thunderSemibold uppercase text-5xl md:text-7xl 2xl:text-8xl text-shadow-charcoal">
            <div className="overflow-clip">
              <TextReveal>
                <span className="">Hello!</span>
              </TextReveal>
            </div>
            <div className="overflow-clip">
              <TextReveal>
                <span>I am Beytula Smail,</span>
              </TextReveal>
            </div>
            <div className="overflow-clip">
              <TextReveal>
                <span>a </span>
                <span className="text-yellowBright ">
                  frontend developer
                </span>{" "}
              </TextReveal>
            </div>
            <div className="overflow-clip">
              <TextReveal>
                <span>based in Bulgaria.</span>
              </TextReveal>
            </div>
          </h1>
          <SlideInSide element={"#heroButtons"} delay={0.5}>
            <div
              id="heroButtons"
              className="flex gap-4  md:gap-8 mt-8 md:mt-40"
            >
              <HoverCheck hoverType="button">
                <a
                  href="#contact"
                  className="py-4 px-8 md:px-12 bg-white border border-white text-black hover:button-shadow transition-all duration-150"
                >
                  CONTACT
                </a>
              </HoverCheck>
              <HoverCheck hoverType="button">
                <a
                  href="#projects"
                  className="py-4 px-8 md:px-12 border border-slate-800 bg-slate-800 hover:button-shadow transition-all duration-150"
                >
                  MY WORK
                </a>
              </HoverCheck>
            </div>
          </SlideInSide>
        </div>
        <SlideInSide
          element={"#profilePic"}
          direction="right"
          delay={0.5}
          toOpacity={0.7}
        >
          <div
            id="profilePic"
            className="max-md:fixed max-md:top-1/2  max-md:left-1/2  max-md:-translate-x-1/2  max-md:-translate-y-1/2  max-md:-z-10 relative  md:aspect-[4/5] md:basis-1/3 w-[300px] custom-shadow"
          >
            <Image
              src={ProfilePic}
              alt="Profile picture"
              width={400}
              height={500}
              placeholder="blur"
              className="object-cover w-full h-full opacity-80"
            />
          </div>
        </SlideInSide>
      </div>
    </section>
  );
}
