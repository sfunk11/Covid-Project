const stateList = $("#stateList");
getStateList();

stateList.on("change", event => {
  const state = event.target.value;
  console.log(state);
  window.location.replace(`/state/${state}`);
});

function getStateList() {
  $.get("/api/stateList").then(data => {
    for (i = 0; i < data.length; i++) {
      const template = `<option value = "${data[i].state}">${data[i].state}</option>`;
      const listItem = $(template);
      $("#stateList").append(listItem);
    }
  });
}
