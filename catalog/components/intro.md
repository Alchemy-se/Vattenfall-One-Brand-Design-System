# Component Naming

All components are named after CSS BEM standard. 

BEM stands for:
* Block
* Element
* Modifier

## Blocks

Are the components in this case. For example a modal window.

```
<!-- A block example -->
<div class="vattenfall-modal-window"></div>
```

## Elements

The parts that make up the component. For example the modal window title, close button etc.

```
<div class="vattenfall-modal-window">
  <!-- An element example -->
  <h1 class="vattenfall-modal-window__title">
    Modal title
  </h1>

  <!-- Another element example -->
  <button class="vattenfall-modal-window__button">Close</button>
</div>
```

## Modifiers

Handles different stylistic or functional variants of the same element. Example 

```
<div class="vattenfall-modal-window">
  <h1 class="vattenfall-modal-window__title">
    Modal title
  </h1>

  
  <button class="vattenfall-modal-window__button vattenfall-modal-window__button--danger">Close</button>

  <button class="vattenfall-modal-window__button vattenfall-modal-window__button--primary">Read more</button>
</div>
```

Read more about BEM naming at http://getbem.com/introduction/