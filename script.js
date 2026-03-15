function openRegister(){

document.getElementById("registerPopup").style.display="flex";

}

function closeRegister(){

document.getElementById("registerPopup").style.display="none";

}

function registerTeam(){

let name=document.getElementById("teamName").value;

let div=document.createElement("div");

div.innerText=name;

document.getElementById("teams").appendChild(div);

}

/* COUNTDOWN */

let date=new Date("March 30, 2026 18:00:00").getTime();

setInterval(()=>{

let now=new Date().getTime();

let diff=date-now;

let d=Math.floor(diff/(1000*60*60*24));

let h=Math.floor((diff%(1000*60*60*24))/(1000*60*60));

let m=Math.floor((diff%(1000*60*60))/(1000*60));

let s=Math.floor((diff%(1000*60))/1000);

document.getElementById("countdown").innerText=
d+"d "+h+"h "+m+"m "+s+"s";

},1000);
