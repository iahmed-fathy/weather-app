import { useQuery } from "@tanstack/react-query";
interface UseWeatherType {
  lat: number;
  long: number;
  tempUnit: string;
  windUnit: string;
  precUnit: string;
}
export default function useWeather({
  lat,
  long,
  tempUnit,
  windUnit,
  precUnit,
}: UseWeatherType) {
  const now = new Date();
  const start = now.toISOString().substring(0, 16);
  const endDate = new Date(now.getTime() + 8 * 60 * 60 * 1000);
  const end = endDate.toISOString().substring(0, 16);

  const url =
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}` +
    `&current_weather=true` +
    `&hourly=temperature_2m,precipitation,wind_speed_10m` +
    `&daily=temperature_2m_max,temperature_2m_min,precipitation_sum` +
    `&timezone=auto&start=${start}&end=${end}` +
    `&windspeed_unit=${windUnit}&temperature_unit=${tempUnit}&precipitation_unit=${precUnit}`;

  const { data, isLoading, error } = useQuery({
    queryKey: ["weather", lat, long, tempUnit, windUnit, precUnit],
    queryFn: async () => {
      const res = await fetch(url);
      if (!res.ok) throw new Error("failed fetching weather");
      return await res.json();
    },
  });
  return { data, isLoading, error };
}
