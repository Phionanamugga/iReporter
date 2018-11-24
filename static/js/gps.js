
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function initMap(){
    var map = new google.maps.Map(document.getElementById("map"),{
        zoom:4,
        center:location
    });
    var marker = new google.maps.Marker({
        position:location,
        map: map
    })
}
