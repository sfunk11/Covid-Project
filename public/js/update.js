document.querySelector(".custom-file-input").addEventListener("change", e => {
  const name = document.getElementById("customFile").files[0].name;
  const nextSibling = e.target.nextElementSibling;
  nextSibling.innerText = name;
});
