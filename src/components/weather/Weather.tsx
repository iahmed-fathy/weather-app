import HourlyForecast from "./HourlyForecast";
import MainCard from "./MainCard";

export default function Weather() {
  return (
    <section className="grid grid-cols-[4fr_2fr] gap-20 w-full h-full px-10">
      <MainCard />
      <HourlyForecast />
    </section>
  );
}
