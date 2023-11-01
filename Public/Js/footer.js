const actionColors = {
  Create: "#728d8b",
  Update: "#87a0e0",
  Publish: "#869f9b",
  Unpublish: "#c0a389",
  Delete: "red",
};

function addTableRow(
  profilePhoto,
  name,
  designation,
  entityId,
  action,
  type,
  environment,
  timeStamp
) {
  const tableBody = document.getElementById("table-body");

  const row = document.createElement("tr");

  // User column
  const userCell = document.createElement("td");
  const userDiv = document.createElement("div");
  userDiv.classList.add("user");

  const userPhotoDiv = document.createElement("div");
  userPhotoDiv.classList.add("user-photo");
  userPhotoDiv.innerHTML = profilePhoto;

  const userInfoDiv = document.createElement("div");
  userInfoDiv.classList.add("user-info");
  userInfoDiv.innerHTML = `<div class=username>${name}</div><div class="designation">${designation}</div>`;

  userDiv.appendChild(userPhotoDiv);
  userDiv.appendChild(userInfoDiv);
  userCell.appendChild(userDiv);

  // Entity Id
  const entityIdCell = document.createElement("td");
  const entityIdButton = document.createElement("button");
  entityIdButton.textContent = entityId;
  entityIdCell.appendChild(entityIdButton);

  // Action
  const actionCell = document.createElement("td");
  actionCell.textContent = action.toUpperCase();
  if (actionColors.hasOwnProperty(action)) {
    actionCell.style.color = actionColors[action];
  }

  // Type
  const typeCell = document.createElement("td");
  typeCell.textContent = type;

  // Environment
  const environmentCell = document.createElement("td");
  environmentCell.textContent = environment;

  // Time Stamp
  const timeStampCell = document.createElement("td");
  const timeStampDiv = document.createElement("div");
  timeStampDiv.classList.add("timestamp");

  const dateDiv = document.createElement("div");
  dateDiv.textContent = timeStamp.date;
  dateDiv.classList.add("date");
  const timeDiv = document.createElement("div");
  timeDiv.classList.add("time");
  timeDiv.textContent = timeStamp.time;
  const viewDetailDiv = document.createElement("div");
  viewDetailDiv.classList.add("view-detail");
  viewDetailDiv.textContent = "View Detail";

  timeStampDiv.appendChild(dateDiv);
  timeStampDiv.appendChild(timeDiv);
  timeStampDiv.appendChild(viewDetailDiv);

  timeStampCell.appendChild(timeStampDiv);

  row.appendChild(userCell);
  row.appendChild(entityIdCell);
  row.appendChild(actionCell);
  row.appendChild(typeCell);
  row.appendChild(environmentCell);
  row.appendChild(timeStampCell);

  tableBody.appendChild(row);
}

let sampleData;

// Fetch the sample data from the JSON file
fetch("/data/sampleData.json")
  .then((response) => response.json())
  .then((data) => {
    sampleData = data;
    initTable();
  })
  .catch((error) => console.error("Error loading data:", error));

let currentPage = 1;
let entriesPerPage = 10; // Initial entries per page

// Function to populate the table
function populateTable(entries) {
  const tableBody = document.getElementById("table-body");
  tableBody.innerHTML = "";

  entries.forEach((entry) => {
    addTableRow(
      `<div class='user-photo'><img src="${entry["profile-url"]}" alt='User Profile Photo'></div>`,
      entry.name,
      entry.designation,
      entry.entityId,
      entry.action,
      entry.type,
      entry.environment,
      entry.timeStamp
    );
  });
}

// Example function to update the page and total page counters
function updatePageInfo() {
  const totalEntries = sampleData.length;
  const totalPages = Math.ceil(totalEntries / entriesPerPage);

  document.getElementById("current-page").textContent = currentPage;
  document.getElementById("total-pages").textContent = totalPages;
  document.getElementById("total-entries").textContent =
    totalEntries + " items";
}

// Function to handle previous page navigation
function prevPage() {
  if (currentPage > 1) {
    currentPage--;
    const startIndex = (currentPage - 1) * entriesPerPage;
    const endIndex = startIndex + entriesPerPage;
    const pageData = sampleData.slice(startIndex, endIndex);
    populateTable(pageData);
    updatePageInfo();
  }
  if (currentPage === 1) {
    document.querySelector("#prev-page").style.color = "#bcc2ca";
    document.querySelector("#prev-page").addEventListener("mouseover", (e) => {
      e.target.style.color = "#bcc2ca";
    });
  }
  document.querySelector("#next-page").style.color = "black";
  document.querySelector("#next-page").addEventListener("mouseover", (e) => {
    e.target.style.color = "blue";
  });
}

// Function to handle next page navigation
function nextPage() {
  const totalEntries = sampleData.length;
  const totalPages = Math.ceil(totalEntries / entriesPerPage);
  if (currentPage < totalPages) {
    currentPage++;
    const startIndex = (currentPage - 1) * entriesPerPage;
    const endIndex = startIndex + entriesPerPage;
    const pageData = sampleData.slice(startIndex, endIndex);
    populateTable(pageData);
    document.querySelector("#next-page").style.color = "black";
    updatePageInfo();
  }
  if (currentPage === totalPages) {
    document.querySelector("#next-page").style.color = "#bcc2ca";
    document.querySelector("#next-page").addEventListener("mouseover", (e) => {
      e.target.style.color = "#bcc2ca";
    });
  }
  document.querySelector("#prev-page").style.color = "black";
  document.querySelector("#prev-page").addEventListener("mouseover", (e) => {
    e.target.style.color = "blue";
  });
}

// Example function to handle changing the number of entries per page
function changeEntriesPerPage() {
  const select = document.getElementById("entries-per-page");
  entriesPerPage = parseInt(select.value, 10);
  currentPage = 1;
  const startIndex = 0;
  const endIndex = startIndex + entriesPerPage;
  const pageData = sampleData.slice(startIndex, endIndex);
  populateTable(pageData);
  updatePageInfo();
}

// Set up event listeners
document.getElementById("prev-page").addEventListener("click", prevPage);
document.getElementById("next-page").addEventListener("click", nextPage);
document
  .getElementById("entries-per-page")
  .addEventListener("change", changeEntriesPerPage);

// Initial table population
function initTable() {
  const startIndex = 0;
  const endIndex = startIndex + entriesPerPage;
  const initialPageData = sampleData.slice(startIndex, endIndex);
  populateTable(initialPageData);
  updatePageInfo();
}
