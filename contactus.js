function myMap() {
    var mapProp= {
      center:new google.maps.LatLng(51.5074,0.1278),
      zoom:5,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
    }