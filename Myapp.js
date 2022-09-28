let a=document.getElementById('greet');
let time = new Date();
let hour = time.getHours();

	if (hour>4 && hour <= 11) {
		a.innerHTML="Good Morning";
		a.style.color="#76a0ad"
	}
	else if (hour>11 && hour<=17) {
		a.innerHTML="Good Afternoon";
		a.style.color="#bfb636"
	}
	else if (hour>17 && hour<=20) {
		a.innerHTML="Good Evening";
		a.style.color= "#80e8b7"
	}
	else{
		a.innerHTML="Good Night";
		a.style.color="#2f406e"
	}




let t=()=>{
	let t=new Date().toLocaleTimeString();
	return t;
}

setInterval(() => {
    let b=document.getElementById("time");
    b.innerHTML=t();
}, 1000);







let r=butn=()=>{
	let date=document.getElementById('date').value;
	let month=document.getElementById('month').value;
	let year=document.getElementById('year').value;

	if(date<=0 && date>=32){
		alert('Invalid date!!!');
		return;
	}

    let dob=new Date(`${date} ${month} ${year}`);  
	let now=new Date();
    let diff=now-dob;

	let years=Math.floor(diff/(1000*60*60*24*365));  
	alert(`Your age is ${years}.`);

}




