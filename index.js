var count = 0;
function displayMessage() {
    const message = document.getElementById('message');
    message.textContent = "Clicks : "+count;
    count += 1;
    console.log(count);
}
