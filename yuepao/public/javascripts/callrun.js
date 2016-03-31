$('#start').val(sessionStorage.getItem('start'));
$('#over').val(sessionStorage.getItem('over')); 		
AMap.plugin(['AMap.Autocomplete','AMap.PlaceSearch'],function(){
      var autoOptions = {
        city: "北京", 
        input: "start"
      };

       autocomplete= new AMap.Autocomplete(autoOptions);	
});

AMap.plugin(['AMap.Autocomplete','AMap.PlaceSearch'],function(){
      var autoOptions = {
        city: "北京", 
        input: "over"
      };

       autocomplete= new AMap.Autocomplete(autoOptions);	
});
$('#start').triggerHandler('focus',function(){
	sessionStorage.setItem('start',$(this).value);
})
$('#over').triggerHandler('blur',function(){
	sessionStorage.setItem('over',$(this).value);
})

navigator.geolocation.getCurrentPosition(function(position){
var y=position.coords.longitude;
var x=position.coords.latitude;
seesionStorage.setItem('longitude',y);
seesionStorage.setItem('latitude',x);

}); 
 



