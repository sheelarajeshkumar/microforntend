var variables;
(function (variables) {
    var testVar1;
    console.log(testVar1);
    console.log(typeof testVar1);
    var testVar2 = null;
    console.log(typeof testVar2);
})(variables || (variables = {}));
