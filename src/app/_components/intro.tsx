import { CMS_NAME } from "@/lib/constants";

export function Intro() {
  return (
    <section className="mb-16 mt-16 flex flex-col items-center md:mb-12 md:flex-row md:justify-between">
      <h1 className="text-5xl font-bold leading-tight tracking-tighter md:pr-8 md:text-6xl">
        Homoiconic.
      </h1>
      <h4 className="mt-5 text-center text-lg md:pl-8 md:text-left">
        In computer programming, homoiconicity (from the Greek words homo-
        meaning "the same" and icon meaning "representation") is a property of
        some programming languages. A language is homoiconic if a program
        written in it can be manipulated as data using the language.
      </h4>
    </section>
  );
}
