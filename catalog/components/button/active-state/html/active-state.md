
### Active state
Buttons will appear pressed (with a darker background, darker border, and inset shadow) when active. There’s no need to add a class to <button>s as they use a pseudo-class. However, you can still force the same active appearance with .active (and include the aria-pressed="true" attribute) should you need to replicate the state programmatically.

```html
showSource: true
---
<a href="#" class="vf-btn vf-btn--primary vf-btn--lg active" role="button" aria-pressed="true">Primary link</a>
<a href="#" class="vf-btn vf-btn--secondary vf-btn--lg active" role="button" aria-pressed="true">Link</a>
```
