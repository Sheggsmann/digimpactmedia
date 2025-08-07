import PageHeader from "@/components/header";
import styles from "@/styles";

export default function About() {
  return (
    <div>
      <PageHeader
        title="About us"
        subtitle="DigImpact Media is your trusted partner for digital growth — whether you’re an individual looking to build your personal brand, a startup launching a new product, or an established business ready to scale. We offer a full range of digital advertising, branding, and growth consulting services to help you stand out online, attract the right audience, and convert attention into action"
      />

      <section
        className={`${styles.paddingY} ${styles.paddingX} ${styles.boxWidth} mx-auto`}
      >
        <h1 className="font-extrabold text-[24px] md:text-[30px]">
          Why Clients Work With Us
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6 md:mt-10">
          <div className="flex flex-row border-1 border-[#DFDFDF] rounded-md p-8">
            <div className="w-[21px] h-[24px] rounded-md bg-[#20BFA9]"></div>
            <p className="mt-2 ml-4 font-bold text-lg">
              Solutions for both solo creatives and scaling businesses
            </p>
          </div>
          <div className="flex flex-row border-1 border-[#DFDFDF] rounded-md p-8">
            <div className="w-[21px] h-[24px] rounded-md bg-[#9447F5]"></div>
            <p className="mt-2 ml-4 font-bold text-lg">
              Data-driven, ROI-focused advertising
            </p>
          </div>
          <div className="flex flex-row border-1 border-[#DFDFDF] rounded-md p-8">
            <div className="w-[21px] h-[24px] rounded-md bg-[#A98A6C]"></div>
            <p className="mt-2 ml-4 font-bold text-lg">
              7+ years of experience across sectors
            </p>
          </div>
          <div className="flex flex-row border-1 border-[#DFDFDF] rounded-md p-8">
            <div className="w-[21px] h-[24px] rounded-md bg-[#1787FC]"></div>
            <p className="mt-2 ml-4 font-bold text-lg">
              Certified Meta & Google experts
            </p>
          </div>
          <div className="flex flex-row border-1 border-[#DFDFDF] rounded-md p-8">
            <div className="w-[21px] h-[24px] rounded-md bg-[#C4D944]"></div>
            <p className="mt-2 ml-4 font-bold text-lg">
              Transparent reporting + no fluff
            </p>
          </div>
          <div className="flex flex-row border-1 border-[#DFDFDF] rounded-md p-8">
            <div className="w-[21px] h-[24px] rounded-md bg-[#FFCD28]"></div>
            <p className="mt-2 ml-4 font-bold text-lg">
              Flexible support to match your growth stage
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
