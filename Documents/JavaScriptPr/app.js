
const button=document.getElementById("dugme");

/*console.log(button.getAttribute("dugme"));
const claslar=button.classList;
console.log(claslar);
button.innerHTML="<b>Bas</b>";
*/
const secilen=document.querySelectorAll("#ornek")[0];

console.log(secilen);
secilen.style.color="white";
secilen.style.backgroundColor="gray";
secilen.style.fontWeight="bold";
secilen.style.padding="20px";
button.style.color="black";
button.style.background="pink";
const click="click";
let degisti=false;
const myButton=document.getElementById("actionB");
function myFunction() {
    // Select first child element:
    const element = document.getElementById("myList").children[0];
    const newNode = document.createTextNode("Water");
    element.replaceChild(newNode, element.childNodes[0]);
}    
function changeColor()
{
 
    degisti?degisti=false:degisti=true;
    if(!degisti){const myList=document.getElementById("myList").children[1];    
    myList.style.color="pink";
    myList.style.backgroundColor="yellow";
   
    
    }
    if(degisti){
        
        const myList=document.getElementById("myList").children[1]; 
        myList.style.backgroundColor="gray";
        myList.style.color="black";
        myList.position="absolute";
       
         
    }

}

const tus=document.querySelector('#myList').children[2];
const tusa=document.querySelector('#myList');
window.addEventListener(click,act);
tusa.addEventListener("mouseover",actu);
tusa.addEventListener("mouseout",actum);
function act(){
    tus.textContent="su";
}
function actu(){
    tusa.style.color="red";
    tus.style.color="blue";
    tusa.style.backgroundColor="white"
}function actum(){
    tusa.style.color="black";
    tus.style.color="orange";
    tusa.style.backgroundColor="pink"
}



