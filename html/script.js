var li_items = document.querySelectorAll(".sidebar ul li");
var hamburger = document.querySelector(".hamburger");
var wrapper = document.querySelector(".wrapper");

li_items.forEach((li_item) => {
  li_item.addEventListener("mouseenter", () => {
    if (wrapper.classList.contains("click_collapse")) {
      return;
    } else {
      li_item.closest(".wrapper").classList.remove("hover_collapse");
    }
  });
});

li_items.forEach((li_item) => {
  li_item.addEventListener("mouseleave", () => {
    if (wrapper.classList.contains("click_collapse")) {
      return;
    } else {
      li_item.closest(".wrapper").classList.add("hover_collapse");
    }
  });
});

hamburger.addEventListener("click", () => {
  hamburger.closest(".wrapper").classList.toggle("click_collapse");
  hamburger.closest(".wrapper").classList.toggle("hover_collapse");
});

// script for side navigation bar collapsing

// Hide submenus
$("#body-row .collapse").collapse("hide");

// Collapse/Expand icon
$("#collapse-icon").addClass("fa fa-arrow-left");

// Collapse click
$("[data-toggle=sidebar-colapse]").click(function () {
  SidebarCollapse();
});

function SidebarCollapse() {
  $(".menu-collapsed").toggleClass("d-none");
  $(".sidebar-submenu").toggleClass("d-none");
  $(".submenu-icon").toggleClass("d-none");
  $("#sidebar-container").toggleClass("sidebar-expanded sidebar-collapsed");

  // Treating d-flex/d-none on separators with title
  var SeparatorTitle = $(".sidebar-separator-title");
  if (SeparatorTitle.hasClass("d-flex")) {
    SeparatorTitle.removeClass("d-flex");
  } else {
    SeparatorTitle.addClass("d-flex");
  }

  // Collapse/Expand icon
  $("#collapse-icon").toggleClass("fa fa-arrow-left fa fa-arrow-right");
}

$("#tbl").find(".save, .cancel").hide();
$("#tbl").on("click", ".edit", function () {
  $("#tbl").find(".save, .cancel").hide();
  $("#tbl").find(".edit").show();
  $("*").prop("contenteditable", false);
  $(this).hide().siblings(".save, .cancel").show();
  currentTD = $(this).closest("td").siblings();
  $.each(currentTD, function () {
    $(this).attr("initialval", $(this).text());
    $(this).prop("contenteditable", true);
  });
});

$("#tbl").on("click", ".save", function () {
  var $btn = $(this);
  $("#tbl").find(".save, .cancel").hide();
  $btn.hide().siblings(".edit").show();
  currentTD = $(this).closest("td").siblings();
  $.each(currentTD, function () {
    $(this).prop("contenteditable", false);
  });
});

$(document).on("click", ".delete", function () {
  $(this).parents("tr").remove();
});
