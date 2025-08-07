"use client";
import PageHeader from "@/components/header";
import styles from "@/styles";
import { useState } from "react";
import Link from "next/link";

export default function Pricing() {
  const [servicesToggle, setServicesToggle] = useState<
    "individuals" | "business"
  >("individuals");

  const pricingPlans = {
    individuals: [
      {
        id: 1,
        title: "Social media ad campaign",
        description:
          "Ideal for individuals, freelancers, or creators looking to build their online presence and reach targeted audiences through paid ads.",
        price: 450,
        price_ngn: 675000,
        duration: "per month",
        features: [
          "Social Media Setup",
          "10 Creatives",
          "Media buying",
          "Ad Performance Monitoring",
        ],
        popular: false,
      },
      {
        id: 2,
        title: "Personal Brand Starter Pack",
        description:
          "Perfect for individuals ready to launch or refine their personal brand with expert guidance and creative identity tools.",
        duration: "One time",
        price: 300,
        price_ngn: 450000,
        features: [
          "1-on-1 session",
          "Content Plan",
          "Brand Bio",
          "Visual Identity Guide",
          "Social Profile Optimization",
        ],
        popular: false,
      },
      {
        id: 3,
        title: "Strategy session (90 mins)",
        description:
          "Designed for creators, consultants, and professionals seeking expert advice for growth, launches, or content planning in a focused session.",
        duration: "per session",
        price: 250,
        price_ngn: 375000,
        features: [
          "Growth or launching planning with a digital strategist",
          "Actionable Roadmap with Key Takeaways",
        ],
        popular: true,
      },
      {
        id: 4,
        title: "SEO Content Writing",
        description:
          "Ideal for individuals building an online presence through high-quality, search-optimized content that drives traffic and builds authority.",
        duration: "per article",
        price: 120,
        price_ngn: 180000,
        features: [
          "SEO Optimization",
          "Branded Content for blog or website",
          "Keyword Research & Meta Descriptions",
        ],
        popular: false,
      },
    ],
    business: [
      {
        id: 5,
        title: "Social media ad campaign",
        description:
          "Perfect for businesses looking to grow their online presence through high-converting ads on platforms like Meta, Instagram, and TikTok.",
        price: 600,
        price_ngn: 900000,
        duration: "per month",
        features: [
          "Social Media Setup",
          "10 Creatives",
          "Media buying",
          "Performance Tracking & Optimization",
        ],
        popular: false,
      },
      {
        id: 6,
        title: "Google Ads Management",
        description:
          "Tailored for businesses that want targeted traffic and high-intent leads using expertly managed Google search and display campaigns.",
        price: 500,
        price_ngn: 750000,
        duration: "per month",
        features: [
          "Strategy",
          "Testing",
          "Conversion Optimization",
          "Keyword & Competitor Research",
        ],
        popular: false,
      },
      {
        id: 7,
        title: "Monthly Growth Retainer",
        description:
          "A flexible, ongoing support plan for scaling businesses that need continuous growth strategy, creative direction, and performance insights.",
        price: 800,
        price_ngn: 1200000,
        duration: "per month",
        features: [
          "Ongoing Strategy",
          "Reporting & on-demand support",
          "Campaign Audits & Recommendations",
          "Monthly Performance Reviews",
        ],
        popular: true,
      },
      {
        id: 8,
        title: "Email Campaign Management",
        description:
          "Designed for businesses that want to stay top-of-mind and convert subscribers through professionally managed email marketing campaigns.",
        price: 300,
        price_ngn: 450000,
        duration: "per month",
        features: [
          "4 campaigns/month",
          "Content + list segmentation",
          "A/B Testing",
          "Automated Follow-up Sequences",
        ],
        popular: false,
      },
    ],
  };

  return (
    <div>
      <PageHeader
        title="Pricing"
        subtitle="We have different plans to suit your brand, No much hassle"
      />

      <section
        className={`${styles.boxWidth} ${styles.paddingX} pb-14 pt-4 mx-auto`}
      >
        <div className="flex flex-row items-center justify-center">
          <div className="flex flex-row gap-x-2 max-w-[300px] bg-[#FAFAFA] rounded-sm p-1 mb-4">
            <div
              className={`flex flex-1 justify-center px-4 py-3 rounded-sm cursor-pointer font-semibold ${
                servicesToggle === "individuals" && "bg-white text-[#377DFF]"
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

        {/* PRICING CODE */}

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mt-8">
          {pricingPlans[servicesToggle].map((plan) => (
            <div
              key={plan.id}
              className={`relative border rounded-lg p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 ${
                plan.popular
                  ? "border-[#377DFF] bg-gradient-to-b from-[#377DFF]/5 to-white"
                  : "border-gray-200 bg-white"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-[#377DFF] text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold text-[#213053] mb-4">
                  {plan.title}
                </h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-[#213053]">
                    ${plan.price}
                  </span>
                </div>
                <div className="inline-flex items-center bg-[#EBF5FF] px-3 py-1 rounded-full">
                  <span className="text-sm font-medium text-[#2E91FF]">
                    {plan.duration}
                  </span>
                </div>
              </div>

              <p className={`${styles.paragraph} text-center mb-8`}>
                {plan.description}
              </p>

              <div className="mt-2 mb-6">
                <Link href={`/checkout/${plan.id}`}>
                  <button
                    className={`w-full flex items-center justify-center py-4 px-6 rounded-md font-semibold transition duration-300 ease-in-out cursor-pointer ${
                      plan.popular
                        ? "bg-[#377DFF] text-white hover:bg-[#377DFF]/90"
                        : "bg-white border-2 border-[#377DFF] text-[#377DFF] hover:bg-[#377DFF] hover:text-white"
                    }`}
                  >
                    <span className="mr-3">Get Started Now</span>
                    {/* <Image
                      src={arrowRight}
                      alt="arrow-right"
                      className="w-[15px] h-[15px]"
                    /> */}
                  </button>
                </Link>
              </div>

              <div className="mb-8">
                <h4 className="font-semibold text-[#213053] mb-4">
                  What you&apos;ll learn:
                </h4>
                <ul className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-[#377DFF] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
