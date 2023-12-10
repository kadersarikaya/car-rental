"use client"
import React, {useState} from "react";
import Rating from "@/components/Rating";
import { GoHeartFill } from "react-icons/go";
import Button from "@/components/Button";

const productData = {
    images: [
        "https://via.placeholder.com/148x124",
        "https://via.placeholder.com/148x124/0000FF/808080?text=Image+2",
        "https://via.placeholder.com/148x124/008000/FAFAFA?text=Image+3",
    ],
};

const CarDetail = () => {
    const [selectedImage, setSelectedImage] = useState(productData.images[0]);
    const [showReview, setShowReview] = useState(false)
    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    const handleShowReview = () => {
        setShowReview(true)
    }

  return (
    <div className="flex flex-col gap-8 items-center justify-center py-16 px-4">
        <div className="flex gap-8">
            <div className="">
                <img 
                width={492} 
                height={360} 
                src={selectedImage} 
                className="rounded-lg"
                />
                <div className="flex justify-between pt-6 items-center">
                    {productData.images.map((image, index) => (
                        <img 
                        key={index} 
                        src={image} 
                            className={`rounded-lg cursor-pointer border-4 ${selectedImage === image ? "border-white" : "border-transparent"
                            }`}
                        alt={`Car ${index + 1}`}
                        onClick={() => handleImageClick(image)}
                        />
                    ))}
                </div>
            </div>
            <div className="bg-white rounded-lg p-6 flex flex-col justify-between w-[492px] h-auto">
                <div className="flex justify-between">
                    <div className="">
                        <h1 className="text-3xl font-bold" >Nissan GT - R</h1>
                        <div className="flex gap-1 pt-4 items-center">
                            <Rating value={2}/>
                            <p className="text-sm text-gray-400 font-medium">440+ Reviewer</p>
                        </div>
                    </div>
                    <div className="">
                        <GoHeartFill className="text-xl text-red-500"/>
                    </div>
                </div>
                <div className="">
                    <p className="text-gray-400 text-xl leading-10 font-medium">NISMO has become the embodiment of 
                    Nissan's outstanding performance, 
                    inspired by the most unforgiving 
                    proving ground, the "race track".
                    </p>
                </div>
                <div className="flex gap-8">
                    <div className="">
                        <div className="flex gap-4">
                            <p className="text-lg text-gray-400">Type Car</p>
                            <p className="text-lg text-gray-700">Sport</p>
                        </div>
                          <div className="flex gap-4">
                            <p className="text-lg text-gray-400">Steering</p>
                            <p className="text-lg text-gray-700">Manual</p>
                        </div>
                    </div>
                    <div className="">
                        <div className="flex gap-4">
                            <p className="text-lg text-gray-400">Capacity</p>
                            <p className="text-lg text-gray-700">2 Person</p>
                        </div>
                          <div className="flex gap-4" >
                            <p className="text-lg text-gray-400">Gasoline</p>
                            <p className="text-lg text-gray-700">70 L</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between gap-3 items-center">
                    <div className="">
                        <div className="flex items-center">
                            <p className="text-xl font-bold" >$99.00/ </p>
                            <span className="font-medium text-gray-400 text-sm"> day</span>
                        </div>
                        <span className="font-medium line-through text-gray-400 text-sm">$100</span>
                    </div>
                    <Button btntext="Rent Now" />
                </div>
            </div>
        </div>
        <div className="bg-white p-6 rounded-lg w-full h-auto">
            <div className="flex gap-2">
                <h1 className="text-xl font-semibold">Reviews</h1>
                <div className="font-bold text-sm text-white rounded-sm bg-indigo-600 py-1 px-5">13</div>
            </div>
            <div className="flex flex-col gap-6">
                <div className="flex flex-col pt-6">
                    <div className="flex justify-between">
                        <div className="text-lg font-bold">Alex Stanton</div>
                        <div className="flex flex-col space-y-1">
                            <p className="text-gray-400 font-medium text-sm">21 July 2022</p>
                            <Rating value={4}/>
                        </div>
                    </div>
                    <div className="text-gray-400 text-sm">
                        We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="flex justify-between">
                        <div className="text-lg font-bold">Alex Stanton</div>
                        <div className="flex flex-col space-y-1">
                            <p className="text-gray-400 font-medium text-sm">21 July 2022</p>
                            <Rating value={4} />
                        </div>
                    </div>
                    <div className="text-gray-400 text-sm">
                        We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.
                    </div>
                </div>
                {showReview && 
                    <div className="flex flex-col">
                        <div className="flex justify-between">
                            <div className="text-lg font-bold">Alex Stanton</div>
                            <div className="flex flex-col space-y-1">
                                <p className="text-gray-400 font-medium text-sm">21 July 2022</p>
                                <Rating value={4} />
                            </div>
                        </div>
                        <div className="text-gray-400 text-sm">
                            We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.
                        </div>
                    </div>
                }
            </div>
              {showReview ? "" 
              : 
              <div className="flex justify-center ">
                    <button onClick={handleShowReview} className="items-center text-gray-400 text-base font-semibold flex" >
                    Show All
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M8.00026 11.1994C7.53359 11.1994 7.06692 11.0194 6.71359 10.6661L2.36692 6.31944C2.17359 6.12611 2.17359 5.80611 2.36692 5.61277C2.56026 5.41944 2.88026 5.41944 3.07359 5.61277L7.42026 9.95944C7.74026 10.2794 8.26026 10.2794 8.58026 9.95944L12.9269 5.61277C13.1203 5.41944 13.4403 5.41944 13.6336 5.61277C13.8269 5.80611 13.8269 6.12611 13.6336 6.31944L9.28692 10.6661C8.93359 11.0194 8.46692 11.1994 8.00026 11.1994Z" fill="#90A3BF" stroke="#90A3BF" stroke-width="0.5" />
                    </svg>
                </button>
              </div>
              }
        </div>
    </div>
  );
};

export default CarDetail;
