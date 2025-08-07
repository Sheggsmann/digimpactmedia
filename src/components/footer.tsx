import styles from "@/styles";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={`${styles.paddingX} bg-[#000] py-16`}>
      <div className={`${styles.boxWidth} mx-auto`}>
        <div className="flex flex-col gap-y-16 md:flex-row justify-between">
          {/* Logo */}
          <div>
            <Link href="/">
              <span className="font-bold text-2xl text-[#377DFF]">
                DIGIMPACT
              </span>
            </Link>

            <h1 className="text-white font-extrabold text-3xl mt-4 leading-12">
              Let&apos;s work
              <br /> together
            </h1>
          </div>

          <div>
            <p className="text-[#808080] text-sm font-bold mb-6">COMPANY</p>
            <ul className="flex flex-col gap-y-6">
              <li>
                <Link
                  href="/"
                  className="font-semibold text-base mr-10 cursor-pointer text-white"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="font-semibold text-base mr-10 cursor-pointer text-white"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="font-semibold text-base mr-10 cursor-pointer text-white"
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-[#808080] text-sm font-bold mb-6">CONTACT</p>
            <ul className="flex flex-col gap-y-6">
              <li className="font-semibold text-base mr-10 cursor-pointer text-white">
                hello@digimpactmedia.com
              </li>
              <li className="font-semibold text-base mr-10 cursor-pointer text-white">
                <Link
                  href="/"
                  className="font-semibold text-base mr-10 cursor-pointer text-white"
                >
                  www.digimpactmedia.com
                </Link>
              </li>
              <li className="font-semibold text-base mr-10 cursor-pointer text-white">
                +234 815 180 4402
              </li>
              <li className="font-semibold text-base mr-10 cursor-pointer text-white">
                Lagos, Nigeria | Remote, Global
              </li>
            </ul>
          </div>

          <div>
            <p className="text-[#808080] text-sm font-bold mb-6">ADDRESS</p>
            <ul className="flex flex-col gap-y-6">
              <li className="font-semibold text-base mr-10 cursor-pointer text-white">
                Lagos, Nigeria | Remote, Global
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        className={`${styles.boxWidth} mx-auto bg-[#808080] h-[0.5px] mt-12`}
      ></div>

      <div className="mx-auto text-center text-[#808080] pt-8">
        <p>© {new Date().getFullYear()} DigImpact. All rights reserved.</p>
      </div>
    </footer>
  );
}
