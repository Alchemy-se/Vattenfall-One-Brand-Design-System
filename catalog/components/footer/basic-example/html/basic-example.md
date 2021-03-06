The website footer component is used on most Vattenfall pages. It contains links, social media icons and an area for a short text message.

### Basic example

```html
responsive: true
showSource: true
---
<footer class="vf-footer">
  <div class="vf-container">
    <div class="vf-row">
      <div class="vf-col-6 vf-col-md-4">
        <nav class="vf-footer__nav">
          <a class="vf-footer__nav-item" href="#">Our offices</a>
          <a class="vf-footer__nav-item" href="#">Privacy Policy</a>
          <a class="vf-footer__nav-item" href="#">About cookies</a>
          <a class="vf-footer__nav-item" href="#">Sitemap</a>
          <a class="vf-footer__nav-item" href="#">About Vattenfall</a>
        </nav>
      </div>
      <div class="vf-u--sm-hidden vf-col-md-5">
        <h5>About Vattenfall</h5>
        <p>
          Vattenfall is a European energy company with approximately 20.000 employees. For more than 100 years we have electrified industries, supplied energy to people's homes and modernized our way of living through innovation and cooperation.
        </p>
        <a href="#" class="vf-link-with-arrow">Read more</a>
      </div>
      <div class="vf-col-6 vf-col-md-2 vf-offset-md-1">
        <div class="vf-footer__social-links">

          <h4 class="vf-u--sm-hidden">Follow Us</h4>
          
          <a href="#">
            <img src="/img/footer/facebook.svg" class="vf-footer__social-link" onerror="this.onerror=null; this.src='/img/footer/facebook.png'" />
          </a>
          <a href="#">
            <img src="/img/footer/linkedin.svg" class="vf-footer__social-link" onerror="this.onerror=null; this.src='/img/footer/linkedin.png'" />
          </a>
          <a href="#">
            <img src="/img/footer/instagram.svg" class="vf-footer__social-link" onerror="this.onerror=null; this.src='/img/footer/instagram.png'" />
          </a>
          <a href="#">
            <img src="/img/footer/slideshare.svg" class="vf-footer__social-link" onerror="this.onerror=null; this.src='/img/footer/slideshare.png'" />
          </a>
          <a href="#">
            <img src="/img/footer/twitter.svg" class="vf-footer__social-link" onerror="this.onerror=null; this.src='/img/footer/twitter.png'" />
          </a>
          <a href="#">
            <img src="/img/footer/youtube.svg" class="vf-footer__social-link" onerror="this.onerror=null; this.src='/img/footer/youtube.png'" />
          </a>
          <a href="#">
            <img src="/img/footer/flickr.svg" class="vf-footer__social-link" onerror="this.onerror=null; this.src='/img/footer/flickr.png'" />
          </a>
        </div>
      </div>
    </div>
  </div>
</footer>
```
