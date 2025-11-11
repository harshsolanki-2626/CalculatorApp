let result = document.getElementById("result"); 
function addnum(v) {
    let olddata = result.value;
    let t = olddata.length;
    let chedata =olddata[t-1]; 
            let oprdata=["/","*","-","+",".",];
        if (oprdata.includes(v)) {
            if (oprdata.includes(chedata)) {
                let remuve = olddata.slice(0,-1);
                     result.value = remuve + v;
            }else{
                result.value = olddata + v;
            }
        }else{
            result.value = olddata + v;
        }
}
function equaldata(params) {
    let olddata = eval(result.value);
     result.value = olddata;
 }
 function clin(params) {
       let olddata = result.value; 
       let ac = olddata="";
        result.value = ac;
 }
 function oneDataRemuve(params) {
    let olddata = result.value; 
    let newdata = olddata.slice(0,-1);
    result.value = newdata;
 }
 
    function calculate() {
  try {
    let expression = result.value.replace("%", "/100"); // % works as divide by 100
    result.value = eval(expression);
  } catch {
    result.value = "Error";
  }
}