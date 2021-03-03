document.querySelector(".custom-file-input").addEventListener("change", e => {
  const name = document.getElementById("customFile").files[0].name;
  const nextSibling = e.target.nextElementSibling;
  nextSibling.innerText = name;
});

document.querySelector(".custom-file-input-2").addEventListener("change", e => {
  const name = document.getElementById("customFile-2").files[0].name;
  const nextSibling = e.target.nextElementSibling;
  nextSibling.innerText = name;
});