export default function Superheroes() {
  return (
    <div className="relative flex flex-col justify-center place-items-center min-h-screen">
      <h2 className="text-center font-heading m-10 text-6xl sm:text-7xl lg:text-8xl leading-[5rem] sm:leading-[7rem] lg:leading-[7rem] font-black	 ">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          Coming Soon
        </span>
        <span className="">⏳</span>
      </h2>
      <p className="text-2xl md:text-3xl px-6 max-w-3xl text-center m-5 text-slate-800 dark:text-slate-100 font-thin">
        The superheros haven&apos;t yet been declared so check back later! 👋
      </p>
    </div>
  );
}
