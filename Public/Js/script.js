let sidebarOpen = false;
let secondSidebarOpen = false;

function toggleMenuBar() {
  const sidebar = document.querySelector(".sidebar");
  if (sidebarOpen) {
    sidebar.style.display = "none";
    sidebarOpen = false;
  } else {
    sidebar.style.display = "flex";
    sidebarOpen = true;
  }
}

function toggleSidebar() {
  const sidebar = document.querySelector(".sidebar");
  const secondSidebar = document.querySelector(".second-sidebar");

  if (secondSidebarOpen) {
    secondSidebar.style.width = "0";
    secondSidebar.style.height = "0";
    secondSidebar.style.padding = "0px";
    secondSidebar.style.border = "none";
    secondSidebar.style.visibility = "hidden";
    secondSidebarOpen = false;
  } else {
    secondSidebar.style.width = "200px";
    secondSidebar.style.height = "auto";
    secondSidebar.style.padding = "0 20px";
    secondSidebar.style.borderRight = "1px solid rgba(47, 47, 47, 0.2)";
    secondSidebar.style.visibility = "visible";
    secondSidebarOpen = true;
  }
}
