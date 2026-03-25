import {
  Bolt,
  FilePenLine,
  TabletSmartphone,
  TvMinimalPlay,
  Zap,
} from "lucide-react";

function Features() {
  return (
    <div className="flex flex-wrap items-center justify-center text-white gap-4 mb-20 mx-10 max-w-[40rem]">
      <div className="flex flex-col gap-4 justify-center p-6 max-w-60 duration-200 bg-neutral-900/60 backdrop-blur-xl border border-white/10 shadow-lg rounded-2xl group bg-gradient-to-r from-white/5 via-white/10 to-white/5 ">
        <div className="flex gap-3 items-center">
          <Zap className="group-hover:scale-130 duration-300 w-5 h-5 text-white/80"  />
          <h1 className="text-lg font-semibold">Lightning Fast</h1>
        </div>
        <p className="text-neutral-300 text-sm">
          Optimized components with minimal bundle size.
        </p>
      </div>
      <div className="flex flex-col gap-4 justify-center p-6 max-w-64 duration-200 bg-neutral-900/60 backdrop-blur-xl border border-white/10 shadow-lg rounded-2xl group bg-gradient-to-r from-white/5 via-white/10 to-white/5">
        <div className="flex gap-3 items-center">
          <FilePenLine className="group-hover:scale-130 duration-300 w-5 h-5 text-white/80" />
          <h1 className="text-lg font-semibold">Fully Customizable</h1>
        </div>
        <p className="text-neutral-300 text-sm">
          Easily adapt styles using Tailwind and props.
        </p>
      </div>
      <div className="flex flex-col gap-4 justify-center p-6 max-w-64 duration-200 bg-neutral-900/60 backdrop-blur-xl border border-white/10 shadow-lg rounded-2xl group bg-gradient-to-r from-white/5 via-white/10 to-white/5">
        <div className="flex gap-3 items-center">
          <TvMinimalPlay className="group-hover:scale-130 duration-300 w-5 h-5 text-white/80" />
          <h1 className="text-lg font-semibold">Plug & Play</h1>
        </div>
        <p className="text-neutral-300 text-sm">
          Drop components into your project with zero setup.
        </p>
      </div>
      <div className="flex flex-col gap-4 justify-center p-6 max-w-73 h-35 duration-200 bg-neutral-900/60 backdrop-blur-xl border border-white/10 shadow-lg rounded-2xl group bg-gradient-to-r from-white/5 via-white/10 to-white/5">
        <div className="flex gap-3 items-center">
          <TabletSmartphone className="group-hover:scale-130 duration-300 w-5 h-5 text-white/80" />
          <h1 className="text-lg font-semibold">Responsive by Default</h1>
        </div>
        <p className="text-neutral-300 text-sm">Works seamlessly across devices.</p>
      </div>
      <div className="flex flex-col gap-4 justify-center p-6 max-w-73 duration-200 bg-neutral-900/60 backdrop-blur-xl border border-white/10 shadow-lg rounded-2xl group bg-gradient-to-r from-white/5 via-white/10 to-white/5">
        <div className="flex gap-3 items-center">
          <Bolt className="group-hover:scale-130 duration-300 w-5 h-5 text-white/80" />
          <h1 className="text-lg font-semibold">Developer Friendly</h1>
        </div>
        <p className="text-neutral-300 text-sm">
          Clean APIs, easy to extend, and well-structured.
        </p>
      </div>
    </div>
  );
}

export default Features;
