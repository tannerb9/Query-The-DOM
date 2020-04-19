const section_e1 = document.querySelector(".article__header");

const blog_name = "Total Chaos";

section_e1.textContent = `Welcome to the ${blog_name} blog.`;

// Use JavaScript to obtain a reference to all article__header elements and change their
// classList property value to article__header important.

const all_headers = document.querySelectorAll(".article__header");

for (let i = 0; i < all_headers.length; i++) {
  all_headers[i].classList.add("important");
}

const dashed = document.querySelector(".dashed");

dashed.classList.remove("dashed");

// Obtain a reference the element with a class of article__footer and add the class of goldenrod it.

const footer = document.querySelector(".article__footer");

footer.classList.add("goldenrod");
