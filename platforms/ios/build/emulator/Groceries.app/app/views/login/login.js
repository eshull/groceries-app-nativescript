var frameModule = require('ui/frame');
var observableModule = require('data/observable')
var UserViewModel = require("../../shared/view-models/user-view-model");
var dialogModule = require("ui/dialogs");

var user = new UserViewModel({
    email: "eric@eric.com",
    password: "@password1234"
});
var page;
var email;

exports.loaded = function (args) {
    page = args.object;
    page.bindingContext = user;
};

exports.signIn = function () {
    user.login()
        .catch(function (error) {
            console.log(error);
            dialogModule.alert({
                message: 'Unfortunately we could not find your account',
                okButtonText: 'OK'
            });
            return Promise.reject();
        })
        .then(function () {
            frameModule.topmost().navigate('views/list/list');
        });
}

exports.register = function () {
    var topmost = frameModule.topmost();
    topmost.navigate("views/register/register");
};
