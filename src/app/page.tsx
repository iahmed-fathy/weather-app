import Weather from "@/components/weather/Weather";
import Header from "../components/header/Header";

export default function Home() {
  return (
    <main className="py-10 px-20 flex flex-col gap-10 items-center justify-center w-full h-full">
      <Header />
      <Weather />
    </main>
  );
}
