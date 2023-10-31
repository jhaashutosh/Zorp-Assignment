let secondSidebarOpen = false;

function toggleSidebar() {
  const sidebar = document.querySelector(".sidebar");
  const secondSidebar = document.querySelector(".second-sidebar");

  if (secondSidebarOpen) {
    secondSidebar.style.width = "0";
    secondSidebar.style.padding = "0px";
    secondSidebar.style.border = "none";
    secondSidebar.style.visibility = "hidden";
    secondSidebarOpen = false;
  } else {
    secondSidebar.style.width = "200px";
    secondSidebar.style.padding = "0 20px";
    secondSidebar.style.borderRight = "1px solid rgba(47, 47, 47, 0.2)";
    secondSidebar.style.visibility = "visible";
    secondSidebarOpen = true;
  }
}

const actionColors = {
  Create: "green",
  Update: "blue",
  Publish: "green",
  Unpublish: "red",
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
