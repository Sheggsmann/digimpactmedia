"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import styles from "@/styles";
// import { PaystackButton } from "react-paystack";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import PageHeader from "@/components/header";
const PaystackButton = dynamic(
  () => import("react-paystack").then((mod) => mod.PaystackButton),
  { ssr: false }
);

interface Course {
  id: number;
  title: string;
  description: string;
  price: number;
  price_ngn: number;
  duration: string;
  features: string[];
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  zipCode: string;
  city: string;
  state: string;
  country: string;
}

interface PaystackConfig {
  reference: string;
  email: string;
  amount: number;
  publicKey: string;
  text: string;
  onSuccess: (reference: unknown) => void;
  onClose: () => void;
}

const courses: Course[] = [
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
  },
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
  },
];

export default function Checkout() {
  const params = useParams();
  const packageId = params.package as string;
  const router = useRouter();

  const [course, setCourse] = useState<Course | null>(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    zipCode: "",
    city: "",
    state: "",
    country: "Nigeria",
  });

  useEffect(() => {
    const selectedCourse = courses.find((c) => c.id === parseInt(packageId));
    setCourse(selectedCourse || null);
  }, [packageId]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const isFormValid = () => {
    return Object.values(formData).every((value) => value.trim() !== "");
  };

  const paystackConfig: PaystackConfig = {
    reference: new Date().getTime().toString(),
    email: formData.email,
    amount: course ? course.price_ngn * 100 : 0,
    publicKey: `pk_live_c75234e7afb1e8c399b382c8b6208fe978b50ee1}`,
    text: "Complete Payment",
    onSuccess: (reference) => {
      console.log("Payment Successful: ", reference);
      setShowSuccessModal(true);
    },
    onClose: () => {
      console.log("Payment closed");
    },
  };

  const SuccessModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
      <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
        <div className="text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-green-600 text-2xl">✓</span>
          </div>
          <h2 className="text-2xl font-bold text-[#213053] mb-4">
            Payment Successful!
          </h2>
          <p className={`${styles.paragraph} mb-6`}>
            Check your email for the next steps and course access details.
          </p>
          <button
            onClick={() => {
              setShowSuccessModal(false);
              router.push("/");
            }}
            className="bg-[#377DFF] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#377DFF]/90 transition duration-300"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#213053] mb-4">
            Course Not Found
          </h1>
          <p className={styles.paragraph}>
            The course you&apos;re looking for doesn&apos;t exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <div className="">
        <div className={`${styles.boxWidth} mx-auto`}>
          <PageHeader
            title="Complete Your Payment"
            subtitle="We are more than happy to work with you"
          />
        </div>
      </div>

      {/* Checkout Content */}
      <div
        className={`${styles.boxWidth} ${styles.paddingX} ${styles.paddingY} mx-auto`}
      >
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Order Summary */}
          <div className="order-2 lg:order-1">
            <div className="bg-[#F9FAFB] rounded-lg p-8 sticky top-8">
              <h2 className="text-2xl font-semibold text-[#213053] mb-6">
                Order Summary
              </h2>

              <div className="border-b border-gray-200 pb-6 mb-6">
                <h3 className="text-xl font-semibold text-[#213053] mb-2">
                  {course.title}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-[#213053]">
                    ${course.price}
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Course Fee</span>
                  <span className="font-semibold">${course.price}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Processing Fee</span>
                  <span className="font-semibold">$0</span>
                </div>
                <div className="border-t border-gray-200 pt-3">
                  <div className="flex justify-between">
                    <span className="text-lg font-semibold text-[#213053]">
                      Total
                    </span>
                    <span className="text-lg font-bold text-[#213053]">
                      ${course.price}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-[#EBF5FF] rounded-lg">
                <h4 className="font-semibold text-[#213053] mb-2">
                  What&apos;s Included:
                </h4>
                <ul className="space-y-2 text-sm">
                  {course.features.map((feature, index) => (
                    <li className="flex items-center" key={index}>
                      <div className="w-2 h-2 bg-[#377DFF] rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Checkout Form */}
          <div className="order-1 lg:order-2">
            <div className="bg-white rounded-lg border border-gray-200 p-8">
              <h2 className="text-2xl font-semibold text-[#213053] mb-8">
                Information
              </h2>

              <div className="space-y-6">
                {/* Personal Information */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-semibold text-[#213053] mb-2"
                    >
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full p-4 border border-gray-300 rounded-md outline-none focus:border-[#377DFF] transition duration-300"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-semibold text-[#213053] mb-2"
                    >
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full p-4 border border-gray-300 rounded-md outline-none focus:border-[#377DFF] transition duration-300"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                {/* Contact Information */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-[#213053] mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full p-4 border border-gray-300 rounded-md outline-none focus:border-[#377DFF] transition duration-300"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-[#213053] mb-2"
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full p-4 border border-gray-300 rounded-md outline-none focus:border-[#377DFF] transition duration-300"
                    placeholder="Enter your phone number"
                  />
                </div>

                {/* Address Information */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="city"
                      className="block text-sm font-semibold text-[#213053] mb-2"
                    >
                      City *
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                      className="w-full p-4 border border-gray-300 rounded-md outline-none focus:border-[#377DFF] transition duration-300"
                      placeholder="Enter your city"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="state"
                      className="block text-sm font-semibold text-[#213053] mb-2"
                    >
                      State *
                    </label>
                    <input
                      type="text"
                      id="state"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      required
                      className="w-full p-4 border border-gray-300 rounded-md outline-none focus:border-[#377DFF] transition duration-300"
                      placeholder="Enter your state"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="zipCode"
                      className="block text-sm font-semibold text-[#213053] mb-2"
                    >
                      Zip Code *
                    </label>
                    <input
                      type="text"
                      id="zipCode"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      required
                      className="w-full p-4 border border-gray-300 rounded-md outline-none focus:border-[#377DFF] transition duration-300"
                      placeholder="Enter your zip code"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="country"
                      className="block text-sm font-semibold text-[#213053] mb-2"
                    >
                      Country *
                    </label>
                    <select
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      required
                      className="w-full p-4 border border-gray-300 rounded-md outline-none focus:border-[#377DFF] transition duration-300"
                    >
                      <option value="Nigeria">Nigeria</option>
                      <option value="Ghana">Ghana</option>
                      <option value="Kenya">Kenya</option>
                      <option value="South Africa">South Africa</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Payment Button */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold text-[#213053] mb-2">
                      Payment Method
                    </h3>
                    <p className={`${styles.paragraph} text-sm`}>
                      Secure payment powered by Paystack. Your card details are
                      encrypted and secure.
                    </p>
                  </div>

                  {isFormValid() ? (
                    <PaystackButton
                      {...paystackConfig}
                      className="w-full bg-[#377DFF] text-white py-4 px-6 rounded-md font-semibold hover:bg-[#377DFF]/90 transition duration-300 ease-in-out cursor-pointer"
                    />
                  ) : (
                    <button
                      type="button"
                      disabled
                      className="w-full bg-gray-300 text-gray-500 py-4 px-6 rounded-md font-semibold cursor-not-allowed"
                    >
                      Complete all fields to proceed
                    </button>
                  )}

                  <div className="mt-4 text-center">
                    <p className="text-xs text-gray-500">
                      By completing your purchase, you agree to our{" "}
                      <span className="text-[#377DFF] cursor-pointer hover:underline">
                        Terms of Service
                      </span>{" "}
                      and{" "}
                      <span className="text-[#377DFF] cursor-pointer hover:underline">
                        Privacy Policy
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Security Notice */}
            <div className="mt-6 bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <span className="text-green-600 text-lg">🔒</span>
                </div>
                <div className="ml-3">
                  <h4 className="text-sm font-semibold text-green-800">
                    Secure Payment
                  </h4>
                  <p className="text-sm text-green-700 mt-1">
                    Your payment information is encrypted and processed securely
                    through Paystack. We never store your card details.
                  </p>
                </div>
              </div>
            </div>

            {/* Money Back Guarantee */}
            {/* <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <span className="text-blue-600 text-lg">💯</span>
                </div>
                <div className="ml-3">
                  <h4 className="text-sm font-semibold text-blue-800">
                    30-Day Money Back Guarantee
                  </h4>
                  <p className="text-sm text-blue-700 mt-1">
                    Not satisfied with the course? Get a full refund within 30
                    days of purchase.
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </div>

        {/* FAQ Section */}
        {/* <div className="mt-16 bg-[#F9FAFB] rounded-lg p-8">
          <h2 className={`${styles.heading2} text-center mb-8`}>
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-[#213053] mb-2">
                When does the course start?
              </h3>
              <p className={`${styles.paragraph} text-sm`}>
                Courses start immediately after payment confirmation.
                You&apos;ll receive access details via email.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[#213053] mb-2">
                What if I need help during the course?
              </h3>
              <p className={`${styles.paragraph} text-sm`}>
                Our expert instructors provide support throughout the course via
                our learning platform.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[#213053] mb-2">
                Is there a certificate?
              </h3>
              <p className={`${styles.paragraph} text-sm`}>
                Yes! You&apos;ll receive a certificate of completion after
                successfully finishing the course.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[#213053] mb-2">
                Can I access the course on mobile?
              </h3>
              <p className={`${styles.paragraph} text-sm`}>
                Absolutely! Our learning platform is fully responsive and works
                on all devices.
              </p>
            </div>
          </div>
        </div> */}
      </div>

      {/* Success Modal */}
      {showSuccessModal && <SuccessModal />}
    </div>
  );
}
