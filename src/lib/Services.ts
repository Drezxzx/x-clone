import {APIData} from '@/lib/types'

export async function getPublications () {
    const res = await fetch("http://localhost:3000/api/posts") 
  const {data} = await res.json() as APIData
  return data
}