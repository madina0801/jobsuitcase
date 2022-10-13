const btnInput = document.querySelector("#input-btn");
const inputEl = document.querySelector("#input-el");
const listEl = document.querySelector("#ul-el");

const myJobs = [];

// Add jobs to array of jobs
btnInput.addEventListener("click", () => {
  if (!myJobs.includes(inputEl.value)) {
    myJobs.push(inputEl.value);
    inputEl.value = "";
    renderJobs();
  } else return;
  console.log(myJobs);
});

// Display jobs in the list
function renderJobs() {
  let listItems = "";
  for (let job of myJobs) {
    listItems += `<li><a href="${job}" target="_blank">${job}</a></li>`;
  }
  listEl.innerHTML = listItems;
}
