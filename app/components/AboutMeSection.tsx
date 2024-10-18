import ScrollOpacityReveal from "./ScrollOpacityReveal";
import TextReveal from "./TextReveal";

export default function AboutMe() {
  return (
    <section
      id="about"
      className=" w-screen min-h-screen bg-[#fafafa] px-4 md:px-24 text-charcoal"
    >
      <div className="max-w-[1500px]  mx-auto pt-[25vh] pb-[25vh]">
        <h2 className="text-6xl  font-thunderSemibold mb-24 overflow-clip">
          <TextReveal>
            <span>ABOUT ME</span>
          </TextReveal>
        </h2>
        <ScrollOpacityReveal
          text={
            "I combine creativity and technology to create visually captivating and performant user experiences."
          }
        />
      </div>
    </section>
  );
}
