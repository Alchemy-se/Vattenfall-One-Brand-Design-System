import React from 'react'

const Default = () => {
    return (
          <nav className='vf-navigation__menu'>
            <ul className='vf-navigation__menu-list vf-navigation__menu-level-1'>
              <a href='#' className='vf-navigation__logo-desktop'>
                <img src='/img/vf-logo.svg' width='180' />
              </a>

              <li className='vf-navigation__menu-list-item'>
                <div>
                  <a href='#' id="vf-navigation__link">Who we are</a>
                  <span className='vf-icon-more'></span>
                </div>
              </li>

              <li className='vf-navigation__menu-list-item'>
                <div>
                  <a href='#' id="vf-navigation__link">What we do</a>
                  <span className='vf-icon-more'></span>
                </div>
              </li>

              <li className='vf-navigation__menu-list-item'>
                <div>
                  <a href='#' id="vf-navigation__link">Inverstors</a>
                  <span className='vf-icon-more'></span>
                </div>
              </li>

              <li className='vf-navigation__menu-list-item'>
                <div>
                  <a href='#' id="vf-navigation__link">Press and media</a>
                  <span className='vf-icon-more'></span>
                </div>
              </li>

              <li className='vf-navigation__menu-list-item'>
                <div>
                  <a href='#' id="vf-navigation__link">Careers</a>
                  <span className='vf-icon-more'></span>
                </div>
              </li>
              <span
                className='vf-icon-globe vf-navigation__globe-desktop'
                alt='globe logo'
              ></span>
              <span
                className='vf-icon-search vf-navigation__icon-search-desktop'
                alt='search logo'
              ></span>
              <li className='vf-navigation__menu-list-empty'></li>
            </ul>
          </nav>
    )
}

export default Default
