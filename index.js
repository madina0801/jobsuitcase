const btnInput = document.querySelector("#input-btn");
const inputEl = document.querySelector("#input-el");
const listEl = document.querySelector("#ul-el");

let myJobs = [];

localStorage.clear();
let jobsFromLocalStorage = JSON.parse(localStorage.getItem("myJobs"));

console.log(jobsFromLocalStorage);

// Add jobs to array of jobs
btnInput.addEventListener("click", () => {
  if (!myJobs.includes(inputEl.value)) {
    myJobs.push(inputEl.value);
    inputEl.value = "";

    // Save jobs to locak storage
    localStorage.setItem("myJobs", JSON.stringify(myJobs));

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




// myJobs = JSON.parse(myJobs);
// myJobs.push("job1");
// myJobs = JSON.stringify(myJobs);
// console.log(typeof myJobs);

// localStorage.setItem("myJobs", "www.examplejob.com");
// console.log(localStorage.getItem("myJobs"));
// localStorage.clear()