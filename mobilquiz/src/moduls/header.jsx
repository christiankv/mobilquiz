

export default function Header(prop){
    return(
        <div className="header bgB"> 
            <h3>{prop.username}</h3>
            <p>{prop.points}</p>
        </div>

    )
}