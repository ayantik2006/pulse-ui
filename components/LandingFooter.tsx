import Image from "next/image";
import Link from "next/link";

function LandingFooter() {
  return (
    <footer className="bg-neutral-950 border-t border-[#1F2937] text-gray-400 mt-20 w-full">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <Link href={"/"} className="flex items-center gap-2">
            <Image src="/logo.png" height={38} width={38} alt="logo" />
            <h2 className="text-white text-xl font-semibold">Pulse UI</h2>
          </Link>

          <p className="mt-2 text-sm text-gray-500">
            Build modern interfaces faster with clean and reusable components.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-white font-medium mb-3">Resources</h3>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="hover:text-white transition">
                Docs
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition">
                Components
              </Link>
            </li>
            <li>
              <Link href="https://github.com/ayantik2006/pulse-ui" className="hover:text-white transition">
                GitHub
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-medium mb-3">More</h3>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="hover:text-white transition">
                License
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition">
                Contribute
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#1F2937] text-center text-sm py-4 text-gray-500">
        © {new Date().getFullYear()} Pulse UI. Built by DSC NIT Rourkela
      </div>
    </footer>
  );
}

export default LandingFooter;
