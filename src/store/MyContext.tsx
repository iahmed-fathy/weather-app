"use client";
import useWeather from "@/hooks/useWeather";
import { createContext, ReactNode, useState } from "react";

interface MyContextType {
  tempUnit: string;
  windUnit: string;
  precUnit: string;
  setTempUnit: (val: string) => void;
  setWindUnit: (val: string) => void;
  setPrecUnit: (val: string) => void;
}

const MyContext = createContext<MyContextType | undefined>(undefined);

interface MyContextProviderProps {
  children: ReactNode;
}

export function MyContextProvider({ children }: MyContextProviderProps) {
  const [tempUnit, setTempUnit] = useState("celsius");
  const [windUnit, setWindUnit] = useState("kmh");
  const [precUnit, setPrecUnit] = useState("mm");
  const { data, isLoading, error } = useWeather({
    lat: 30.0444,
    long: 31.2357,
    tempUnit,
    windUnit,
    precUnit,
  });

  const value = {
    tempUnit,
    windUnit,
    precUnit,
    setTempUnit,
    setWindUnit,
    setPrecUnit,
    data,
    isLoading,
    error,
  };
  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
}

export default MyContext;
