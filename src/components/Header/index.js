import React, { PropTypes } from "react"
import { Link } from "react-router"

const Header = () => (
  <header className="w-100 bg-black white">
    <nav className="dt w-100 mw8 center">
      <div className="dtc w2 v-mid pa3 bg-blue">
        <Link
          className="ttu white no-underline fw8"
          to="/"
        >
          { "Med.JS" }
        </Link>
      </div>
      <div className="dtc v-mid tr pa3">
          <a className="ph3">Eventos</a>
          <a className="ph3">Artículos</a>
          <a className="ph3">Charlas</a>
          <a className="ph3">Comparte</a>
          <a className="ph3">Acerca</a>
          <a className="ph3">Chat</a>
      </div>
    </nav>
  </header>
)

Header.contextTypes = {
  metadata: PropTypes.object.isRequired
}

export default Header
