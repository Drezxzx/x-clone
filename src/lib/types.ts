export interface APIData {
    data: Datum[];
  }
  
   export interface Datum {
    id:          number;
    user_id:     number;
    description: string;
    img:         string;
    created_at:  Date;
  }

export type user ={
    data : {
        id: number ;
        name: string ;
        password: string;
        created_at: string;
    }
} 