import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <Page />
      <Footer />
    </>
  )
}

function Header() {
  return (
    <img src={reactLogo} width="40px" alt="React Logo" />
  )
}

function Page() {
  return (
    <main>
      <h1>Reasons I'm excited to learn React</h1>
      <ol>
        <li>I hear it future proofs my career</li>
        <li>I hear it is easy compared to Angular</li>
        <li>It improves my chances of getting a job</li>
      </ol>
    </main>
  )
}

function Footer() {
  return (
    <p>© 2025 Me development. All rights reserved.</p>
  )
}

export default App
