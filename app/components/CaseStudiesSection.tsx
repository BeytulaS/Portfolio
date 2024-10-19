import RevealSection from "./RevealSection";
import PortfolioCarousel from "./PortfolioCarousel";
import CustomCursor from "./CustomCursor";
import TextReveal from "./TextReveal";
import Projects from "./Projects";

export default function CaseStudiesSection() {
  return (
    <section
      id="projects"
      className="relative w-screen bg-transparent overflow-auto"
    >
      <RevealSection>
        <div className=" w-full bg-[#fafafa] text-charcoal px-4 md:px-24 py-12 ">
          <div className="max-w-[1500px] mx-auto">
            <h2 className="font-thunderSemibold text-6xl  uppercase overflow-clip my-12">
              <TextReveal>
                <span>My Work</span>
              </TextReveal>
            </h2>

            <Projects />
          </div>
        </div>
      </RevealSection>
      <CustomCursor />
    </section>
  );
}
