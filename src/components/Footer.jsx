import React from 'react'

export default function Footer() {
  return (
    <>
        <footer style={{ padding: "10px", background: "#222", color: "#fff", textAlign: "center" }}>
            <p>© {new Date().getFullYear()} Mon Portfolio - Tous droits réservés</p>
        </footer>
    </>
  )
}
