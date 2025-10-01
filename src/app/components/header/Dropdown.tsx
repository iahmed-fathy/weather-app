"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuGroup,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";

import React, { useState } from "react";

export default function Dropdown() {
  const [temperature, setTemperature] = useState("c");
  const [windSpeed, setWindSpeed] = useState("km");
  const [precipitation, setPrecipitation] = useState("mm");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="bg-[var(--base-800)] py-1 px-3 rounded-[4px] flex gap-2 text-[14px] items-center">
        <Image
          src={"/icons/icon-units.svg"}
          alt="icon units"
          width={12}
          height={12}
        />
        <span>Units</span>
        <Image
          src={"/icons/icon-dropdown.svg"}
          alt="icon units"
          width={12}
          height={12}
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-[var(--base-800)] border-0 py-2 px-4 text-white mr-20">
        <DropdownMenuLabel className="text-[18px]">
          Switch to imperial
        </DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuLabel className="text-white/50 text-[16px]">
            Temperature
          </DropdownMenuLabel>
          <DropdownMenuItem onClick={() => setTemperature("c")}>
            Celsius (°C)
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTemperature("f")}>
            Fahrenheit (°F)
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator className="bg-white/10" />
        <DropdownMenuGroup>
          <DropdownMenuLabel className="text-white/50 text-[16px]">
            Wind Speed
          </DropdownMenuLabel>
          <DropdownMenuItem onClick={() => setWindSpeed("km")}>
            km/h
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setWindSpeed("mph")}>
            mph
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator className="bg-white/10" />
        <DropdownMenuGroup>
          <DropdownMenuLabel className="text-white/50 text-[16px]">
            Precipitation
          </DropdownMenuLabel>
          <DropdownMenuItem onClick={() => setPrecipitation("mm")}>
            Millimeters (mm)
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setPrecipitation("in")}>
            Inches (in)
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
