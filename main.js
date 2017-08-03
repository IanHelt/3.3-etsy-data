(function(){

  var pricing = items.map(function(entry){
    return entry.price;

  });
 //#1
  // console.log(pricing);
 var total = 0;
 for(var i = 0; i < pricing.length; i++){
     total += pricing[i];
 }
 var avg = total/pricing.length;

 function getAvg(items) {
   return pricing.reduce(function(p, c){
     return p + c;
   })/pricing.length;
 }
 //logging the average
 getAvg(pricing);
  console.log('the average price is','$' + avg.toFixed(2));


 //#2
 var object = items.filter(function(entry){
   return entry.price >= 14 && entry.price < 18;
 });
 console.log(object);

 //#3
 var currency = items.filter(function(entry){
   return entry.currency_code == 'GBP';
 });
 currency.forEach(function(entry){
   console.log(entry.title + 'costs £' + entry.price);
 });

 //#4
 var wood = items.filter(function(entry){
   return entry.materials.includes('wood');
 });
 wood.forEach(function(entry){
   console.log(entry.title);
 });
 //#5
 var materials = items.filter(function(entry){
   return entry.materials.length >= 8;
 });
 materials.forEach(function(entry){
   console.log(entry.materials);
 });
 //#6
 var  sellers = items.filter(function(entry){
   return entry.who_made == 'i_did';

 }).length;
 console.log(sellers, 'were made by their sellers');


}());
