function GMS() {
	let css = "#CSS";
	let html = `<div id="GMS">
  <div class="GMS_form">
    <div class="email">
      #SLOGAN
      <form action="#URL" method="post" target="popupwindow">
      	<input type="text" name="nama" class="form-n" placeholder="Nama Anda" required/>
        <input type="number" name="wa" class="form-n" placeholder="Nomor WhatsApp" required/>
        <input type="email" name="email" class="form-n" placeholder="Email Aktif" required/>
        <br/>
        <button type="submit"> #BUTTON</button>
      </form>
    </div>
  </div>
  <div class="GMS_footer">
    <a href="#WEB_URL">#WEB_NAME</a>
  </div>
</div>`;
	addCss(atob(css));
	document.write(html);
}

function addCss(css) {
	let head = document.getElementsByTagName('head')[0];
	let s = document.createElement('style');
	s.setAttribute('type', 'text/css');
	if (s.styleSheet) {   // IE
		s.styleSheet.cssText = css;
	} else {                // the world
		s.appendChild(document.createTextNode(css));
	}
	head.appendChild(s);
}
GMS();
