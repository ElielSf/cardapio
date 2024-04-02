import Header from './components/Header.jsx'
import Menu from './components/Menu.jsx'
import './css/App.css'

export default function App() {
  return (
    <div className='App'>
      <header><Header /></header>
      <main><Menu /></main>
    </div>
  )
}