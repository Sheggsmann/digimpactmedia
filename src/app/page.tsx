"use client";
import { useState } from "react";
import styles from "@/styles";
import Image from "next/image";
import Link from "next/link";
import landingImage from "@/assets/landing.jpg";
import servicesImage from "@/assets/services.jpg";
import user1Pic from "@/assets/user1.jpg";
import user2Pic from "@/assets/user2.jpg";
import user3Pic from "@/assets/user3.jpg";
import dots1 from "@/assets/dots1.svg";
import dots2 from "@/assets/dots2.svg";
import star from "@/assets/star.svg";
import Dot from "@/components/dot";

export default function Home() {
  const [servicesToggle, setServicesToggle] = useState<
    "individuals" | "business"
  >("individuals");
  const whatWeDo: { [key: string]: string[] } = {
    individuals: [
      "Personal brand development",
      "Social media growth and campaigns",
      "One-on-one strategy sessions",
      "Content planning and engagement consulting",
      "Digital product launch and support",
    ],
    business: [
      "End-to-end ad campaign management (Meta, Google, Tiktok, etc)",
      "Go-to-market strategy and funnel design",
      "Brand positioning and messaging",
      "Website traffic growth and lead generation",
      "Email marketing and automation",
    ],
  };

  const testimonials = [
    {
      content:
        "DigImpact Media helped me grow my personal brand from scratch. Their one-on-one strategy sessions and ad campaigns gave me direction, confidence, and visibility. I now have a clear content plan and my audience is finally growing organically!",
      user: "Amara",
      job: "Lifestyle & Wellness Influencer",
      image: user1Pic,
    },
    {
      content:
        "From launch to growth, DigImpact Media was instrumental. Their Go-to-Market strategy and 30-day growth support gave our startup the momentum it needed. Clear reporting, smart creatives, and real ROI — they felt like an extension of our team.",
      user: "Afolabi Esther",
      job: "Tech Startup Founder (Fintech)",
      image: user2Pic,
    },
    {
      content:
        "I was wasting money on ads until DigImpact Media stepped in. They revamped our campaigns, improved our website traffic, and built an automated email funnel. The results were immediate — leads increased, and we’re finally scaling with confidence!",
      user: "Daniel",
      job: "Owner, Eco Home Essentials",
      image: user3Pic,
    },
  ];

  return (
    <div>
      {/* HERO SECTION */}
      <section
        className={`${styles.boxWidth} ${styles.paddingX} mx-auto py-12 relative`}
      >
        <Dot className="bg-gradient-to-tl from-[#377DFF] to-[#6893e3] top-[32%]" />
        <Dot className="bg-gradient-to-tl from-[#377DFF] to-[#6893e3] right-2 md:-right-2 top-[60%]" />
        <Dot className="bg-gradient-to-tl from-[#F62424] to-[#FF8E8E] right-1 md:-right-16" />
        <div className={`${styles.flexStart} py-4 md:py-12`}>
          <div className="text-center">
            <h1 className="font-extrabold text-[24px] md:text-[48px]">
              Strategy. Scale. Success
            </h1>
            <p className="mt-6 md:mx-12 text-base md:text-lg text-[#4E4E4E]">
              DigImpact Media is your trusted partner for digital growth —
              whether you’re an individual looking to build your personal brand,
              a startup launching a new product, or an established business
              ready to scale.
            </p>
          </div>
        </div>
        <div className="mx-auto flex items-center justify-center mt-4 md:mt-0">
          <Link href="/pricing" className="">
            <p className="px-10 py-3 font-bold text-white rounded-full bg-[#377DFF] shadow-xs shadow-[#377DFF]">
              View Pricing
            </p>
          </Link>
        </div>

        {/* IMAGE */}
        <div className="w-full h-[279px] md:h-[520] mt-12 md:px-12 relative">
          <Image
            src={dots1}
            className="absolute left-[20%] -top-9 w-[100px] h-[50px] -z-10"
            alt="dots1"
          />
          <Image
            src={dots2}
            className="absolute left-[30%] -bottom-9 w-[100px] h-[50px] -z-10"
            alt="dots1"
          />
          <div className="absolute -left-3.5 -top-3.5 w-[140px] h-[70px] md:w-[175px] md:h-[95px] rounded-lg bg-white shadow-2xl p-4">
            <div className="flex flex-row gap-4 items-center">
              <Image src={star} alt="star" />
              <div>
                <p className="text-xs font-bold text-[#1D1D1D]">YRS OF EX+</p>
              </div>
            </div>
            <p className="font-extrabold text-lg md:text-2xl text-center md:mt-2">
              7+
            </p>
          </div>

          <div className="w-full h-[279px] md:h-[520px] rounded-2xl overflow-hidden z-50">
            <Image
              src={landingImage}
              alt="landing page image"
              className="w-[100%] h-[100%] object-cover"
            />
          </div>
        </div>
      </section>

      {/* STATISTICS SECTION */}
      <section className={` ${styles.paddingX} py-12 my-12 bg-gray-100`}>
        <div className={`${styles.boxWidth} mx-auto`}>
          <div className="bg-[#377DFF] flex flex-row flex-wrap md:flex-nowrap items-center py-12 rounded-2xl">
            <div className="w-[48%] mb-4 md:mb-0 flex md:flex-1 items-center justify-center">
              <div className="text-center">
                <h1 className="text-white text-3xl font-extrabold">7+</h1>
                <p className="mt-2 text-white text-sm">Yrs of Exp</p>
              </div>
            </div>
            <div className="w-[10px] h-[10px] rounded-full bg-white"></div>

            <div className="w-[48%] mb-4 md:mb-0 md:flex-1">
              <div className="text-center">
                <h1 className="text-white text-3xl font-extrabold">140+</h1>
                <p className="mt-2 text-white text-sm">Clients</p>
              </div>
            </div>
            <div className="hidden md:flex w-[10px] h-[10px] rounded-full bg-white"></div>
            <div className="flex-1">
              <div className="text-center">
                <h1 className="text-white text-3xl font-extrabold">30+</h1>
                <p className="mt-2 text-white text-sm">Brands</p>
              </div>
            </div>
            <div className="w-[10px] h-[10px] rounded-full bg-white"></div>

            <div className="flex-1">
              <div className="text-center">
                <h1 className="text-white text-3xl font-extrabold">99%</h1>
                <p className="mt-2 text-white text-sm">Success Rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO SECTION */}
      <section
        className={`${styles.boxWidth} ${styles.paddingX} ${styles.paddingY} mx-auto my-12`}
      >
        <div className="flex flex-col md:flex-row items-center">
          <div className="flex flex-1 flex-col items-center md:items-start">
            {/* COMPONENT */}
            <div>
              <h1 className="font-bold text-[24px] md:text-[30px] mb-6 text-center md:text-left">
                What we do?
              </h1>

              <div className="flex flex-row gap-x-2 max-w-[300px] bg-[#FAFAFA] rounded-sm p-1 mb-4">
                <div
                  className={`flex flex-1 justify-center px-4 py-3 rounded-sm cursor-pointer font-semibold ${
                    servicesToggle === "individuals" &&
                    "bg-white text-[#377DFF]"
                  }`}
                  onClick={() => setServicesToggle("individuals")}
                >
                  Individuals
                </div>
                <div
                  className={`flex flex-1 justify-center px-4 py-3 rounded-sm cursor-pointer font-semibold 
                    ${
                      servicesToggle === "business" && "bg-white text-[#377DFF]"
                    }`}
                  onClick={() => setServicesToggle("business")}
                >
                  Business
                </div>
              </div>
            </div>

            <div className="md:hidden">
              <p className="text-[#1D263A] mt-8 text-center">
                <span className="italic">
                  &quot;Business opportunities are like buses, there&apos;s
                  always another one coming&quot;
                </span>
                - Richard Branson
              </p>
            </div>

            <div className="flex flex-col gap-y-10 mt-12 max-w-[400px]">
              {whatWeDo[servicesToggle].map((service, index) => (
                <div key={index} className="flex flex-row items-center">
                  <div>
                    <div className="flex items-center justify-center w-[40px] h-[40px] rounded-full border-1 border-gray-300 font-bold mr-4">
                      {index + 1}
                    </div>
                  </div>
                  <p className="font-bold">{service}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="hidden md:flex flex-col flex-1">
            <p className="text-[#1D263A] mt-8 mb-16">
              <span className="italic">
                &quot;Business opportunities are like buses, there&apos;s always
                another one coming&quot;
              </span>
              - Richard Branson
            </p>

            <div className="mt-8 w-full h-[400px]">
              <Image
                src={servicesImage}
                alt="services image"
                className="w-[100%] h-[100%] object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className={`${styles.paddingX} ${styles.paddingY} bg-gray-100`}>
        <div className={`${styles.boxWidth} mx-auto`}>
          <h1 className="font-bold text-[24px] md:text-[30px] text-center md:text-left mb-8 md:mb-16">
            What They Say About Our Services
          </h1>

          <div className="flex flex-col md:flex-row items-center gap-6 overflow-x-scroll">
            {testimonials.map((testimonial, index) => (
              <div className="w-full bg-white p-8 rounded-md" key={index}>
                <p>&quot;{testimonial.content}&quot;</p>
                <div className="flex flex-row items-center p-4 rounded-md bg-gray-100 mt-8">
                  <div className="w-[50px] h-[50px] rounded-full overflow-hidden mr-4">
                    <Image src={testimonial.image} alt="Other pictures" />
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.user}</h4>
                    <p className="text-sm text-[#1D263A]">{testimonial.job}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
