## Nav

Navbar navigation links build on our `.vf-navigation__menu` options with their own modifier class and require the use of [toggler classes](#toggler) for proper responsive styling. **Navigation in navbars will also grow to occupy as much horizontal space as possible** to keep your navbar contents securely aligned.

Active states with `.active` to indicate the current page can be applied to their parent list `vf-navigation__menu-list-item`s.

## Default

```html
<nav class="vf-navigation__menu">
  <ul class="vf-navigation__menu-list vf-navigation__menu-level-1">
    <a href="javascript:" class="vf-navigation__logo-desktop">
      <img src="/img/vf-logo.svg" width="180" />
    </a>

    <li class="vf-navigation__menu-list-item active">
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
      class="vf-icon-search"
      alt="search logo"
    ></span>
    <li class="vf-navigation__menu-list-border"></li>
  </ul>
</nav>
```
