export default function Main(){

    function Login(){
        return( <div className="login ">
            <div className="username bgB">
                <label htmlFor="username">username:<input  type="text" name="username" id="username" /></label> 
            </div>
            <div className="createuser-button bgB">create user</div>
          </div>)
    }

    function Quiz(){
        return(
            <div className="quiz">
                <div className="question bgB">
                    <h3>question?</h3>
                </div>

                <div className="Choice">
                    <div className="answers bgB"> <p>3</p></div>
                    <div className="answers bgB"> <p>2</p></div>
                    <div className="answers bgB"><p>1</p></div>
                </div>
            </div>
        )
    }

    return(
        <div className="main">
            <Quiz/>
            {/* <Login/> */}
            </div>

    )
}