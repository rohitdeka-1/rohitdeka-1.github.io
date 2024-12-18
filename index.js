let count = 1;
const message = document.getElementById('message');

$(document).ready(function() {
    // Handle button click event
    $(".myButton").on("click", function() {
        message.textContent = `Clicks: ${count}`;
        count += 1;
        console.log(count);
    });
});
