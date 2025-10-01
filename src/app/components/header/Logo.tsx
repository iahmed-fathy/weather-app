import Image from "next/image";

export default function Logo() {
  return <Image src={"/icons/logo.svg"} alt="logo" width={200} height={80} />;
}
