import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <h1 className="uppercase font-thunderSemibold text-6xl">Not found</h1>
      <p className="uppercase text-yellowBright font-thunderSemibold responsive-text-xl leading-none">
        <span>4</span>
        <span className="mt-4">0</span>
        <span>4</span>
      </p>
      <Link
        href="/"
        className="font-sans uppercase border border-white px-8 lg:px-12 py-4 hover:button-shadow transition duration-150"
      >
        Take me back
      </Link>
    </div>
  );
}
