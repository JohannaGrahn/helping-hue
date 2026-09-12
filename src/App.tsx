import './App.css'
import PaletteIcon from '@mui/icons-material/Palette'

function App() {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand-mark" aria-label="Helping Hue home">hh</div>
        <nav aria-label="Main navigation">
          <button className="nav-item active" type="button" aria-label="Palette workspace"><span aria-hidden="true"><PaletteIcon /></span><span>Palette</span></button>
        </nav>
      </aside>

      <main className="workspace">
        <header className="topbar">
          <h1>Helping Hue</h1>
        </header>
      </main>
    </div>
  )
}

export default App
