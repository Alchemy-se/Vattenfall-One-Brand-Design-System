## Search
add click function on span element `.vf-icon-search` by adding class `.vf-navigation__icon-search-desktop`

toggle class `.active` on `.vf-navigation__search-box` to show/hide the search window

```html
<nav class="vf-navigation__menu">

  <div class="vf-navigation__search-box active">
    <input type="text" placeholder="Type here to search" />
  </div>

  <ul class="vf-navigation__menu-list vf-navigation__menu-level-1">
    <a href="javascript:" class="vf-navigation__logo-desktop">
      <img src="/img/vf-logo.svg" width="180" />
    </a>

    <li class="vf-navigation__menu-list-item">
      <div>
        <a href="javascript:" id="vf-navigation__link">Who we are</a>
        <span class="vf-icon-more"></span>
      </div>
    </li>

    <li class="vf-navigation__menu-list-item">
      <div>
        <a href="javascript:" id="vf-navigation__link">What we do</a>
        <span class="vf-icon-more"></span>
      </div>
    </li>

    <li class="vf-navigation__menu-list-item">
      <div>
        <a href="javascript:" id="vf-navigation__link">Inverstors</a>
        <span class="vf-icon-more"></span>
      </div>
    </li>

    <li class="vf-navigation__menu-list-item">
      <div>
        <a href="javascript:" id="vf-navigation__link">Press and media</a>
        <span class="vf-icon-more"></span>
      </div>
    </li>

    <li class="vf-navigation__menu-list-item">
      <div>
        <a href="javascript:" id="vf-navigation__link">Careers</a>
        <span class="vf-icon-more"></span>
      </div>
    </li>
    <span
      class="vf-icon-globe vf-navigation__globe-desktop"
      alt="globe logo"
    ></span>
    <span
      class="vf-icon-search vf-navigation__icon-search-desktop"
      alt="search logo"
    ></span>
    <li class="vf-navigation__menu-list-border"></li>
  </ul>
</nav>
```
