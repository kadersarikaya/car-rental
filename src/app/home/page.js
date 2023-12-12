"use client"
import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from '@/components/Button'
import Card from '@/components/Card'
import Image from 'next/image'
import { fetchCars } from '@/store/carSlice'

export default function Home() {
  const dispatch = useDispatch();
  const { cars, loadingCars } = useSelector((state) => state.cars);
 
  function getAllCarInformation() {
    // Map through the car data
    return Object.keys(cars).map((carId) => {
      const car = cars[carId];

      // Access car information
      const carInfo = {
        id: car.id,
        title: car.title,
        description: car.description,
        type: car.type,
        capacity: car.capacity,
        liter: car.liter,
        price: car.price,
        priceOnSale: car.priceOnSale,
        rating: car.rating,
        steering: car.steering,
        carImage: car.carImage,
        detailImages: car.detailImages,
        reviews: car.reviews?.map((review) => ({
          comment: review.comment,
          name: review.name,
          rating: review.rating,
        })),
      };

      return carInfo;
    });
  }

  const allCarInformation = getAllCarInformation();
  const popularCars = allCarInformation.filter((car) => car.rating <4);

  useEffect(()=> {
    dispatch(fetchCars());
    console.log(cars); // Log the state to see if it contains the cars array
  },[dispatch])

  if(loadingCars) {
    return <div>Loading...</div>
  }

  return (
    <section className="flex justify-center items-center flex-col px-4">
      <div>
        <div className="flex justify-center items-center md:gap-3 py-6">
          <Image
            className="md:w-1/2"
            width={640}
            height={360}
            src="/ads1.png"
          />
          <Image
          className="hidden md:w-1/2 md:block"
            width={640}
            height={360}
            src="/ads2.png"
          />
        </div>
        <div className="flex py-7 justify-between">
          <p className="text-gray-400 font-semibold text-base">Popular Cars</p>
          <p className="text-indigo-600 font-semibold cursor-pointer justify-end">View All</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-6">
          {popularCars.splice(0, 4).map((car) => (
            <Card key={car.key} car={car} />
          ))}
        </div>
        <div className="py-7">
          <p className="text-gray-400 font-semibold text-base">Recommendation Cars</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-6">
        {allCarInformation.splice(0,4).map((car)=> (
          <Card key={car.key} car={car} />
        ))}
        </div>
        <div className="py-16 flex justify-center">
          <Button btntext="Show more car" />
        </div>
      </div>
    </section>
  )
}
