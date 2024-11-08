import './App.scss'

function App() {
  const send = async (e) => {
    e.preventDefault()
    console.log(e.target.num1.value)
    console.log(e.target.num2.value)
  }
  return (
    <div className="App">
      <form className="form_auth_mobile__flex" onSubmit={send}>
        <input type="number" name="num1" />
        <input type="number" name="num2" />
        <button type="submit">Send</button>
      </form>
    </div>
  )
}

export default App
