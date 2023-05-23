 const form = document.getElementById("loginForm");
    const error = document.getElementById("error");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (usernameInput.value === "orderfood" && passwordInput.value === "foodorder") {
        window.location.href = "startpage.html";
      } else {
        error.style.display = "block";
        usernameInput.classList.add("blink");
        passwordInput.classList.add("blink");
        setTimeout(() => {
          error.style.display = "none";
          usernameInput.classList.remove("blink");
          passwordInput.classList.remove("blink");
        }, 3000);
      }
    });
    
    usernameInput.focus();
