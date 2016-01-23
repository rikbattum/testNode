// riks Own console version


module.exports = function () {
var colors= require('colors');
    var tijd = require('./timeConstructor');
    var moment = require('moment');



    var tijd = tijd ();


    moment.locale('nl');

    var x = 'hello world';
var y = ['hello rik', 'hello jan', 'hello truus'];

    this.logSomething = function (msg) {
        console.log (moment().format('lll') + ' this is time ' + tijd.getTime()+ ' ' + msg.green);
    }

    this.logError = function (error) {

        console.log (colors.rainbow(moment().format('lll') + ' this is time ' + tijd.getTime()+ ' ' + error));
    }

return this;

}


