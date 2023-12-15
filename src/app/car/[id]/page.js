"use client"
import React, {useEffect, useState} from "react";
import Rating from "@/components/Rating";
import { GoHeartFill, GoHeart } from "react-icons/go";
import Button from "@/components/Button";
import { useParams } from "next/navigation";
import axios from "axios";
import { toggleFavorite } from "@/store/favoritesSlice";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { selectTheme } from '@/store/themeSlice';

const CarDetail = () => {
    const [showReview, setShowReview] = useState(false)
    const [loading, setLoading] = useState(true)
    const [selectedImage, setSelectedImage] = useState()
    const isDarkMode = useSelector(selectTheme);

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };
    const [car,setCar] = useState();
    const {id} = useParams()

    const getCar = async () => {
        try {
            const res = await axios.get(`https://car-rental-api-0vx2.onrender.com/cars/${id}`)
            setCar(res.data)
            setSelectedImage(res.data?.detailImages?.length ? res.data.detailImages[0] : res.data?.carImage);
            setLoading(false)
        }
        catch (error) {
            console.log(error);
        }
    } 

    const handleShowReview = () => {
        setShowReview(true)
    }

    useEffect(()=> {
        getCar()
    }, [id])

    const favorites = useSelector((state) => state.favorites);
    const dispatch = useDispatch()

    const handleFavoriteToggle = () => {
        dispatch(toggleFavorite({ id: car?.id }));
    };

  return (
    <div className="flex flex-col gap-8 items-center justify-center pt-8 pb-16 px-4 md:px-8">
        {
          loading 
            ? 
            <div className="animate-pulse rounded-lg bg-gray-200 w-full h-[360px] md:w-[492px] md:h-[492px]" />
            :
            <>
                <div className="flex lg:flex-row flex-col gap-8">
                <div className="">
                    <div className="">
                        <img 
                            width={492} 
                            height={360} 
                            src={selectedImage}                            className="rounded-lg w-[492px] h-[360px]"
                        />
                        <div className="flex lg:justify-between flex-wrap pt-6 items-center">
                            {car?.detailImages?.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    className={`rounded-lg w-32 h-32 cursor-pointer border-4 ${selectedImage === image ? "border-white" : "border-transparent"
                                        }`}
                                    alt={`Car ${index + 1}`}
                                    onClick={() => handleImageClick(image)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                    <div className={`${isDarkMode ? "bg-[#333] text-white" : "bg-white text-gray-700"} rounded-lg p-6 flex flex-col gap-4 justify-between md:w-[492px] h-auto`}>
                    <div className="flex justify-between">
                        <div className="">
                            <h1 className="text-3xl font-bold" >{car?.title}</h1>
                            <div className="flex gap-1 pt-4 items-center">
                                <Rating value={car?.rating || 4}/>
                                <p className="text-sm font-medium">({car?.reviews?.length || 1} Reviewer)</p>
                            </div>
                        </div>
                        <div className="">
                            <div className="">
                                {!favorites[car?.id] ? (
                                    <button onClick={() => handleFavoriteToggle(car?.id)}>
                                        <GoHeart className="text-lg text-red-500" />
                                    </button>
                                ) : (
                                    <button onClick={() => handleFavoriteToggle(car?.id)}>
                                        <GoHeartFill className="text-lg text-red-500" />
                                    </button>
                                )}
                            </div>
                        </div>
                     </div>
                    <div className="">
                        <p className="text-lg md:text-xl leading-0 md:leading-8 font-medium">
                            {car?.description}
                        </p>
                    </div>
                    <div className="flex gap-8">
                        <div className="">
                            <div className="flex gap-4">
                                <p className="text-lg">Type Car</p>
                                <p className="text-lg font-medium">{car?.type}</p>
                            </div>
                            <div className="flex gap-4">
                                <p className="text-lg">Steering</p>
                               <p className="text-lg font-medium">{car?.steering}</p>
                            </div>
                        </div>
                        <div className="">
                            <div className="flex gap-4">
                                <p className="text-lg">Capacity</p>
                                <p className="text-lg font-medium">{car?.capacity} Person</p>
                            </div>
                            <div className="flex gap-4" >
                                <p className="text-lg">Gasoline</p>
                                <p className="text-lg font-medium">{car?.liter} L</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between gap-3 items-center">
                        <div className="">
                            <div className="flex items-center">
                               <p className="text-xl font-bold" >${car?.price}/ </p>
                                <span className="font-mediumtext-sm"> day</span>
                            </div>
                            {car?.priceOnSale && <span className="font-medium line-through text-sm">${car.priceOnSale}</span>}
                        </div>
                        <Link href={`${car.id}/payment`}>
                            <Button btntext="Rent Now" />
                        </Link>
                    </div>
                </div>
                </div>
                      <div className={`${isDarkMode ? "bg-[#333] text-white" : "bg-white text-black"} text-black p-6 rounded-lg w-full h-auto`}>
                    <div className="flex gap-2">
                        <h1 className="text-xl font-semibold">Reviews</h1>
                        <div className="font-bold text-sm text-white rounded-sm bg-indigo-600 py-1 px-5">
                            {car?.reviews?.length || 1}
                        </div>
                    </div>
                    <div className="flex flex-col">
                        {car?.reviews?.map((review)=> (
                            <div className="flex flex-col pt-6">
                                <div className="flex justify-between">
                                    <div className="text-lg font-bold">{review?.name}</div>
                                    <div className="flex flex-col space-y-1">
                                        <p className="text-gray-400 font-medium text-sm">21 July 2022</p>
                                        <Rating value={review?.rating}/>
                                    </div>
                                </div>
                                <div className="text-gray-400 text-sm">
                                    {review.comment}
                                </div>
                            </div>
                        ))}
                        {showReview && 
                            <div className="flex flex-col pt-6">
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
            </>
        }
    </div>
  );
};

export default CarDetail;
