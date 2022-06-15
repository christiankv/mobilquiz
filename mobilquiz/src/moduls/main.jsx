export default function Main(){

    function Login(){
        return( <div className="login ">
            <div className="username bgB">
                <label htmlFor="username">username:<input  type="text" name="username" id="username" /></label> 
            </div>
            <div className="createuser-button bgB">create user</div>
          </div>)
    }

    return(
        <div className="main"><Login/></div>

    )
}