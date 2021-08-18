// document.getElementById('first').style.color = "yellow"
let count = 1;
// let turn1 = document.getElementById('first');
// let turn2 = document.getElementById('second');
// console.log(turn1);

// let para =  document.getElementById('div1');
// let para =  document.getElementById('div2');
// let para =  document.getElementById('div3');
// let para =  document.getElementById('div4');
// let para =  document.getElementById('div5');
// let para =  document.getElementById('div6');
// let para =  document.getElementById('div7');
// let para =  document.getElementById('div8');
// let para =  document.getElementById('div9');


// 			para.addEventListener('mouseover',function run(){
// 				para.style.backgroundColor = "yellow";
// 			});
function fill(control) {
	if (count <= 9) {
		if (count % 2 != 0) {
			document.getElementById('first').style.color = "black"
			document.getElementById('second').style.color="yellow"

			document.getElementById(control.id).innerHTML = 'O';
			document.getElementById(control.id).style.color = 'blue';
		} else {
			
			document.getElementById('first').style.color = "yellow"
			document.getElementById('second').style.color="black"
			
			document.getElementById(control.id).innerHTML = 'X';
			document.getElementById(control.id).style.color = 'red';
		}
        count++;
		if (winner()) {
		
			// alert("winner");
			swal("winner winner", "chicken dinner", "success");
				gamefinished();
				count = 1;
				document.getElementById('first').style.color = "yellow";
				document.getElementById('second').style.color="black";
			
		}
		
	} 
    else
     {
		screenclear();
	}
}
    function screenclear()
    {   
		swal("Match draw!");
		// swal.style.innerText="bold"
		swal({
			title: "NEXT BATTLE?",
			text: "Would you like to go for more?",
			icon: "warning",
			buttons: true,
			dangerMode: true,
		  })
		  .then((willDelete) => {
			if (willDelete) {
			  swal("", {
				icon: "success",
				text:"Get Ready for Nect Round"
			  });
			   
				count = 1;
				document.getElementById('first').style.color = "yellow"
				document.getElementById('second').style.color="black"

			
			} else {
			  swal("Okay! The Battel is over now");
			}
		  });
	
		document.getElementById('div1').innerText = '';
		document.getElementById('div2').innerText = '';
		document.getElementById('div3').innerText = '';
		document.getElementById('div4').innerText = '';
		document.getElementById('div5').innerText = '';
		document.getElementById('div6').innerText = '';
		document.getElementById('div7').innerText = '';
		document.getElementById('div8').innerText = '';
		document.getElementById('div9').innerText = '';
	
		
    }
	function gamefinished()
	{
		document.getElementById('div1').innerText = '';
		document.getElementById('div2').innerText = '';
		document.getElementById('div3').innerText = '';
		document.getElementById('div4').innerText = '';
		document.getElementById('div5').innerText = '';
		document.getElementById('div6').innerText = '';
		document.getElementById('div7').innerText = '';
		document.getElementById('div8').innerText = '';
		document.getElementById('div9').innerText = '';
	}

function winner() {
	let d1 = document.getElementById('div1');
	let d2 = document.getElementById('div2');
	let d3 = document.getElementById('div3');
	let d4 = document.getElementById('div4');
	let d5 = document.getElementById('div5');
	let d6 = document.getElementById('div6');
	let d7 = document.getElementById('div7');
	let d8 = document.getElementById('div8');
	let d9 = document.getElementById('div9');
 
    if(d1.innerHTML==d2.innerHTML && d2.innerHTML==d3.innerHTML)
    {
        if(d1.innerHTML!="" && d2.innerHTML!="" && d3.innerHTML!="")
        {
            return true;
        }
    }
	else if(d4.innerHTML==d5.innerHTML && d5.innerHTML==d6.innerHTML)
    {
        if(d4.innerHTML!="" && d5.innerHTML!="" && d6.innerHTML!="")
        {
            return true;
        }
    }
	else if(d7.innerHTML==d8.innerHTML && d8.innerHTML==d9.innerHTML)
    {
        if(d7.innerHTML!="" && d8.innerHTML!="" && d9.innerHTML!="")
        {
            return true;
        }
    }
	else if(d1.innerHTML==d4.innerHTML && d4.innerHTML==d7.innerHTML)
    {
        if(d1.innerHTML!="" && d4.innerHTML!="" && d7.innerHTML!="")
        {
            return true;
        }
    }
	else if(d2.innerHTML==d5.innerHTML && d5.innerHTML==d8.innerHTML)
    {
        if(d2.innerHTML!="" && d5.innerHTML!="" && d8.innerHTML!="")
        {
            return true;
        }
    }
	else if(d9.innerHTML==d6.innerHTML && d6.innerHTML==d3.innerHTML)
    {
        if(d9.innerHTML!="" && d6.innerHTML!="" && d3.innerHTML!="")
        {
            return true;
        }
    }
	else if(d3.innerHTML==d5.innerHTML && d5.innerHTML==d7.innerHTML)
    {
        if(d3.innerHTML!="" && d5.innerHTML!="" && d7.innerHTML!="")
        {
            return true;
        }
    }
	else if(d1.innerHTML==d5.innerHTML && d5.innerHTML==d9.innerHTML)
    {
        if(d1.innerHTML!="" && d5.innerHTML!="" && d9.innerHTML!="")
        {
            return true;
        }
    }
}


