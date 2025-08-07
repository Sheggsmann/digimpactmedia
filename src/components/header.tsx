import styles from "@/styles";
import dots1 from "@/assets/dots1.svg";
import dots2 from "@/assets/dots2.svg";
import Dot from "./dot";
import Image from "next/image";

interface PageHeaderProps {
  title: string;
  subtitle: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className={`${styles.paddingY} ${styles.paddingX} relative`}>
      <Image
        src={dots1}
        className="absolute left-[20%] md:left-[25%] top-[9%] md:top-[12%] w-[100px] h-[50px] -z-10"
        alt="dots1"
      />
      <Image
        src={dots2}
        className="absolute right-[10%] top-[100%] md:top-[80%] w-[100px] h-[50px] -z-10"
        alt="dots2"
      />
      <Dot className="bg-gradient-to-tl from-[#377DFF] to-[#6893e3] left-1.5 md:left-[10%] top-[60%]" />
      <Dot className="bg-gradient-to-tl from-[#F62424] to-[#FF8E8E] right-0" />
      <div className={`${styles.boxWidth} mx-auto text-center`}>
        <h1 className="font-extrabold text-[30px] md:text-[48px]">{title}</h1>
        <p className="text-[#4E4E4E] mt-4 text-[16px] md:text-[20px]">
          {subtitle}
        </p>
      </div>
    </div>
  );
}
