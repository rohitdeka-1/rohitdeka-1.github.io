let count = 1;
const message = document.getElementById('message');

$(document).ready(function() {
    if($(".reset").on("click",function(){
        count = 0;
        message.textContent = `Clicks: ${count}`;
        count = 1;
    }))
    $(".myButton").on("click", function() {
        message.textContent = `Clicks: ${count}`;
        count += 1;
        console.log(count);
    });
});


