"use client"
import React, { useEffect, useState, useMemo } from "react";
import Card from "@/components/Card";
import { useSelector, useDispatch } from "react-redux";
import { toggleFavorite } from "@/store/favoritesSlice";
import axios from "axios";

const Favorites = () => {
  const favorites = useSelector((state) => state.favorites);
  const [cars, setCars] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCars = async () => {
      const response = await axios.get('http://localhost:4000/cars');
      setCars(response.data);
    };
    fetchCars();
  }, []);

  const favCars = useMemo(() => {
    return cars.filter((fav) => favorites[fav.id]);
  }, [favorites, cars]);

  return (
    <div className="flex min-h-screen flex-col p-4">
      <h2 className="text-xl font-semibold py-4" >Favorites: {favCars.length} </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {favCars.map((fav) => (
          <Card
            car={fav}
          />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
