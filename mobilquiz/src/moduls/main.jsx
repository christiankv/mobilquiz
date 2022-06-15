export default function Main(){
    function Login(){
        return( <div className="login">
            <div className="username">
                <label htmlFor="username">username:<input type="text" name="username" id="username" /></label> 
            </div>
            <div className="createuser-button">======></div>
          </div>)
    }

    return(
        <div className="main"><Login/></div>

    )
}