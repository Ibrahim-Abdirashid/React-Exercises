import { useState } from "react";


const LoginForm = ()=>{
    const [username , setUsername] = useState("")
    const [password , setPassword] = useState("")
    const [login, setLogin] = useState(false)


    const handleLoging = (e)=>{
        e.preventDefault()
        if(username && password){
            setLogin(true)
        }
    }

        const handleLogOut = ()=>{
            setLogin(false)
            setPassword('')
            setUsername('')
        }

        if(login){
            return(
                <div>
                    <h1>welcome, {username}</h1>
                    <button onClick={handleLogOut}>Logout</button>
                </div>
            )
        }



    
    return(
        <form  onSubmit={handleLoging}>
        <div>
            <label htmlFor="">Username:</label>
            <input type="text" 
                value={username}
                onChange={(e)=> setUsername(e.target.value)}
                required
            /> <br />
            <label htmlFor="">Password</label>
            <input type="password"
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}
                    required
            />

            <button type="submit">Login</button>
        </div>
        </form>
    )
}
export default LoginForm;