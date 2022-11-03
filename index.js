const btnInput = document.querySelector("#input-btn");
const btnDel = document.querySelector("#del-btn");
const btnTab = document.querySelector("#tab-btn");
const inputEl = document.querySelector("#input-el");
const listEl = document.querySelector("#ul-el");

let myJobs = [];

let jobsFromLocalStorage = JSON.parse(localStorage.getItem("myJobs"));

if (jobsFromLocalStorage) {
  myJobs = jobsFromLocalStorage;
  render(myJobs);
}

// Save tab button
btnTab.addEventListener("click", function () {
  // Take the URL of the current tab
  chrome.tabs.query({ active: true }, { currentWindow: true }, function (tabs) {
    myJobs.push(tabs[0].url);
    inputEl.value = "";

    // Save jobs to local storage
    localStorage.setItem("myJobs", JSON.stringify(myJobs));
    render(myJobs);
  });
});

// Render jobs in the list
function render(jobs) {
  let listItems = "";
  for (let i = 0; i < jobs.length; i++) {
    listItems += `<li class="job-item"><a href="${jobs[i]}" target="_blank">${jobs[i]}</a></li>`;
  }
  listEl.innerHTML = listItems;
}

// Add jobs to array of jobs
btnInput.addEventListener("click", () => {
  myJobs.push(inputEl.value);
  inputEl.value = "";

  // Save jobs to local storage
  localStorage.setItem("myJobs", JSON.stringify(myJobs));
  render(myJobs);
});

// Delete all jobs
function delJobs() {
  localStorage.clear();
  myJobs = [];
  render(myJobs);
}

btnDel.addEventListener("dblclick", delJobs);
