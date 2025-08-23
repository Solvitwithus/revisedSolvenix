import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import File from "@/app/assets/file.png";
import { BorderBeam } from "@/components/magicui/border-beam";
import Image from "next/image";
import { ShinyButton } from "@/components/magicui/shiny-button";

export function MusicPlayer() {
  return (
    <Card className="relative w-[350px] overflow-hidden text-center bg-[#ffffff] text-white">
      {/* Glowing border effect */}
      <BorderBeam
        duration={6}
        size={400}
        className="from-transparent via-red-500 to-transparent"
      />
      <BorderBeam
        duration={6}
        delay={3}
        size={400}
        borderWidth={2}
        className="from-transparent via-blue-500 to-transparent"
      />

      {/* Card Header with image + text side-by-side */}
      <CardHeader className="flex flex-row items-center gap-4 justify-start px-4 mb-0 pb-0">
        {/* Image */}
        <div className="relative w-10 h-10 flex-shrink-0">
          <Image
            src={File}
            alt="business-section"
            fill
            className="object-contain"
          />
        </div>

        {/* Text */}
        <div className="text-left">
          <p className="text-base text-[#c0ba10] font-semibold leading-tight">
            Compliance & Business <br />
            <span className="text-[#6ca837] font-bold">Support</span>
          </p>
          <span className="text-sm text-gray-400">Professional & Reliable</span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex gap-2 my-2 bg-[#eeeeee]  hover:bg-[#dddddd] cursor-pointer rounded-md items-center">
<p className="bg-[#5F7A47] ml-2 rounded-[50%] h-2 w-2 "></p>
<p className="text-[13px] text-[#333333] hover:text-[#555555]">Business Name Registration</p>
        </div>
         <div className="flex gap-2 my-2 bg-[#eeeeee] hover:bg-[#dddddd] cursor-pointer rounded-md items-center">
<p className="bg-[#5F7A47] ml-2 rounded-[50%] h-2 w-2 "></p>
<p className="text-[13px] text-[#333333] hover:text-[#555555]">KRA Pin Application & Return Filing</p>
        </div>
         <div className="flex gap-2 my-2 bg-[#eeeeee] hover:bg-[#dddddd] cursor-pointer rounded-md items-center">
<p className="bg-[#5F7A47] ml-2 rounded-[50%] h-2 w-2 "></p>
<p className="text-[13px] text-[#333333] hover:text-[#555555]">NHIF & NSSF Registration</p>
        </div>
         <div className="flex gap-2 my-2 bg-[#eeeeee] hover:bg-[#dddddd] cursor-pointer rounded-md items-center">
<p className="bg-[#5F7A47] ml-2 rounded-[50%] h-2 w-2 "></p>
<p className="text-[13px] text-[#333333] hover:text-[#555555]">Police and CRB Clearance</p>
        </div>
         <div className="flex gap-2 my-2 bg-[#eeeeee] hover:bg-[#dddddd] cursor-pointer rounded-md items-center">
<p className="bg-[#5F7A47] ml-2 rounded-[50%] h-2 w-2 "></p>
<p className="text-[13px] text-[#333333] hover:text-[#555555]">Tax Compliance Certificate</p>
        </div>
         <div className="flex gap-2 my-2 bg-[#eeeeee] hover:bg-[#dddddd] cursor-pointer rounded-md items-center">
<p className="bg-[#5F7A47] ml-2 rounded-[50%] h-2 w-2 "></p>
<p className="text-[13px] text-[#333333] hover:text-[#555555]">Driving Licence Renewal</p>
        </div>
      </CardContent>
       <CardFooter>
        <div className="absolute right-2">
        <ShinyButton>Contact Us</ShinyButton>
        </div>
      </CardFooter>
    </Card>
  );
}
