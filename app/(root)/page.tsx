import { Button } from "@/components/ui/button";
import Image from "next/image";
import { SignInButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
        <div className="wrapper grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h1-bold">
              Host, Connect, Celebate: Your Events, Our Platform!
            </h1>
            <p className="p-regular-20 md:p-regular-24">Book and learn helpful tips from 4,263+ mentors in the world-class companies with our global community</p>

          </div>

        </div>
      </section>
    </>
  );
}