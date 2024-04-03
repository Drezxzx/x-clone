import mySql from 'serverless-mysql'

export default async function connect() {
    try {
        const con =  mySql(
            {
                config:{
                    host: "localhost",
                    database: "xclone",
                    user: "root",
                    password: "",
                    port: 3306
                }
            }
        )
        if (con) {
            console.log(con);
            return con 
        }
    } catch (error) {
        
        console.log(error);
        
    }
    
}