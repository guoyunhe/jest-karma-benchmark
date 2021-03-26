describe("DOM", () => {
  it("creates and deletes elements for a million times", () => {
    for (let i = 0; i < 1000000; i++) {
      const div = document.createElement("div");
      document.body.append(div);
      div.remove();
    }
  });
});
