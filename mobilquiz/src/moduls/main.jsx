import React from "react"
import Quiz from "./Menu-items/quiz"

export default function Main(){
    const [version, setversion] = React.useState("menu")
    function Login(){
        return( <div className="login ">
            <div className="username bgB">
                <label htmlFor="username">username:<input  type="text" name="username" id="username" /></label> 
            </div>
            <div className="createuser-button bgB">create user</div>
          </div>)
    }

    function Menu(){
        return(
            <div className="menu">
                <div className="Mbutton bgB" id="task" onClick={menuClick}>
                    tasks
                </div>
                <div className="Mbutton bgB" id="quiz" onClick={menuClick}>
                    quiz
                </div>
            </div>
        )
    }



    // let version = "menu"

    function menuClick(e){
        const id = e.target.id 
        setversion(id);
    }
    function pageV(version){
        if (version === "menu"){
       return (<Menu/>)}
       else if (version === "task"){
        return(<Quiz 
        vers="task"
        />)
       }else if (version === "quiz"){
        return <Quiz 
        vers = "quiz" />
       }
    }
            {/* <Quiz/> */}
            {/* <Login/> */}
            {/* <Menu/> */}



    return(
        <div className="main">
            {pageV(version)}
            </div>

    )
}