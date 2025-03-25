const calcu = {
ch: heronFormula,
ca: ambiguousCase,
cn: newtonMethod,
cp: polynomialFunction
};

Object.keys(calcu).forEach(id => {
    document.getElementById(id).addEventListener("click", calcu[id]);
});

function heronFormula() {
    const a= Number(document.getElementById("ha").value);
    const b= Number(document.getElementById("hb").value);
    const c= Number(document.getElementById("hc").value);
    
    document.getElementById("ah").value = "";
    let area = Math.round((0.25 * (Math.sqrt(4 * a ** 2 * b ** 2 -(a ** 2 + b ** 2 - c ** 2) **2 ))) * 100) / 100;
    document.getElementById("ah").value = area;
    console.log("efewfef");
}

function ambiguousCase(){
    const angleA= Number(document.getElementById("aca").value);
    const sideA= Number(document.getElementById("acb").value);
    const sideB= Number(document.getElementById("acc").value);

    document.getElementById("act").value = null;
    let h = sideB * Math.sin(angleA);
    if (angleA<=90) {
        if (sideA<h){
            document.getElementById("act").value = "No triangle";
        } else if (sideA === h) {
            document.getElementById("act").value = "Right triangle";
        } else if (sideA > sideB) {
            document.getElementById("act").value = "One triangle";
        } else if (h < sideA < sideB) {
            document.getElementById("act").value = "Two triangle";
        }
    }

else if (180> angleA > 90) {
    if (sideA < sideB || sideB === sideA){
        document.getElementById("act").value = "No triangle";
    } else if (sideA > sideB ){
        document.getElementById("act").value = "One triangle";
    }
}
}

function newtonMethod(){
    const rg = document.getElementById("rg").value;
    let x1 = 0;
    let x0 = rg;
    while (true) {
        x1 = x0-( 6 * x0 ** 4 - 13 * x0 ** 3 - 18 * x0 **2 + 7 * x0 +6) / (24 * x0 ** 3 - 39 * x0 **2 - 36 * x0 +7);
        document.getElementById("ra").value = Math.round(x1 * 100) /100;
        if (Math.abs(x0-x1) < 0.001) break;
        x0 = x1;
    }
}

function polynomialFunction() {
    const a = document.getElementById("co").value;
    const b = document.getElementById("ex").value;
    const c = document.getElementById("xv").value;

    const coArray = a.split(' ').map(Number);
    const expArray = b.split(' ').map(Number);

    let result = 0;
    let polyFunc ="";
    
    for (let i=0; i< coArray.length; i++) {
        result += coArray[i] * Math.pow(c, expArray[i]);
        if (coArray.length -i > 1) {
            polyFunc += coArray[i]+ "x^" + expArray[i] + " + "
        } else {
            polyFunc += coArray[i] + "x^" + expArray[i]
        }
    }
    document.getElementById("pf").value = polyFunc;
    document.getElementById("pe").value = "f(" + c + ") =" + result;
}