import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {

    const {searchParams} = new URL(req.url)
    const calories = searchParams.get('calories') as string 
    console.log('Calories are ',calories)
    let res = await fetch(`https://api.spoonacular.com/mealplanner/generate?apiKey=${process.env.SPOONAPI}&timeFrame=day&targetCalories=${calories}`,{method: 'GET'});
    const data = await res.json();
    console.log('Data is ',data);
    return  NextResponse.json({data});

} 