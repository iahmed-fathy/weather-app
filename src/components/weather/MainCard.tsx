import Image from "next/image";

export default function MainCard() {
  return (
    <div className="relative w-full h-[300px] flex items-center justify-between px-10">
      <Image
        src={"/background/bg-today-large.svg"}
        alt="card background"
        fill
        className="absolute object-cover rounded-[10px] -z-10 w-full"
      />
      <div className="flex flex-col gap-2">
        <span className="text-[50px] font-bold">Ciro-Egypt</span>
        <time className="text-[20px] font-normal">Tuseday, Aug 5,2025</time>
      </div>
      <div className="flex gap-1 items-center justify-center">
        <Image
          src={"/icons/icon-sunny.webp"}
          alt="sunny"
          width={100}
          height={100}
        />
        <span className="text-[80px]">68°</span>
      </div>
    </div>
  );
}
