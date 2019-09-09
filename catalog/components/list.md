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

Specific icons are automatically added to the following filetypes if the `href` property ends in any of the following: 

* `.xls, .xlsx`
* `.txt`
* `.ppt`
* `.pdf`
* `.doc, .docx`

And the following modifier classes are available:

* `.vf-file-list__link--type-xls`
* `.vf-file-list__link--type-txt`
* `.vf-file-list__link--type-ppt`
* `.vf-file-list__link--type-pdf`
* `.vf-file-list__link--type-doc`
* `.vf-file-list__link--type-new-window`
* `.vf-file-list__link--type-arrow-right`
* `.vf-file-list__link--type-download`

```html
showSource: true
---
<ul class="vf-file-list">
  <li class="vf-file-list__item">
    <a class="vf-file-list__link" href="#">Default link style</a>
  </li>
  <li class="vf-file-list__item">
    <a class="vf-file-list__link vf-file-list__link--type-download" href="#">File name goes here</a>
    <span class="vf-file-list__item-description">(FILE, 10 kB)</span>
  </li>
  <li class="vf-file-list__item">
    <a class="vf-file-list__link" href="#?.xls">Vattenfall uppförandekod för leverantörer, bilaga 9</a>
    <span class="vf-file-list__item-description">(XLS, 460 kB)</span>
  </li>
  <li class="vf-file-list__item">
    <a class="vf-file-list__link" href="#?.txt">Vattenfall Electronic Commerce Guidelines, bilaga 10a</a>
    <span class="vf-file-list__item-description">(TXT, 520 kB)</span>
  </li>
  <li class="vf-file-list__item">
    <a class="vf-file-list__link" href="#?.ppt">Vattenfall Electronic Commerce Guidelines, bilaga 10a</a>
    <span class="vf-file-list__item-description">(PPT, 520 kB)</span>
  </li>
  <li class="vf-file-list__item">
    <a class="vf-file-list__link" href="#?.pdf">Vattenfall Electronic Commerce Guidelines, bilaga 10a</a>
    <span class="vf-file-list__item-description">(PDF, 520 kB)</span>
  </li>
  <li class="vf-file-list__item">
    <a class="vf-file-list__link" href="#?.doc">Vattenfall Electronic Commerce Guidelines, bilaga 10a</a>
    <span class="vf-file-list__item-description">(DOC, 520 kB)</span>
  </li>
  <li class="vf-file-list__item">
    <a class="vf-file-list__link vf-file-list__link--type-new-window" target="_blank" href="#">This one opens in a new window</a>
  </li>
    <li class="vf-file-list__item">
    <a class="vf-file-list__link vf-file-list__link--type-arrow-right" href="#">Just a link with an arrow</a>
  </li>
</ul>
```