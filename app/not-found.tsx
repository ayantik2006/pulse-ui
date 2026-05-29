import MagneticButton from "@/components/MagneticButton";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center px-6">
      <p className="text-5xl mb-2">
        🤔
      </p>
      <h1 className="text-7xl font-bold">404</h1>

      <p className="text-muted-foreground mt-4 text-sm text-center">
        Looks like this page vanished into the void.
      </p>

      <Link
          href={"/explore"}
          className="h-fit p-1 border-blue-500 border-2 border-dashed cursor-pointer rounded-md w-48 [@media(max-width:581px)]:w-[78%] mt-5"
        >
          <MagneticButton className="text-sm bg-linear-to-b from-blue-700 to-blue-500 py-2 cursor-pointer font-semibold rounded-sm w-45  [@media(max-width:581px)]:w-full">
            <p>Explore Components</p>
          </MagneticButton>
        </Link>
    </div>
  );
}
