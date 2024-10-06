import connectDB from "@/lib/db"
import User from "@/lib/models/UserModel"
import { NextResponse } from "next/server"

export async function POST(req:any){
    const {name, email, password}  = await req.json()
    if(!name || !email || !password ){
        throw new Error("Please fill in all fields")
    }
    try {
         await connectDB()
         const user = new User({name, email, password})
         await user.save()
        return NextResponse.json({message:"User created successfully"}, {status: 200})
    } catch (error) {
        console.log(error);
        return NextResponse.json({message:error}, {status: 400})
    }
}

export async function GET(){
    try {
        const users = await User.find({})
        return NextResponse.json(users, {status: 200})
    } catch (error) {
        return NextResponse.json({message:error}, {status: 400})
    }
}