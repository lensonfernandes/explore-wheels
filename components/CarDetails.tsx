"use client";

import { CarProps } from "@/types";
import React from "react";
import Image from "next/image";
import { Fragment } from "react";
import { Dialog } from "@headlessui/react";

interface CarDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  car: CarProps;
}

const CarDetails = ({ isOpen, closeModal, car }: CarDetailsProps) => {
  return (
    <Dialog as="div" className="relative z-10" onClose={closeModal} open={isOpen}>
      <div className="fixed inset-0 overflow-y-auto">
        <div>
          <Dialog.Panel>
            <button
              type="button"
              onClick={closeModal}
              className="absolute  top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100"
            >
              <Image
                src="/close.svg"
                width={20}
                height={20}
                className="object-contain"
                alt="close"
              />
            </button>
            <div className="relative  w-full h-40 bg-pattern bg-cover bg-center rounded-lg">
              <Image
                src="/hero.png"
                alt="car model"
                fill
                priority
                className="object-contain"
              />
            </div>
            <div className="flex gap-3">
                <div>

                </div>

            </div>

            <div className="flex-1 flex flex-col gap-2">
                <h2> {car.make} {car.model} </h2>
            </div>

            <div>
                {Object.entries(car).map(([key,value])=> (
                    <div> <h4>{key}</h4>
                    <p>{value}</p></div>
                ))}
            </div>
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  );
};

export default CarDetails;
