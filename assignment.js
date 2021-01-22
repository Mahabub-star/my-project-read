function kilometerToMeter(kilometer){
var meter=kilometer*1000;
return meter;
}
var meter=kilometerToMeter(5);
console.log( meter)
function budgetCalculator(){
    var watch=50*7;
    var mobile=100*4;
    var laptop=1000*2;
    totalCost=watch+mobile+laptop;
    return totalCost;
}
var result=budgetCalculator();
console.log(result)
function hotelCost(night){
    var hotelCost=0;
if(night<=10){
    hotelCost=night*100;
}
else if(night<=20){
    var first=10*100;
    var remaining=night-10;
    var second=remaining*80;
    hotelCost=first+second;
}
else{
    var first=10*100;
    var second=10*80;
    var remaining=night-20;
    var third=remaining*50;
    hotelCost=first+second+third;
}
return hotelCost;
}
var result=hotelCost(26);
console.log(result)

var strings=['saboj','roni','mahmuda','mahabuba',]
function megaFriend(arr){
    let result='';
    for(let i=0; i<arr.lenght; i++){
        let currentItem=arr[i];
    
    if (currentItem.lenght>result.lenght){
        result=arr[i];
    }
}
return result;
}
console.log(megaFriend=[strings])