$(document).ready(function(){
$.getJSON("/data",function(d){
//alert(JSON.stringify(d));
$("#company").text(d.company);
$("#name").text(d.name);
$("#regno").text(d.regno);
})
})