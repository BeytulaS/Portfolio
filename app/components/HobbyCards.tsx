import { FaDumbbell, FaGamepad, FaMountain } from "react-icons/fa6";
import { TbChefHat } from "react-icons/tb";

export default function HobbyCards() {
  return (
    <div className="flex gap-2 items-center flex-wrap">
      <div className="flex gap-1 items-center text-lg rounded-full  border-emerald-400 border-2 bg-neutral-900 px-2 py-1">
        <FaDumbbell className="text-[24px]" />
        <h4>Fitness</h4>
      </div>
      <div className="flex gap-1 items-center text-lg rounded-full  border-emerald-400 border-2 bg-neutral-900 px-2 py-1">
        <FaGamepad className="text-[24px]" />
        <h4>Gaming</h4>
      </div>
      <div className="flex gap-1 items-center text-lg rounded-full  border-emerald-400 border-2 bg-neutral-900 px-2 py-1">
        <TbChefHat className="text-[24px]" />
        <h4>Cooking</h4>
      </div>
      <div className="flex gap-1 items-center text-lg rounded-full  border-emerald-400 border-2 bg-neutral-900 px-2 py-1">
        <FaMountain className="text-[24px]" />
        <h4>Hiking</h4>
      </div>
    </div>
  );
}
