
window.onscroll = function() {
    const backToTopBtn = document.querySelector("#backToTop");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      backToTopBtn.classList.add("show");
      backToTopBtn.classList.remove("hide");
    } else {
      backToTopBtn.classList.add("hide");
      backToTopBtn.classList.remove("show");
    }
  };

  function scrollToTop() {
    window.scrollTo({top: 0, behavior: "smooth"});
  }
  window.scrollToTop = scrollToTop;
