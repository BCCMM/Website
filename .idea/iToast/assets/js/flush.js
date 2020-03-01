function flushToast() {
    // alert("Toast is toasting!");
    document.getElementById("flushToast").disabled = 'true';
    document.getElementById("flushtext").innerHTML = "Toasting has begun!";

    const Url='https://i-toast.herokuapp.com/flush-toast';
    const otherPram={
        headers: {
            'Access-Control-Allow-Origin': 'http://localhost:63342'
        },
        mode: 'no-cors'
    };
    fetch(Url, otherPram)
        .then(data=>{return {}})
        .then(res=>{console.log(res)})

    var timeleft = 10;
    var downloadTimer = setInterval(function(){
        if(timeleft <= 0){
            clearInterval(downloadTimer);
            document.getElementById("done1").innerHTML = "Toast is ready!";
            document.getElementById("done2").innerHTML = "Enjoy!";
            document.getElementById("doneicon").className = "fa fa-smile-o";
            document.getElementById("timer").innerHTML = "Finished!";
            document.getElementById("flushToast").disabled = 'false';
        } else {
            document.getElementById("timer").innerHTML = "Your toast will be ready in: " + timeleft + " seconds!";
        }
        timeleft -= 1;
    }, timeleft * 100)
}
//
//
//
// function sendPostRequest() {
//     var request = require('request');
//     request.post(
//         'http://itoast.xyz',
//         { json: { key: 'value' } },
//         function (error, response, body) {
//             if (!error && response.statusCode == 200) {
//                 console.log(body);
//             }
//         }
//     )
//     var myJSONObject = { ... };
//     request({
//         url: "http://itoast.xyz",
//         method: "POST",
//         json: true,   // <--Very important!!!
//         body: myJSONObject
//     }, function (error, response, body){
//         console.log(response);
//     })
// }
