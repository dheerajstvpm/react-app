import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  return (
    <>
      <div className='top-content'>
        <Header />
        <MainContent />
      </div>
      <Footer />
    </>
  )
}

function Header() {
  return (
    <header>
      <img src={reactLogo} className='nav-logo' alt="React Logo" />
      <nav>
        <ul className='nav-list'>
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  )
}

function MainContent() {
  return (
    <main>
      <h1>Reasons I'm excited to learn React</h1>
      <ol className='main-list'>
        <li>I hear it future proofs my career</li>
        <li>I hear it is easy compared to Angular</li>
        <li>It improves my chances of getting a job</li>
      </ol>
    </main>
  )
}

function Footer() {
  return (
    <footer>
      <small>© 2025 My development. All rights reserved.</small>
    </footer>
  )
}

export default App
