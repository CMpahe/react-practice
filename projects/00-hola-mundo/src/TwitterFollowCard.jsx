//importamos el useState que sirve para establecer estados en los componentes
import { useState } from "react"

//TwitterFollowCard es un elemento que devuelve un articulo 
export function TwitterFollowCard ({formatUserName, userName, name}) {
    
    //se crea el estado para verificar si se esta siguiendo al usuario con una constante que es un array y dos variables dentro del array que representan el estado y la función para cambiar dicho estado respectivamente
    const [isFollowing, setIsFollowing] = useState(false)
    
    //se crea una constante que verifica el estado de un elemento para devolver un resultado dependiendo del estado
    const text = isFollowing ? 'Siguiendo' : 'Seguir'

    //se crea una constante que evalua el mismo estado pero que va a devolver un elemento que contiene las clases con estilos para cada estado
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return (
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img 
                alt="avatar" 
                src={`src/img/${userName}.jpg`}
                className="tw-followCard-avatar"></img>
                <div className="tw-followCard-info">
                    <strong>{name}</strong>
                    <span className="tw-followCard-infoUserName">{formatUserName(userName)}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className="tw-followCard-text">{text}</span>
                    <span className="tw-followCard-stopFollow">Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}