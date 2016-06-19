
function tm()
{
	var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    m = checkTime(m);
    console.log(h + ":" + m );
    var t = setTimeout(tm, 500);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  
    return i;
}