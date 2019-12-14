let el = function(element) {
    if (element.charAt(0) === "#") {
        return document.querySelector(element);
    }
    return document.querySelectorAll(element);
};

let input = el("#input"),
    history = el("#history"),
    equals = el("#equals"),
    nums = el(".num"),
    ops = el(".ops"),
    theNum = "",
    oldNum = "",
    resultNum,
    operator = "",
    equal = "";

let setNum = function() {
    if (resultNum) {
        theNum = this.getAttribute("data-num");
        resultNum = "";
    } else {
        theNum += this.getAttribute("data-num");
    }
    history.innerHTML = [oldNum + " " + operator + " " + theNum + " " + equal];
};
let moveNum = function() {
    oldNum = theNum;
    theNum = "";
    operator = this.getAttribute("data-ops");
    equals.setAttribute("data-result", "");
    equal = "=";
};
let displayNum = function() {
    oldNum = parseFloat(oldNum);
    theNum = parseFloat(theNum);
    switch (operator) {
        case '+':
            resultNum = oldNum + theNum;
            break;
        case "-":
            resultNum = oldNum - theNum;
            break;
        case "*":
            resultNum = oldNum * theNum;
            break;
        case "/":
            resultNum = oldNum / theNum;
            break;
        case '%':
            resultNum = oldNum % theNum;
            break;
        default:
            resultNum = theNum;
    }
    input.innerHTML = resultNum;
    equals.setAttribute("data-result", resultNum);
    oldNum = "";
    theNum = resultNum;
    operator = "";
    equal = "";
};
let clearAll = function() {
    oldNum = "";
    theNum = "";
    operator = "";
    history.innerHTML = "";
    input.innerHTML = "";
    equals.setAttribute("data-result", resultNum);
    equal = "";
};
for (let i = 0, l = nums.length; i < l; i++) {
    nums[i].onclick = setNum;
}
for (let i = 0, l = ops.length; i < l; i++) {
    ops[i].onclick = moveNum;
}
el("#clean").onclick = clearAll;