"use client"
import React, {useState, useEffect} from 'react'
import Button from '@/components/Button'
import Card from '@/components/Card'
import Image from 'next/image'
import axios from 'axios'
import SkeletonCard from '@/components/SkeletonCard'
import Link from 'next/link'

export default function Home() {
const [cars,setCars] = useState([])
const [isLoading, setLoading] = useState(true)

useEffect(() => {
  axios
    .get('https://car-rental-api-0vx2.onrender.com/cars')
    .then(res => {
      setCars(res.data)
      setLoading(false)
    })
    .catch(err => console.log(err));
},[])

  const popularCars = cars.filter((car)=>car.rating>3)

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
          <Link href="/category">
            <p className="text-indigo-600 font-semibold cursor-pointer justify-end hover:underline">View All</p>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-6">
          {isLoading
            ? Array.from({ length: 4 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))
            : popularCars.splice(0, 4).map((car) => (
              <Card car={car} />
            ))}
        </div>
        <div className="py-7">
          <p className="text-gray-400 font-semibold text-base">Recommendation Cars</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-6">
          {isLoading
            ? Array.from({ length: 4 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))
            : cars.splice(0, 4).map((car) => (
              <Card car={car} />
            ))}
        </div>
        <div className="py-16 flex justify-center">
          <Link href="/category">
            <Button btntext="Show more car" />
          </Link>
        </div>
      </div>
    </section>
  )
}
