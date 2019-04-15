Lists for displaying data.

### Standard lists

```html
showSource: true
---
<ul class="vf-ul">
  <li>Snoopy the Cat</li>
  <li>Garfi the Angry Cat</li>
  <li>Cole & Marmalade</li>
  <li>Monty the Cat</li>
  <li>Hamilton the Hipster Cat</li>
  <li>Waffles the Scottish Fold</li>
  <li>Venus the Two-Faced Cat</li>
  <li>Nala</li>
  <li>Lil BUB</li>
  <li>Grumpy Cat</li>
</ul>
```


### File list

To add a specific file type icon, simply add the corresponding modifier class to the `vf-file-list__link` element. Supported modifiers: 

`vf-file-list__link--xls`
`vf-file-list__link--txt`
`vf-file-list__link--ppt`
`vf-file-list__link--pdf`
`vf-file-list__link--doc`


```html
showSource: true
---
<ul class="vf-file-list">
  <li class="vf-file-list__item">
    <a class="vf-file-list__link" href="#">File name goes here</a>
    <span class="vf-file-list__item-description">(FILE, 10 kB)</span>
  </li>
  <li class="vf-file-list__item">
    <a class="vf-file-list__link vf-file-list__link--xls" href="#">Vattenfall uppförandekod för leverantörer, bilaga 9</a>
    <span class="vf-file-list__item-description">(XLS, 460 kB)</span>
  </li>
  <li class="vf-file-list__item">
    <a class="vf-file-list__link vf-file-list__link--txt" href="#">Vattenfall Electronic Commerce Guidelines, bilaga 10a</a>
    <span class="vf-file-list__item-description">(TXT, 520 kB)</span>
  </li>
  <li class="vf-file-list__item">
    <a class="vf-file-list__link vf-file-list__link--ppt" href="#">Vattenfall Electronic Commerce Guidelines, bilaga 10a</a>
    <span class="vf-file-list__item-description">(PPT, 520 kB)</span>
  </li>
  <li class="vf-file-list__item">
    <a class="vf-file-list__link vf-file-list__link--pdf" href="#">Vattenfall Electronic Commerce Guidelines, bilaga 10a</a>
    <span class="vf-file-list__item-description">(PDF, 520 kB)</span>
  </li>
  <li class="vf-file-list__item">
    <a class="vf-file-list__link vf-file-list__link--doc" href="#">Vattenfall Electronic Commerce Guidelines, bilaga 10a</a>
    <span class="vf-file-list__item-description">(DOC, 520 kB)</span>
  </li>
</ul>
```