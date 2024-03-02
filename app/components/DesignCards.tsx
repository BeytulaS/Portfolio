import { IoLogoFigma } from "react-icons/io5";
import { SiAdobeillustrator, SiAdobephotoshop } from "react-icons/si";

export default function DesignCards() {
  return (
    <div className="flex gap-2 items-center flex-wrap">
      <div className="flex gap-1 items-center text-lg rounded-full  border-emerald-400 border-2 bg-neutral-900 px-2 py-1">
        <IoLogoFigma className="text-[24px]" />
        <h4>Figma</h4>
      </div>
      <div className="flex gap-1 items-center text-lg rounded-full  border-emerald-400 border-2 bg-neutral-900 px-2 py-1">
        <SiAdobephotoshop className="text-[24px]" />
        <h4>Photoshop</h4>
      </div>
      <div className="flex gap-1 items-center text-lg rounded-full  border-emerald-400 border-2 bg-neutral-900 px-2 py-1">
        <SiAdobeillustrator className="text-[24px]" />
        <h4>Illustrator</h4>
      </div>
    </div>
  );
}
