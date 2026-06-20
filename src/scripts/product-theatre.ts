export function initProductTheatre() {
  document.querySelectorAll<HTMLElement>("[data-product-stage]").forEach((root) => {
    const options = [...root.querySelectorAll<HTMLButtonElement>("[data-product-option]")];
    const images = [...root.querySelectorAll<HTMLElement>("[data-product-image]")];
    const copies = [...root.querySelectorAll<HTMLElement>("[data-product-copy]")];

    const select = (option: HTMLButtonElement) => {
      const product = option.dataset.productOption ?? "750";
      root.dataset.product = product;
      options.forEach((button) => button.setAttribute("aria-selected", String(button === option)));
      images.forEach((image) => image.setAttribute("aria-hidden", String(image.dataset.productImage !== product)));
      copies.forEach((copy) => { copy.hidden = copy.dataset.productCopy !== product; });
    };

    options.forEach((option, index) => {
      option.addEventListener("click", () => select(option));
      option.addEventListener("keydown", (event) => {
        if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
        event.preventDefault();
        const rtl = document.documentElement.dir === "rtl";
        const direction = (event.key === "ArrowRight" ? 1 : -1) * (rtl ? -1 : 1);
        const next = options[(index + direction + options.length) % options.length];
        next.focus();
        select(next);
      });
    });
  });
}
