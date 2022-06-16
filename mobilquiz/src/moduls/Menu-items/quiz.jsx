import React from "react"


export default function Quiz(prop){
    let [versionset, setversionset] = React.useState(false) 
    function Qchoice(){
        let theme = ""
        if (versionset === false){
            return ( 
                <div className="theme"> 
                <h2>Choose theme</h2>
                <div className="Mbutton bgB" id="html" onClick={(e)=> {
                    theme = e.target.id
                    console.log(theme);
                    console.log(prop.vers);
                    setversionset(true)
                }}>html</div>
                <div className="Mbutton bgB" id="css" onClick={(e)=> {
                    theme = e.target.id
                    console.log(theme);
                    console.log(prop.vers)
                    setversionset(true)
                }}>Css</div>
                <div className="Mbutton bgB" id="js" onClick={(e)=> {
                    theme = e.target.id
                    console.log(theme);
                    console.log(prop.vers)
                    setversionset(true)
                }}>javascript</div>      
                </div>        
            )
} else if (versionset){
    return(
        <div className="quiz">
        <div className="question bgB">
            <h3>question?</h3>
        </div>


        <div className="Choice">
            <div className="answers bgB"><p>3</p></div>
            <div className="answers bgB"><p>2</p></div>
            <div className="answers bgB"><p>1</p></div>
        </div>
    </div>
    )
}
    }

    return(
        <>
        <Qchoice/>
        </>
        
    )
}