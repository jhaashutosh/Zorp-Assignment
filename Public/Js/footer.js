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
    updatePageInfo();
  }
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
