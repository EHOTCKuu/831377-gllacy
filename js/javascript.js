var link = document.querySelector(".button-map");
		var popup = document.querySelector(".popup-feedback");
		var close = popup.querySelector(".modal-close");
		var feed = popup.querySelector("[name=feedback-name]");
		var form = popup.querySelector("form");
		var email = popup.querySelector("[name=email]");
		var text = popup.querySelector("[name=feedback-text]");
		var overlay = document.querySelector(".popup-overlay");

		link.addEventListener("click", function (evt) {
			evt.preventDefault();
			popup.classList.add("feedback-show");
			overlay.classList.add("overlay-show");
			feed.focus();
});


close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("feedback-show");
	overlay.classList.remove("overlay-show");
  });

  form.addEventListener("submit", function (evt) {
	if (!text.value || !email.value || !feed.value) {
      evt.preventDefault();
      console.log("Нужно вписать Имя, Почту и написать что-нибудь...");
    } else {
      localStorage.setItem("email", email.value);
      localStorage.setItem("feed", feed.value);
	  localStorage.setItem("text", text.value);
    }
  });
  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("feedback-show")) {
        popup.classList.remove("feedback-show");
      }
    }
  });