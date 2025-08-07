import PageHeader from "@/components/header";
import styles from "@/styles";

export default function ContactUs() {
  return (
    <div>
      <PageHeader
        title="Contact US"
        subtitle="We are always available to talk about your brad. Kindly reach out to us"
      />

      <section
        className={`${styles.paddingY} ${styles.boxWidth} ${styles.paddingX} mx-auto`}
      >
        <div className="flex flex-col md:flex-row gap-12">
          <div>
            <div className="flex flex-col md:flex-row gap-8">
              <div>
                <h1 className="font-bold text-lg">Email Address</h1>
                <div className="h-1 bg-black my-2 w-[27px]"></div>
                <h1 className="font-bold text-lg">hello@digimpactmedia.com</h1>
                <p className="mt-4 font-normal text-sm">
                  Assistance hours: <br />
                  Mongay - Friday 6am to 8pm EST
                </p>
              </div>

              <div>
                <h1 className="font-bold text-lg">Number</h1>
                <div className="h-1 bg-black my-2 w-[27px]"></div>
                <h1 className="font-bold text-lg">+234 701 234 5678</h1>
                <p className="mt-4 font-normal text-sm">
                  Assistance hours: <br />
                  Mongay - Friday 6am to 8pm EST
                </p>
              </div>
            </div>
            <div className="mt-12">
              <h1 className="font-bold text-lg">Location</h1>
              <div className="h-1 bg-black my-2 w-[27px]"></div>
              <h1 className="font-bold text-lg">
                Lagos, Nigeria | Remote, Global
              </h1>
              <p className="mt-4 font-normal text-sm">
                Assistance hours: <br />
                Mongay - Friday 6am to 8pm EST
              </p>
            </div>
          </div>

          <div className="flex flex-1 bg-gray-100 rounded-md p-8">
            <form action="/" className="flex-1">
              <div className="flex flex-1 flex-row gap-8 items-center justify-between">
                <div className="flex-1">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    className="block border-b-[1px] outline-none mt-4 w-full"
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="text"
                    name="email"
                    className="block border-b-[1px] outline-none mt-4 w-full"
                  />
                </div>
              </div>

              <div className="flex flex-1 h-[300px] rounded-md bg-white mt-12">
                <textarea
                  name="message"
                  id=""
                  className="w-full h-full p-4"
                  placeholder="Write your message here"
                ></textarea>
              </div>

              <input
                type="submit"
                value="Send message"
                className="px-10 py-3 font-bold text-white rounded-full bg-[#377DFF] shadow-xs shadow-[#377DFF] mt-12 cursor-pointer"
              />
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
