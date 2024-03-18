// Javascript Area

// Start Site Settings 
    const getsitesettings = document.getElementById('sitesettings');
    getsitesettings.addEventListener('click',function(){
        document.body.classList.toggle('show-nav');
    });
// End Site Settings 


// Start top sidebar /
// Start Navbar
function dropbtn(e){
    // console.log(e.target);
    e.target.parentElement.nextElementSibling.classList.toggle('show');
}

// End Top Sidebar 

$(document).ready(function(){

    // Start Left Side Bar 
    $('.sidebarlinks').click(function(){
        $('.sidebarlinks').removeClass('currents');
        $(this).addClass('currents');
    });
    // End Left Side Bar 
});



// Start Footer 
const getyear = document.getElementById('getyear');
const getfullyear = new Date().getFullYear();
getyear.textContent = getfullyear;





