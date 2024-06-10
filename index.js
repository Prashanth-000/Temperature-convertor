const textbox=document.getElementById("textbox");
const to_cel=document.getElementById("tocel");
const to_far=document.getElementById("tofar");
const subm=document.getElementById("submited");
const result=document.getElementById("res");
let temp;
let ans;
subm.onclick=function(){
    temp=Number(textbox.value);
    if(to_cel.checked){
        console.log("F to C selected");
        ans=(temp-32)*5/9;
        result.textContent=`${ans.toFixed(2)} C`;
    }
    else if(to_far.checked){
        console.log("C to F selected");
        ans=(temp*9/5)+32;
        result.textContent=`${ans.toFixed(2)} F`;
    }
    else{
        console.log("option//")
        result.textContent=`Enter the  proper values!`;
    }
}

