import Image from "next/image";
import Link from "next/link";

function LandingFooter() {
  return (
    <footer className="bg-card border-t border-border text-muted-foreground mt-20 w-full">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <Link href={"/"} className="flex items-center gap-2">
            <Image src="/logo.png" height={38} width={38} alt="logo" />
            <h2 className="text-foreground text-xl font-semibold">Pulse UI</h2>
          </Link>

          <p className="mt-2 text-sm text-muted-foreground">
            Build modern interfaces faster with clean and reusable components.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-foreground font-medium mb-3">Resources</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/buttons" className="hover:text-foreground transition">
                Components
              </Link>
            </li>
            <li>
              <Link href="https://github.com/ayantik2006/pulse-ui" className="hover:text-foreground transition" target="_blank">
                GitHub
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-foreground font-medium mb-3">More</h3>
          <ul className="space-y-2">
            <li>
              <Link href="https://github.com/ayantik2006/pulse-ui/blob/main/LICENSE" className="hover:text-foreground transition" target="_blank">
                License
              </Link>
            </li>
            <li>
              <Link href="/feedback" className="hover:text-foreground transition">
                Feedback
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border text-center text-sm py-4 text-muted-foreground">
        &copy; {new Date().getFullYear()} Pulse UI. Built by Ayantik Sarkar
      </div>
    </footer>
  );
}

export default LandingFooter;
