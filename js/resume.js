var para;
var paravalue;
var query=window.location.search.substring(1).split("?");
for(var i in query)
{
  para=query[i].split("=");
  paravalue=parseInt(para[1]);
}



var idb=window.indexedDB || window.mozIndexedDB || window.msIndexedDB ||window.webkitIndexedDB ;
if(!idb in window){
  console.log("indexedDB is not supported");
}
// indexedDB creation
var request;
var store;
var open=idb.open("storeData",1);
console.log("IndexedDB is created");
open.onupgradeneeded=function(e){
request=e.target.result;
store=request.createObjectStore("formdata",{keyPath:"id",autoIncrement:true});
  console.log("store is created");
}
open.onerror=function(error){
  console.log("error is occured");
}
open.onsuccess=function(e){
  request=e.target.result;
  var transaction=request.transaction("formdata","readwrite");
  store=transaction.objectStore("formdata");
  var info=store.get(paravalue);
  info.onsuccess=function(data){
    console.log(data.target.result);
    personalinfo(data.target.result);
    rightinfo(data.target.result);
  }
}
var left=document.querySelector(".left");
function personalinfo(pi){
  var image=document.createElement("img");
  image.src="images/dual-guitar.svg";
  image.alt=pi.name;
  left.append(image);
  var name=document.createElement("name");
  name.textContent=pi.name;
  left.append(name);
  var age=document.createElement("age");
  age.textContent=pi.age;
  left.append(age);
  var phoneno=document.createElement("phoneno");
  phoneno.textContent=pi.phoneno;
  left.append(phoneno);
  var emailid=document.createElement("emailid");
  emailid.textContent=pi.emailid;
  left.append(emailid);
  var address=document.createElement("address");
  address.textContent=pi.address;
  left.append(address);
}
var right=document.querySelector(".right");
function rightinfo(pa){
  var h=document.createElement("h1");
  h.textContent="career_objective";
  right.append(h);

  var hr=document.createElement("hr");
  right.append(hr);

var career=document.createElement("career");
career.textContent=pa.career;
right.append(career);

var h=document.createElement("h1");
h.textContent="Educational details";
right.append(h);
var hr=document.createElement("hr");
right.append(hr);


var table=document.createElement("table");
table.border="1";
var tr1="<tr><th>ins</th><th>branch</th><th>yop</th><th>percentage</th><tr>";
var tr2=" ";
for(var i in pa.education)
{
tr2=tr2+"<tr><th>"+pa.education[i].ins+"</th><th>"+pa.education[i].branch+"</th><th>"+pa.education[i].yop+"</th><th>"+pa.education[i].percentage+"</th></tr>";
}
table.innerHTML=tr1+tr2;
right.append(table);



var skills=document.createElement("h1");
skills.textContent="Skills";
right.append(skills);
var hr=document.createElement("hr");
right.append(hr);

var info=document.createElement("info");
info.textContent=pa.skills;
right.append(info);

}
