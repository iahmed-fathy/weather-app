"use client";

import MyContext from "@/store/MyContext";
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

import React, { useContext, useState } from "react";

export default function Dropdown() {
  const context = useContext(MyContext);
  if (!context) return;

  const { setTempUnit, setWindUnit, setPrecUnit } = context;

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
          <DropdownMenuItem onClick={() => setTempUnit("celsius")}>
            Celsius (°C)
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTempUnit("fahrenheit")}>
            Fahrenheit (°F)
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator className="bg-white/10" />
        <DropdownMenuGroup>
          <DropdownMenuLabel className="text-white/50 text-[16px]">
            Wind Speed
          </DropdownMenuLabel>
          <DropdownMenuItem onClick={() => setWindUnit("kmh")}>
            km/h
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setWindUnit("mph")}>
            mph
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator className="bg-white/10" />
        <DropdownMenuGroup>
          <DropdownMenuLabel className="text-white/50 text-[16px]">
            Precipitation
          </DropdownMenuLabel>
          <DropdownMenuItem onClick={() => setPrecUnit("mm")}>
            Millimeters (mm)
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setPrecUnit("inch")}>
            Inches (in)
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
