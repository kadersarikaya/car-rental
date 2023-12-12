import React from "react";
import { FaGasPump } from "react-icons/fa";
import Button from "./Button";
import { TbSteeringWheel } from "react-icons/tb";
import { IoPeople } from "react-icons/io5";
import { GoHeart, GoHeartFill } from "react-icons/go";
import Image from "next/image";
import Link from "next/link";

const Card = React.memo = ({car, key}) => {
    return (
        <div key={key} className="w-full flex flex-col justify-between h-full text-black rounded-lg p-6 bg-white">
            <Link href={`car/${car.id}`}>
                <>
                    <div className="flex justify-between">
                        <div className="">
                            <h1 className="text-xl font-bold">{car?.title}</h1>
                            <span className="text-sm font-bold text-gray-400">{car?.type}</span>
                        </div>
                        <div className="">
                            <button>
                                <GoHeart className="text-lg" />
                            </button>
                        </div>
                    </div>
                    <div className="flex justify-between md:block md:justify-start">
                        <img
                            className="py-16 mx-auto"
                            src={car?.carImage}
                            width={204}
                            height={70}
                        />
                        <div className="flex flex-col md:flex-row justify-between">
                            <div className="flex gap-1 items-center">
                                <FaGasPump className="text-gray-400 text-md font-medium" />
                                <p className="text-gray-400 text-sm font-medium">{car?.liter}L</p>
                            </div>
                            <div className="flex gap-1 items-center">
                                <TbSteeringWheel className="text-gray-400 text-lg font-medium" />
                                <p className="text-gray-400 text-sm font-medium">{car?.steering}</p>
                            </div>
                            <div className="flex gap-1 items-center">
                                <IoPeople className="text-gray-400 text-lg font-medium" />
                                <p className="text-gray-400 text-sm font-medium">{car?.capacity }People</p>
                            </div>
                        </div>
                    </div>
                </>
            </Link>
            <div className="flex py-6 justify-between gap-3 items-center">
                <div className="">
                    <div className="flex items-center">
                        <p className="text-xl font-bold" >${car?.price}/ </p>
                        <span className="font-medium text-gray-400 text-sm"> day</span>
                    </div>
                    {car.priceOnSale && <span className="font-medium line-through text-gray-400 text-sm">${car?.priceOnSale}</span>}
                </div>
                <Button btntext="Rent Now" />
            </div>
        </div>
    )
};

export default Card;
