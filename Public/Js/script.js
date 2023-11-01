let sidebarOpen = false;
let secondSidebarOpen = false;
const sidebar = document.querySelector(".sidebar");

function toggleMenuBar() {
  if (sidebarOpen) {
    sidebar.style.display = "none";
    sidebarOpen = false;
  } else {
    sidebar.style.display = "flex";
    sidebarOpen = true;
    if (sidebarOpen) {
      document.querySelector(".main-window").addEventListener("click", (e) => {
        sidebar.style.display = "none";
        sidebarOpen = false;
      });
    }
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
