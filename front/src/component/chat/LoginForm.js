import { useState } from "react"
import axios from "axios"

const projectID = "5c13d0fd-49f8-4447-aa5c-7754ad15f60c"
const LoginForm = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()

    const authObject = {
      "Project-ID": projectID,
      "User-Name": username,
      "User-Secret": password,
    }

    try {
      // username 또는 password를 chatengine에 보낸다.
      await axios.get("https://api.chatengine.io/chats", { header: authObject })

      localStorage.setItem("username", username)
      localStorage.setItem("password", password)

      window.location.reload()
      // username 과 password가 존재한다면 로그인
    } catch (error) {}
    // 그렇지 않다면 에러메시지를 출력한다.
    setError("아이디와 비밀번호를 다시 확인해주세요")
  }

  return (
    <div className="chat-wrapper">
      <div className="form">
        <h1 className="chat-title">트레이너 피드백</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input"
            placeholder="Username"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
            placeholder="Password"
            required
          />
          <div align="center">
            <button type="submit" className="button">
              <span>Start chatting</span>
            </button>
          </div>
          {error}
        </form>
      </div>
    </div>
  )
}

export default LoginForm
