function submitData(){
  var career=document.querySelector("#career").value;
  var name=document.querySelector("#name").value;
  var age=document.querySelector("#age").value;
  var phoneno=document.querySelector("#phoneno").value;
  var emailid=document.querySelector("#emailid").value;
  var address=document.querySelector("#address").value;
  var ins=document.querySelector("#ins").value;
  var branch=document.querySelector("#branch").value;
  var yop=document.querySelector("#yop").value;
  var percentage=document.querySelector("#percentage").value;
  var sch=document.querySelector("#sch").value;
  var yop1=document.querySelector("#yop1").value;
  var percentage1=document.querySelector("#percentage1").value;
  var clg=document.querySelector("#clg").value;
  var branch2=document.querySelector("#branch2").value;
  var yop2=document.querySelector("#yop2").value;
  var percentage2=document.querySelector("#percentage2").value;
  var skills=document.querySelector("#skills").value;
  // indexDB implementation
  var idb=window.indexedDB || window.mozIndexedDB || window.msIndexedDB ||window.webkitIndexedDB ;
  if(!idb in window){
    console.log("indexedDB is not supported");
  }
  // indexedDB creation
var request;
var store;
  var open=idb.open("storeData",1);

  console.log("IndexedDB is created") ;

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
    store.put({
      career:career,
      name:name,
      age:age,
      phoneno:phoneno,
      emailid:emailid,
      address:address,
    education:  [{
      ins:ins,
      branch:branch,
      yop:yop,
      percentage:percentage
    },
    {
      ins:sch,
      yop:yop1,
      percentage:percentage1
    },
    {
      ins:clg,
      branch:branch2,
      yop:yop2,
      percentage:percentage2
    }
  ],
      skills:skills

    });
  }
  window.open("index.html");
}
