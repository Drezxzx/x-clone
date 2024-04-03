import { NextResponse } from "next/server";
import connect from "@/lib/conect";

export async function  GET(req : Request, 
{username, password}:{username : string, password : string}){
    try {
        const db = await connect();

        const result = await db?.query("SELECT * FROM users");
    
        console.log(result);
        
        if (result) {
            db?.end()
        }
    return NextResponse.json({
        data: result
    })

    } catch (error) {
        console.log(error);
        
    }
}

export async function POST(req : Request){
    try {
        const db = await connect();
        
        const {username,password} = await req.json()
        const chech = await db?.query("SELECT * FROM users WHERE username = ?", [username]) as any;

        if (chech.length > 0) {
            db?.end()
            return NextResponse.json({
                error: "existe un useario con este nombre"
            })
        }   
        const result = await db?.query("INSERT INTO users (username, password) VALUES (?, ?)", [username,password]) as any;

        if (result.affectedRows > 0) {
            db?.end()
        }
        console.log(result);
        
        return NextResponse.json({
            username, password
        })

    } catch (error) {
        console.log(error);
    }
}