import React from "react"
import { Link } from "gatsby"

const Menu = () => (
  <div style={{ background: "f4f4f4", paddingTop: "1em" }}>
    <ul
      style={{
        listStyle: "none",
        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/services">Services</Link>
      </li>
      <li>
        <Link to="/page-2">Page 2</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      <li>
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
      </li>
    </ul>
  </div>
)

export default Menu
