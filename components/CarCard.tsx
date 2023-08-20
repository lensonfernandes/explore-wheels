"use client";

import { CarProps } from "@/types";
import React, { useState } from "react";
import { CustomButton } from ".";
import { calculateCarRent } from "@/utils";
import Image from "next/image";

interface CarCardProps {
  car: CarProps;
}

const CarCard = ({ car }: CarCardProps) => {
  const { city_mpg, year, make, model, transmission, drive } = car;

  const [isOpen, setIsOpen] = useState(false)

  const carRent = calculateCarRent(city_mpg, year)
  return <div className="car-card group">
    <div className="">
        <h2 className="">{make} {model}</h2>
    </div>
    <p className="flex mt-6 text-[32px] font-extrabold">
        <span >
           $ {carRent}
        </span>
    </p>

    <div className="relative w-full h-40 my-3 object-contain">
        <Image src="/hero.png"  alt="car model" fill priority className="object-contain"/>
    </div>

    <div className="relative flex w-full mt-2">
        <div className="flex ">
            <div>
                <Image src="/steering-wheel.svg" width={20} height={20} alt="steering wheel" />
                <p>{transmission === 'a' ? 'Automatic' : 'Manual'}</p>
            </div>

            <div>
                <Image src="/tire.svg" width={20} height={20} alt="Tyre" />
                <p>{drive.toUpperCase()}</p>
            </div>

            <div>
                <Image src="/gas.svg" width={20} height={20} alt="Fuel" />
                <p>{city_mpg}</p>
            </div>

        </div>

        <div>
            <CustomButton title="View More" containerStyles="w-full py-[16x] bg-primary-blue text-white rounded-xl" handleClick={()=> setIsOpen(true)} />
        </div>

    </div>
  </div>;
};

export default CarCard;
