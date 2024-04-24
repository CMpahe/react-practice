import './App.css'
import { TwitterFollowCard } from "./TwitterFollowCard";

//la función App es un elemento que devuelve a su vez otro elemento
export function App () {
    //añadiendo función para formatear el user name y añadir @
    //esta función es pasada como un parametro al elemento TwitterFollowCArd
    const formatUserName = (userName) => `@${userName}`

    return (
        //todos estos elementos son envueltos en una sección para porder ser devueltos como un todo
        <section className='App'>
            <TwitterFollowCard 
                formatUserName={formatUserName}  
                userName="cmhp" 
                name="Carlos Manuel Hernández"
            />

            <TwitterFollowCard 
                formatUserName={formatUserName} 
                userName="cmhp" 
                name="Carlos Manuel Palma"
            />
            <TwitterFollowCard 
                formatUserName={formatUserName} 
                userName="cmhp" 
                name="Carlos Manuel Hernández"
            />
        </section>
    )
}