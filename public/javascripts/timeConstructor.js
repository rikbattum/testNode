module.exports = function (){

    var date=  new Date();

        this.getTime = function () {

            tijd = date.getDate() + ';' + date.getHours() + ':' + date.getMinutes() + ':' + date.getMilliseconds();
            return tijd;
        }




    return this;
}

