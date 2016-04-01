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
        })
      
        var input = document.getElementById('input');
        var oTip=document.getElementById('tip');
        var message = document.getElementById('message');
            map.on('click',function(e){
            marker.setPosition(e.lnglat);
            geocoder.getAddress(e.lnglat,function(status,result){
              if(status=='complete'){
                 input.value = result.regeocode.formattedAddress;
                 message.innerHTML = '';
                 sessionStorage.setItem('over',$('input').val());
              }else{
                 message.innerHTML = '无法获取地址'
              }
            //获取from的经纬度

                input.onchange = function(e){
                  var address = input.value;
                  geocoder.getLocation(address,function(status,result){
                      marker.setPosition(result.geocodes[0].location);
                      var str=[];
                      str.push(result.geocodes[0].location.lng);//经度
                      str.push(result.geocodes[0].location.lat);//维度
                      oTip.value = str.join('/');//用/连接经纬度
                      sessionStorage.setItem('toyx',oTip.value);
                  })
                }
                input.onchange();
            })
        })


    

    });