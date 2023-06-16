import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {

    const {searchParams} = new URL(req.url)
    const bodypart = searchParams.get('bodypart') as string 
    const equipment = searchParams.get('equipment') as string

    let res = await fetch(`https://jflo55.pythonanywhere.com/api/exercises/${bodypart}/${equipment}`,{method: 'GET'});
    const data = await res.json();

    return  NextResponse.json({data});

} 