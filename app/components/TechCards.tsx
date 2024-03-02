import {
  IoLogoCss3,
  IoLogoHtml5,
  IoLogoJavascript,
  IoLogoReact,
} from "react-icons/io5";
import {
  SiExpress,
  SiFirebase,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiSupabase,
  SiTailwindcss,
} from "react-icons/si";

export default function TechCards() {
  return (
    <div className="flex gap-2 items-center flex-wrap">
      <div className="flex gap-1 items-center text-lg rounded-full border-2  border-emerald-400 bg-neutral-900 px-2 py-1">
        <IoLogoJavascript className="text-[24px]" />
        <h4>JavaScript</h4>
      </div>
      <div className="flex gap-1 items-center text-lg rounded-full border-2 border-emerald-400 bg-neutral-900 px-2 py-1">
        <IoLogoHtml5 className="text-[24px]" />
        <h4>HTML</h4>
      </div>
      <div className="flex gap-1 items-center text-lg rounded-full border-2 border-emerald-400 bg-neutral-900 px-2 py-1">
        <IoLogoCss3 className="text-[24px]" />
        <h4>CSS</h4>
      </div>
      <div className="flex gap-1 items-center text-lg rounded-full border-2 border-emerald-400 bg-neutral-900 px-2 py-1">
        <IoLogoReact className="text-[24px]" />
        <h4>React</h4>
      </div>
      <div className="flex gap-1 items-center text-lg rounded-full border-2 border-emerald-400 bg-neutral-900 px-2 py-1">
        <SiNextdotjs className="text-[24px]" />
        <h4>Next.js</h4>
      </div>
      <div className="flex gap-1 items-center text-lg rounded-full border-2 border-emerald-400 bg-neutral-900 px-2 py-1">
        <SiTailwindcss className="text-[24px]" />
        <h4>Tailwind</h4>
      </div>
      <div className="flex gap-1 items-center text-lg rounded-full border-2 border-emerald-400 bg-neutral-900 px-2 py-1">
        <SiNodedotjs className="text-[24px]" />
        <h4>Node.js</h4>
      </div>
      <div className="flex gap-1 items-center text-lg rounded-full border-2 border-emerald-400 bg-neutral-900 px-2 py-1">
        <SiPostgresql className="text-[24px]" />
        <h4>PostgreSQL</h4>
      </div>
      <div className="flex gap-1 items-center text-lg rounded-full border-2 border-emerald-400 bg-neutral-900 px-2 py-1">
        <SiFirebase className="text-[24px]" />
        <h4>Firebase</h4>
      </div>
      <div className="flex gap-1 items-center text-lg rounded-full border-2 border-emerald-400 bg-neutral-900 px-2 py-1">
        <SiSupabase className="text-[24px]" />
        <h4>Supabase</h4>
      </div>
    </div>
  );
}
