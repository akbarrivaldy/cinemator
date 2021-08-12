import React, { useState } from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
// Components
import Home from './components/Home'
import Download from './components/Download'
import Logo from './components/Logo'

function App() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <BrowserRouter>
        <header className="absolute top-0 left-0 right-0 py-4 bg-gray-800">
          <nav className="container flex justify-between items-center">
            <Link to="/" className="flex flex-start overflow-hidden">
              <Logo fill="#E5E7EB" width="12rem" />
            </Link>
            <div className="flex-1 hidden lg:flex justify-end items-center gap-2">
              <div className="flex">
                <Link to='/membership' className="py-3 px-4 text-sm text-gray-300 hover:bg-gray-600">Get Premium</Link>
                <Link to='/customer-service' className="py-3 px-4 text-sm text-gray-300 hover:bg-gray-600">Customer Service</Link>
                <Link to='/docs' className="py-3 px-4 text-sm text-gray-300 hover:bg-gray-600">Documentation</Link>
              </div>
              <Link to='/download'>
                <div className="btn btn-primary">Download</div>
              </Link>
            </div>
            <div className="py-2 px-4 bg-gray-600 lg:hidden cursor-pointer" onClick={() => { setIsOpen(!isOpen) }}>
              <i className="fas fa-bars text-lg text-gray-200"></i>
            </div>
            <div id="nav-mobile" className={ `${isOpen ? 'fixed' : 'hidden'} lg:hidden top-0 right-0 left-0 bottom-0 bg-gray-800 z-20` }>
              <div className="container flex flex-col h-full justify-between">
                <div className="flex justify-end mt-4">
                  <div className="py-2 px-4 hover:bg-gray-600 cursor-pointer" onClick={() => { setIsOpen(!isOpen) }}>
                    <i className="fas fa-times text-lg text-gray-200"></i>
                  </div>
                </div>
                <div className="flex-1 flex flex-col py-8 gap-6">
                  <Link to='/membership' className="w-full text-4xl text-center text-gray-200 hover:underline" onClick={() => setIsOpen(false)}>Get Premium</Link>
                  <Link to='/customer-service' className="w-full text-4xl text-center text-gray-200 hover:underline" onClick={() => setIsOpen(false)}>Customer Service</Link>
                  <Link to='/docs' className="w-full text-4xl text-center text-gray-200 hover:underline" onClick={() => setIsOpen(false)}>Documentation</Link>
                  <Link to='/download' className="w-full text-4xl text-center text-gray-200 hover:underline" onClick={() => setIsOpen(false)}>Download</Link>
                </div>
                <div className="w-full flex justify-center mb-6">
                  <Link to="/" className="flex flex-start overflow-hidden" onClick={() => setIsOpen(false)}>
                    <Logo fill="#cecece" width="12rem" />
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </header>
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/download'>
            <Download />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App
