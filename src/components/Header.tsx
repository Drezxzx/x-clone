import {IconHomeFilled,IconUser,IconSearch} from '@tabler/icons-react'
import Link from 'next/link'
export default function Header() {
    const ROUTES = [
        {name : "Inicio", 
         route : "/",
         icon : <IconHomeFilled/>},
         {name : "Perfil", 
         route : "/perfil",
         icon : <IconUser/>},
         {name : "Buscar", 
         route : "/search",
         icon : <IconSearch/>},
        
    ]
    return(
        <header>
            <ul>
            {ROUTES.map(route =>(
                <Link key={route.route} href={route.route}>{route.icon} {route.name}</Link>
            ))}
            </ul>
        </header>
    )
}