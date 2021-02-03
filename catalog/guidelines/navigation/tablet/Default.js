import React from 'react'

const Default = () => {
    return (
      <nav class='vf-navigation__menu'>
        <div class='vf-navigation__default'>
          <div class='vf-navigation__default-inner'>
            <span class='vf-icon-menu' id='vf-navigation-menu-icon'></span>

            <a href='#' class='vf-topbar__logo'>
              <img src='/img/vf-logo.svg' width='180' />
            </a>

            <span class='vf-icon-globe' alt='globe logo'></span>
            <span class='vf-icon-search' alt='search logo'></span>
          </div>
        </div>

        <div class='vf-navigation__search-box'>
          <input type='text' placeholder='Type here to search' />
        </div>
      </nav>
    )
}

export default Default
