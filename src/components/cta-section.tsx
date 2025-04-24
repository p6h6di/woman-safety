import Link from "next/link";
import React from "react";

const CTASection = () => {
  return (
    <section className="max-w-xl w-full text-center mx-auto space-y-8">
      <h1 className="text-4xl font-bold">
        Ready to Prioritize Your Safety and Confidence?
      </h1>
      <p className="text-base text-[#788763]">
        Join thousands of empowered women using our tools to stay safe,
        informed, and connected—anytime, anywhere.
      </p>
      <Link
        href="/incidents"
        className="px-8 py-4 rounded-xl bg-[#87E51A] font-medium text-sm"
      >
        Get Started
      </Link>
    </section>
  );
};

export default CTASection;
