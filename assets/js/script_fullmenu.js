
//SideBar for FullMenu.js************
document.getElementById('sidebarToggle').addEventListener('click', function () {
       document.getElementById('menuOverlay').style.display = 'block';
       document.getElementById('sidebar').style.width = '300px';
       document.body.classList.add('no-scroll');
});


document.getElementById('closeSidebar').addEventListener('click', function (e) {
  e.preventDefault();
   document.getElementById('menuOverlay').style.display = 'none';
    document.getElementById('sidebar').style.width = '0';
    document.body.classList.remove('no-scroll');

});


document.getElementById('menuOverlay').addEventListener('click', function () {
  document.getElementById('menuOverlay').style.display = 'none';
  document.getElementById('sidebar').style.width = '0';
  document.body.classList.remove('no-scroll');

})









// window.addEventListener('click', function (event) {
//     if(!event.target.closest('#sidebar')) {
//         document.getElementById('sidebar').style.width = '0';
//     }
// })



//Filter for fullmenu.js****************
// document.addEventListener("DOMContentLoaded", function() {
    // const filterButtons = document.querySelectorAll('.filter-btn');
    // const menuItems = document.querySelectorAll('.menu-item');
    // const searchBar = document.getElementById('search-bar');
  
    // // Filter by category
    // filterButtons.forEach(button => {
    //   button.addEventListener('click', () => {
    //     filterButtons.forEach(btn => btn.classList.remove('active'));
    //     button.classList.add('active');
  
    //     const filterValue = button.getAttribute('data-filter');
  
    //     menuItems.forEach(item => {
    //       const category = item.getAttribute('data-category');

          
    //       if (filterValue === 'all' || filterValue === category) {
    //         item.style.display = 'block';
    //       } else {
    //         item.style.display = 'none';
    //       }
    //     });
    //   });
    // });
  
    // Search bar functionality
    // searchBar.addEventListener('keyup', () => {
    //   const searchValue = searchBar.value.toLowerCase();
      
    //   menuItems.forEach(item => {
    //     const itemName = item.querySelector('h3').textContent.toLowerCase();
        
    //     if (itemName.includes(searchValue)) {
    //       item.style.display = 'block';
    //     } else {
    //       item.style.display = 'none';
    //     }
    //   });
    // });
  // });


  
  
