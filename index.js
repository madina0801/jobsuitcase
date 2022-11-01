const btnInput = document.querySelector("#input-btn");
const btnDel = document.querySelector("#del-btn");
const inputEl = document.querySelector("#input-el");
const listEl = document.querySelector("#ul-el");

let myJobs = [];

let jobsFromLocalStorage = JSON.parse(localStorage.getItem("myJobs"));

if(jobsFromLocalStorage) {
  myJobs = jobsFromLocalStorage;
  renderJobs();
}

// Add jobs to array of jobs
btnInput.addEventListener("click", () => {
  myJobs.push(inputEl.value);
  inputEl.value = "";

  // Save jobs to local storage
  localStorage.setItem("myJobs", JSON.stringify(myJobs));
  renderJobs();
  console.log(myJobs);
});


// Render jobs in the list
function renderJobs() {
  let listItems = "";
  for (let i = 0; i < myJobs.length; i++) {
    listItems += `<li class="job-item"><a href="${myJobs[i]}" target="_blank">${myJobs[i]}</a></li>`;
  }
  listEl.innerHTML = listItems;
}

// Delete all jobs
function delJobs() {
  localStorage.clear();
  myJobs = [];
  listEl.innerHTML = "";
}

btnDel.addEventListener("dblclick", delJobs);