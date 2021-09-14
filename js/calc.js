
let result = document.getElementById("output");

Number.prototype.roundTo = function(decimalPoint = 1) {
    return Math.round(this * Math.pow(10, decimalPoint)) / Math.pow(10, decimalPoint);
}

const metricCalculation = () => {
    const ratio = document.getElementById("ratio").value;
    const fuelAmt = document.getElementById("fuelAmt").value;
    if (ratio > 100 || ratio < 1 || ratio === ""){
        alert("Please enter a number between 1 and 100 for the Ratio");
        return; 
    }
    
    if (fuelAmt > 1000 || fuelAmt < 1 || fuelAmt === ""){
       alert("Please enter a number between 1 and 1000 for the amount of fuel");
       return;
    }

    const oilInMl = fuelAmt / ratio * 1000;
    result.innerHTML = `${oilInMl.roundTo(1)} millilitres of oil to mix ${fuelAmt} Litres of fuel at a ${ratio}:1 ratio.`;
} 

const imperialCalculation = () => {
    const ratio = document.getElementById("ratio").value;
    const fuelAmt = document.getElementById("fuelAmt").value;
    if (ratio > 100 || ratio < 1 || ratio === ""){
        alert("Please enter a number between 1 and 100 for the Ratio");
        return; 
    }
    
    if (fuelAmt > 1000 || fuelAmt < 1 || fuelAmt === ""){
       alert("Please enter a number between 1 and 1000 for the amount of fuel");
       return;
    }
    const litresToGal = fuelAmt * 3.78541
    const oilInOz = (litresToGal / ratio * 1000) / 29.574;
    result.innerHTML = `${oilInOz.roundTo(1)} Ounces of oil to mix ${fuelAmt} Gallons of fuel at a ${ratio}:1 ratio.`;
}

document.getElementById('calculate').onclick = function() {
    if(!document.getElementById('metric').checked && !document.getElementById('imperial').checked) {
        alert("Please select a Measurement");
        return;
    }

    if( document.getElementById('metric').checked){
        metricCalculation();
    }else{
        imperialCalculation();
    }
}

document.getElementById('refresh').onclick = function() {
    location.reload();
    ratio.innerHTML = "";
    fuelAmt.innerHTML = "";
}