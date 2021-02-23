let btn = document.getElementById("btnFind");
document.addEventListener("keyup", function(event){
  if(event.keyCode === 13){
  document.getElementById("btnFind").click();
}
});
btn.addEventListener("click",async function btnClK(){
let inVal = document.getElementById("countryName").value;
let inp = document.getElementById("countryName");
if (inVal == ""){
  alert("Please enter a country name...")
}
else{
  inp.style.borderColor = "a9a9a9";
  let temp = "https://restcountries.eu/rest/v2/name/" + inVal;
  let response = await fetch(temp);
  let countries = await response.json();
  document.getElementById('result').innerHTML="";
  document.getElementById('numOfResult').innerHTML="";

  for(let cnt in countries){
  let country = countries[cnt];
  //alert(country);

  function createTable(){
    let tbl=document.createElement('table');
    tbl.className += "resultTBL";

    for (let prop in country){
    if(`${country[prop]}` != [] && `${country[prop]}` != 'null'){

      let tr = tbl.insertRow();
      let td = tr.insertCell();
      td.className += "firstTd";
      let ul=document.createElement('ul');
      let li=document.createElement('li');
      ul.style.listStyle = 'none';
      li.innerHTML=`${prop}` ;
      ul.appendChild(li);
      td.appendChild(ul);

      let td2 = tr.insertCell();
      td2.className += "secondTd";
      let ul2=document.createElement('ul');
      let li2=document.createElement('li');
      ul2.style.listStyle = 'none';
      li2.innerHTML= `${country[prop]}`;
      ul2.appendChild(li2);
      td2.appendChild(ul2);

      if(`${prop}` == 'flag'){
        td2.innerHTML="";
        let img = document.createElement('img');
        img.src = `${country[prop]}`;
        img.style.width = '80px';
        img.style.height = '45px';
        img.style.marginLeft = '40px';
        td2.appendChild(img);
      }else if(`${prop}` == 'languages'){
        td2.innerHTML='';
        let lan = [];
        for(let i=0; i<country.languages.length; i++){
          lan[i]= country.languages[i].name;
          td2.innerHTML += "<span>"+lan[i]+"</span><br /> ";
         }
      }else if(`${prop}` == 'currencies'){
        td2.innerHTML="";
        let cur = [];
        for(let i=0; i<country.currencies.length; i++){
          cur[i]= country.currencies[i].name;
          td2.innerHTML += "<span>"+cur[i]+"</span><br /> ";
         }
      }else if(`${prop}` == 'translations'){
        tr.remove();
      }else if(`${prop}` == 'regionalBlocs'){
        td2.innerHTML="";
        let reg = [];
        for(let i=0; i<country.regionalBlocs.length; i++){
          reg[i]= country.regionalBlocs[i].name;
          td2.innerHTML += "<span>"+reg[i]+"</span><br /> ";
         }
      }            
    }
  }

document.getElementById('result').appendChild(tbl);
  }
    createTable();
  }
let num = document.createTextNode(countries.length + " Result(s) :");
document.getElementById('numOfResult').appendChild(num);
}
});


//materializ css

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
});

document.addEventListener('DOMContentLoaded', function() {
     var elems = document.querySelectorAll('.slider');
     var instances = M.Slider.init(elems);
  });
