describe("DOM", () => {
  it("creates and deletes elements for a million times", () => {
    for (let i = 0; i < 1000000; i++) {
      const div = document.createElement("div");
      document.body.append(div);
      div.className = "foo bar";
      div.innerHTML =
        '<span class="first">f<strong>o</strong>o</span><span>bar</span>';
      div.addEventListener("click", function () {
        const span = this.querySelector(".first strong");
        span.classList.toggle("active");
      });
      div.click();
      div.click();
      div.remove();
    }
  });
});
