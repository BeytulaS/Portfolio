import FooterReveal from "./FooterReveal";
import HoverCheck from "./HoverCheck";
import RevealSection from "./RevealSection";
import TextReveal from "./TextReveal";

export default function Footer() {
  return (
    <footer
      className="relative h-[700px] max-h-[85vh]  overflow-clip"
      style={{
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      }}
      id="contact"
    >
      <div className="fixed h-[700px] max-h-[85vh] w-full bottom-0 px-4 md:px-24 bg-charcoal">
        <div className="max-w-[1500px] mx-auto flex flex-col justify-center h-full">
          <h2 className="text-transparent text-shadow uppercase font-thunderSemibold text-5xl md:text-8xl lg:text-9xl overflow-clip">
            <FooterReveal delay={0.6}>
              <span>{"Let's work together"}</span>
            </FooterReveal>
          </h2>
          <div className="w-full border-y border-white py-8 flex flex-col lg:flex-row gap-8 lg:gap-24 mt-24">
            <div className="flex flex-col gap-2">
              <p className="text-white overflow-clip">
                <FooterReveal delay={0.2}>
                  <span>Email</span>
                </FooterReveal>
              </p>
              <a
                href="mailto:beytula.smail@gmail.com"
                className="text-white text-lg md:text-2xl font-sans overflow-clip"
              >
                <FooterReveal delay={0.2}>
                  <HoverCheck hoverType="button">
                    <span>beytula.smail@gmail.com</span>
                  </HoverCheck>
                </FooterReveal>
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-white overflow-clip">
                <FooterReveal delay={0.2}>
                  <span>Phone</span>
                </FooterReveal>
              </p>
              <a
                href="tel:+359 898 359 159"
                className="text-white text-lg md:text-2xl font-sans overflow-clip"
              >
                <FooterReveal delay={0.2}>
                  <HoverCheck hoverType="button">
                    <span>+359 898 359 159</span>
                  </HoverCheck>
                </FooterReveal>
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-white overflow-clip">
                <FooterReveal delay={0.2}>
                  <span>Socials</span>
                </FooterReveal>
              </p>
              <div className="text-white text-lg md:text-2xl font-sans flex gap-2 overflow-clip">
                <FooterReveal delay={0.2}>
                  <a
                    href="https://www.linkedin.com/in/beytula-smail-ab8560295/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://www.facebook.com/beytula.smail/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-3"
                  >
                    Facebook
                  </a>
                </FooterReveal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
