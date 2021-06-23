import React from 'react'

const Layout = ({children}) => {
    return (
      <div className="layout">
        <div className="layout-inner">
                <div className="layout-page-title">New Pokedex App</div>
                {children}
        </div>
      </div>
    );
}

export default Layout
