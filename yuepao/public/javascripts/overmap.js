       var map = new AMap.Map('container',{
            resizeEnable: true,
            zoom: 13,
            center: [116.39,39.9]
    });
    AMap.plugin('AMap.Geocoder',function(){
        var geocoder = new AMap.Geocoder({
            city: "010"//城市，默认：“全国”
        });
        var marker = new AMap.Marker({
            map:map,
            bubble:true
        });
        var input = document.getElementById('input');
        var message = document.getElementById('message');
                     map.on('click',function(e){
            marker.setPosition(e.lnglat);
            geocoder.getAddress(e.lnglat,function(status,result){
              if(status=='complete'){
                 input.value = result.regeocode.formattedAddress;
                 message.innerHTML = '';
                 alert(input.value);
                 sessionStorage.setItem('over',input.value);
              }else{
                 message.innerHTML = '无法获取地址'
              }
            });
        })
        
        input.onchange = function(e){
            var address = input.value;
            geocoder.getLocation(address,function(status,result){
              if(status=='complete'&&result.geocodes.length){
                marker.setPosition(result.geocodes[0].location);
                map.setCenter(marker.getPosition())
                message.innerHTML = ''
              }else{
                message.innerHTML = '无法获取位置'
              }
            })
        }

    });