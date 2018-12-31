var frameModule = require('ui/frame');

exports.loaded = function () {
    console.log("hello 1")
};

exports.signIn = function () {
    alert("signing in")
};

exports.register = function () {
    var topmost = frameModule.topmost();
    topmost.navigate("views/register/register");
};
