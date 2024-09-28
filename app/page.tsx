import PatientForm from "@/components/forms/PatientForm";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen max-h-screen text-white">
      {/**ToDO:OTP Notification` */}
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          <Image
            src="/assets/icons/logo-full.svg"
            alt="logo"
            width={1000}
            height={1000}
            className="mb-12 w-fit h-10"
          />
          <PatientForm />
          <div className="text-14-regular mt-20 flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left">
            ©️ 2024 CarePulse
            </p>
           <Link href="/?admin=true" className="text-green-500">
           Admin</Link>
          </div>
        </div>
      </section>
      <Image src="/assets/images/onboarding-img.png" alt="onboardingimage"  width={1000} height={1000} className="side-image max-w-[50%]"/>
    </div>
  );
}
