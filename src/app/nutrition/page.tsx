"use client"

import React, { FormEvent, useState } from 'react'

interface three_meals {
  id: number,
  imageType: string,
  title: string,
  readyInMinutes: number,
  servings: number,
  sourceURL: string

}

export default function Nutrition() {
  const [calories, setCalories] = useState<string>("");
  const [data, setData] = useState<any | null>(null);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()

    const form = event.target as HTMLFormElement
    const res = await fetch(`/api/nutrition/?calories=${calories}`, {cache: 'no-store'})

    if (!res.ok) {
      throw new Error ('Failed to fetch data')
    }
    
    const result = await res.json();
    console.log('Result is ',result.data)
    setData(result.data)
  }

   // Setting calories
  const handleCaloriesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCalories(event.target.value);
  };

  return (
    <div>
       <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
          <div className="mb-4">
            <label htmlFor="year" className="block mb-2 font-bold text-gray-700">
              Calories
            </label>
            <input
              type="number"
              placeholder="Calories"
              min="1500"
              max="2500"
              id="calories"
              name="calories"
              required
              value={calories}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              onChange={handleCaloriesChange}
            />
          </div>
          <button type="submit" className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600">Grab Meals</button>
        </form>
    </div>
  )
}
