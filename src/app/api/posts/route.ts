import { NextResponse } from "next/server"
import {v2 as cloudinary} from 'cloudinary';
import conect from '@/lib/conect'
import {writeFile} from 'fs/promises'
type Cloud = {
    secure_url: string;
}
export async function POST(req: Request) {
    const connectClaud =   cloudinary.config({
        cloud_name: process.env.CLOUD_NAME,
        api_key: process.env.API_KEY,
        api_secret: process.env.API_SECRET
    });
    const data = await req.formData();
    const img = data.get('image') as File;
    const id = data.get('id') ;
    const description = data.get('description') as File;
    const imgBuffer = await img.arrayBuffer()
    const buffer = Buffer.from(imgBuffer) 
    
    
    const result = await new Promise ((reslve, reject) =>{
        cloudinary.uploader.upload_stream({}, 
        (err, res : any)=>{
         if (err) {
             reject(err)
         }
        reslve(res)
            
        }).end(buffer) 
    }) as Cloud

    console.log(result.secure_url);
    

    
    if(!result){
        return NextResponse.json({

            error : "Internal error"
        }).status.toString(500)
    }
    
    const db = await conect()

    
    if(!db){
        return NextResponse.json({

            error : "Internal error"
        }).status.toString(500)
    }
   
    const query = await db.query('INSERT INTO posts(user_id, description, img) VALUES(?, ?, ?);', [id, description, result.secure_url])

    if (query) {
        return NextResponse.json({
            data : query
        })
        
    }
}

export async function GET(req : Request) {
    const db = await conect()
    const query = await db?.query('SELECT * FROM posts')
    return NextResponse.json({
        data : query
    })
}