import React from 'react'

const Footer = () => {
  return (
    <div>
         {/* Footer */}
      <footer className="px-6 py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Harry Owanaba. All rights reserved.
      </footer>
    </div>
  )
}

export default Footer