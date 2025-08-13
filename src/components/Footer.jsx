import React from 'react'

export default function Footer() {
  return (
    <>
        <footer className="footer footer-horizontal footer-center bg-neutral text-primary-content p-10">

            <p style={{fontSize:"17px"}}>© {new Date().getFullYear()} Orlando - Tous droits réservés</p>
            <div className="grid grid-flow-col gap-4">
                <a
        href="https://www.linkedin.com/in/orlando-nantenaina-4aa964353/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-full transition duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.473 
          0 16 .513 16 1.146v13.708c0 .633-.526 
          1.146-1.175 1.146H1.175C.527 16 0 
          15.487 0 14.854V1.146zM4.943 13.5V6.169H2.542V13.5h2.401zm-1.2-8.449c.837 
          0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 
          0-1.358.54-1.358 1.248 0 .694.521 1.248 
          1.327 1.248h.015zM13.458 13.5V9.359c0-2.221-1.184-3.255-2.762-3.255-1.276 
          0-1.845.7-2.165 1.193v-1.02H6.13c.03.675 0 7.223 0 
          7.223h2.401v-4.033c0-.216.016-.432.08-.586.175-.432.573-.879 
          1.243-.879.877 0 1.229.663 1.229 1.635V13.5h2.375z" />
        </svg>
        LinkedIn
      </a>  
        <a
        href="https://github.com/Nantenaina12"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-full transition duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M8 0C3.58 0 0 3.58 0 8c0 
          3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 
          0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52
          -.01-.53.63-.01 1.08.58 1.23.82.72 1.21 
          1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2
          -3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08
          -.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18
          1.32-.27 2-.27.68 0 1.36.09 2 
          .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 
          1.92.08 2.12.51.56.82 1.27.82 
          2.15 0 3.07-1.87 3.75-3.65 
          3.95.29.25.54.73.54 1.48 0 1.07-.01 
          1.93-.01 2.2 0 .21.15.46.55.38A8.013 
          8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
        GitHub
             </a>
                  <a
        href="mailto:nantenainaorlando1@gmail.com" // Remplace par ton adresse e-mail
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-full transition duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 13.5L2.25 6v12h19.5V6L12 13.5zM12 11.25L21.75 4.5H2.25L12 11.25z" />
        </svg>
        Gmail
      </a>
                <a
        href="https://wa.me/+212651065121"  // Remplace par ton numéro au format international, ex: 33612345678
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-full transition duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M20.52 3.48A11.821 11.821 0 0 0 3.48 20.52l-1.43 4.87 5-1.31a11.821 11.821 0 0 0 13.47-17.6zM12.04 20.08a7.99 7.99 0 0 1-4.22-1.21l-.3-.18-2.98.78.79-2.9-.19-.3a7.95 7.95 0 0 1 1.22-9.99 7.996 7.996 0 0 1 11.34 11.34 7.951 7.951 0 0 1-6.44 2.46zM16.23 14.11c-.27-.14-1.6-.79-1.84-.88-.24-.09-.41-.13-.58.13s-.66.88-.81 1.06c-.15.18-.3.2-.57.07-.27-.13-1.14-.42-2.17-1.34-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.42.12-.56.12-.12.27-.31.4-.46.13-.15.18-.25.27-.42.09-.17.05-.32-.02-.46-.07-.14-.58-1.39-.8-1.9-.21-.5-.43-.43-.58-.44-.15-.01-.32-.01-.49-.01-.17 0-.46.07-.7.34s-.92.9-.92 2.2c0 1.3.94 2.56 1.07 2.74.13.18 1.85 2.82 4.48 3.95.63.27 1.12.43 1.5.55.63.2 1.2.17 1.65.1.5-.08 1.6-.65 1.82-1.28.22-.63.22-1.17.16-1.28-.06-.11-.23-.17-.5-.3z" />
        </svg>
        WhatsApp
      </a>
        </div>
        </footer>
    </>
  )
}
