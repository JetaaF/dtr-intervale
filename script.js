let INTERVAL

function startinterval() {
    INTERVAL = setInterval(datet,1000);
}
function endinterval(){
    clearInterval(INTERVAL);
}
function datet(){
    const currentdate = new Date();
    const outputelement = document.getElementById('output')
    outputelement.textContent = 'Current date:' + currentdate.toLocaleString()
}