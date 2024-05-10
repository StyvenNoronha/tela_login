import { FaUser, FaLock} from "react-icons/fa"
import { useState } from "react"
import "./login.css"
const Login = () => {
    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")

    const handSubmit = (event) => {
        event.preventDefault();
        alert("envio de dados")
        alert("Enviando dados " + username +" senha: "+ password)
          
    }

  return (
    <div className="container">
        <form onSubmit={handSubmit}>
            <h1>Acesse o sistema</h1>
            <div className="input-field" >
                <input type="email" placeholder='Digite seu email' onChange={(e)=> setusername(e.target.value)} />
                <FaUser className="icon" />
            </div>
            <div className="input-field">
                <input type="password" placeholder='Digite seu Senha' onChange={(e)=> setpassword(e.target.value)} />
                <FaLock className="icon" />
            </div>
            <div className="recall-forget">
                <label htmlFor="">
                    <input type="checkbox" />
                    lembre de mim 
                </label>
                <a href="#">Esqueceu minha senha</a>
            </div>
            <button>Entrar</button>  
            <div className="signup-link">
                <p>Não tem conta? <a href="#">Registrar</a></p>
            </div>
        </form>
    </div>
  )
}

export default Login
