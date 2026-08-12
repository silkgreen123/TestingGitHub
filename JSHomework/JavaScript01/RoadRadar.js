function RoadRadar(speed,area){
    let limit=0;
    if(area===`motorway`) limit=130;
    else if(area===`interstate`) limit=90;
    else if(area===`city`) limit=50;
    else if(area===`residential`) limit=20;
    const diff=speed-limit;
    if(diff<=0){
        console.log(`Driving ${speed} km/h in a ${limit} zone`)
    }else{
        let status="";
        if(diff<=20){
            status=`speeding`;
        }else if(diff<=40){
            status=`exessive speeding`;
        }else{
            status=`reckless driving`;
        }
    }
}