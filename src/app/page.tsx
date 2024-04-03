/* eslint-disable @next/next/no-img-element */


 interface APIData {
  data: Datum[];
}

 interface Datum {
  id:          number;
  user_id:     number;
  description: string;
  img:         string;
  created_at:  Date;
}

export default async function Home() {
  const res = await fetch("http://localhost:3000/api/posts") 
  const {data} = await res.json() as APIData

  return ( 
    <main className="">
      {
        data.map(post => (
          <div key={post.id}>
          <img src={post.img} alt="" /> 
          <p>{post.description}</p> 
          </div>
        ))
      }
    </main>   
  );
}
