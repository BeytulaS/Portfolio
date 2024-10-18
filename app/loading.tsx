import { CgSpinnerTwoAlt } from "react-icons/cg";
import { FaSpinner } from "react-icons/fa";

export default function Loading() {
  return (
    <div className="w-screen h-screen bg-charcoal flex flex-col items-center justify-center">
      <CgSpinnerTwoAlt className="text-yellowBright text-8xl animate-spin" />
      <h1 className="uppercase text-yellowBright font-thunderSemibold text-4xl mt-4">
        Please wait
      </h1>
    </div>
  );
}
