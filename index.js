var selectedShape;

function gotoStep2() {
    let shapes = document.getElementsByName("shape");
    for (shape of shapes) {
        if (shape.checked) {
            selectedShape = shape.value;
        }
    }
    console.log(selectedShape);
    if (selectedShape) {
        document.getElementById("step1").style.display = "none";
        document.getElementById("step2").style.display = "block";
        document.getElementById("step2Description").innerHTML = `You have selected a ${selectedShape}, please input the required variables.`
        document.getElementById(`${selectedShape}`).style.display = "block";

    }
}

function gotoStep3() {
    let inputKey = [];
    let inputVal = [];
    let area;
    if (selectedShape === "circle") {
        let diameter = document.getElementById("diameter").value;
        inputKey.push(document.getElementById("diameter").id);
        inputVal.push(diameter);
        let radius = diameter / 2;
        area = 3.14 * radius * radius;
    } else if (selectedShape === "rectangle") {
        inputKey.push(document.getElementById("Length").id);
        inputKey.push(document.getElementById("Width").id);

        inputVal.push(document.getElementById("Length").value);
        inputVal.push(document.getElementById("Width").value);

        area = inputVal[0] * inputVal[1];

    } else if (selectedShape === "square") {
        inputKey.push(document.getElementById("side").id);
        inputVal.push(document.getElementById("side").value);
        area = inputVal[0] * inputVal[0];
    } else {
        inputKey.push(document.getElementById("axis-a").id);
        inputKey.push(document.getElementById("axis-b").id);

        inputVal.push(document.getElementById("axis-a").value);
        inputVal.push(document.getElementById("axis-b").value);

        area = 3.14 * inputVal[0] * inputVal[1];
    }
    if (area) {
        document.getElementById(`${selectedShape}`).style.display = "none";
        if (inputKey.length > 1) {
            document.getElementById("step3Description").innerHTML = `You have calculated the area of a ${selectedShape} with a ${inputKey[0]} of ${inputVal[0]} and ${inputKey[1]} of ${inputVal[1]}. Below is your result:`
        } else {
            document.getElementById("step3Description").innerHTML = `You have calculated the area of a ${selectedShape} with a ${inputKey[0]} of ${inputVal[0]}. Below is your result:`
        }
        document.getElementById("step2").style.display = "none";
        document.getElementById("result").innerHTML = `The Area is ${area.toFixed(2)}`;
        document.getElementById("step3").style.display = "block";
    }
}

function startOver() {
    document.getElementById("step1").style.display = "block";
    document.getElementById("step2").style.display = "none";
    document.getElementById("step3").style.display = "none";
    var selectedShape = '';
    let inputKey = [];
    let inputVal = [];
    let area = null;
}
