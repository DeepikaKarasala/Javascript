let massInput=document.getElementById("mass")
let heightInput=document.getElementById("height")
let result=document.getElementById("result")
let error=document.getElementById("error")
const validateinput= ()=>{
    result.innerText=" "
    error.innerText=""
    if(massInput.value===""){
        error.innerText="please provide mass !"
        return false
    }
    else if(!/\d+/.test(massInput.value)){
        error.innerText="please provide mass in kgs !"
        return false
    }
    if(heightInput.value===""){
        error.innerText="please provide height !"
        return false
    }
    else if(!/\d+/.test(heightInput.value)){
        error.innerHTML="please provide height in cms !"
        return false
    }
    return true
}
const calculateBmi=()=>{
    var mass=parseFloat(massInput.value)
    var height=parseFloat(heightInput.value)
    bmi=mass/(height/100)**2;
    bmiRound=bmi.toFixed(2)
    if(bmi<=18.5){
        result.innerHTML=`Your BMI is : ${bmiRound}<br> you are under weighted!!!`;
    }
    else if(bmi<=25){
        result.innerHTML=`Your BMI is : ${bmiRound}<br> you are normal weighted!!!`;
    }
    else if(bmi<=30){
        result.innerHTML=`You are BMI is:${bmiRound} <br> Over weighted!!`;
    }
    else{
        result.innerHTML=`You are BMI is:${bmiRound} <br> You are obesed!!`;
    }

}