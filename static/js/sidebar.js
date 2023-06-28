var togglebtn = document.getElementById("toggle-button")
var sidebar = document.getElementById("sidebar")
var maincontainer = document.getElementById("main-container")
var sidebarItems = document.getElementsByClassName("sidebar-item")
var sidebarOpen = true

const opensidebar = () => {
    togglebtn.innerHTML = `<i class="fas fa-times"></i>`
    sidebar.style.width = "300px"
    maincontainer.style.width = "calc(100vw - 300px)"
    Array.from(sidebarItems).forEach((item) => {
        item.classList.add("open")
        item.classList.remove("close")
        console.log(item);
    })
}
const closesidebar = () => {
    togglebtn.innerHTML = `<i class="fas fa-align-left"></i>`
    sidebar.style.width = "80px"
    maincontainer.style.width = "calc(100vw - 80px)"
    setTimeout(Array.from(sidebarItems).forEach((item) => {
        item.classList.add("close")
        item.classList.remove("open")
    }), 5000)
}

sidebarOpen ? opensidebar() : closesidebar();

togglebtn.addEventListener("click", (e) => {
    sidebarOpen = !sidebarOpen
    sidebarOpen ? opensidebar() : closesidebar();
})
//exporte les données sélectionnées
var $table = $("#table");
$(function () {
    $("#toolbar")
        .find("select")
            .change(function () {
            $table.bootstrapTable("refreshOptions", {
                exportDataType: $(this).val()
        });
    });
});

var trBoldBlue = $("table");

$(trBoldBlue).on("click", "tr", function () {
    $(this).toggleClass("bold-blue");
});
