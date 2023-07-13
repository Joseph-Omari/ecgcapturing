import Image from "next/image";
import Link from "next/link";
import Logo from "public/logo.PNG";

export default function Home() {
  return (
    <div className="mt-16">
      <h1 className=" md:text-xl text-center text-red-600 font-bold">
        Welcome to the ECG field meter capturing system
      </h1>

      <div className="mt-10 text-2xl  flex flex-col items-center justify-center">
        <Link href={"capturingdata"} className="font-bold text-blue-500">View Capturing Data</Link>
        <h1 className="text-base text-red-600">Only viewed by capturing team</h1>
      </div>


      <div className="flex flex-col items-center justify-center mx-auto mt-20">
        <Image
          src={Logo}
          alt="ecgLogo"
          className="flex justify-center  w-52 drop-shadow-lg"
        />
        <h1 className="font-bold text-2xl">KASOA SOUTH DISTRICT</h1>
      </div>
    </div>
  );
}
