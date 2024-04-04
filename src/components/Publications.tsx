/* eslint-disable @next/next/no-img-element */
"use client"
import {getPublications} from "@/lib/Services";
import { useEffect, useState } from "react";
import {Datum} from '@/lib/types'

export default function Publications() {
    const [data, setData] = useState<Datum[]>()
    useEffect(()=>{
        const fecht = async ()=>{
            const data = await getPublications()
            setData(data)
        }
    },[])

    return (
        <>
         {
            data && data.map(post => (
              <div key={post.id}>
              <img src={post.img} alt="" /> 
              <p>{post.description}</p> 
              </div>
            ))
          }
        </>
       
    )
}