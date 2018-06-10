window.onscroll = function() {typewriter()};

function typewriter() {

	if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350)
	{
	
	var i=0,j=0,k=0,l=0;

	if (i <= 400) {
    document.getElementById('students').innerHTML = i;
    i++;

    if (j <= 30) {
    document.getElementById('staff').innerHTML = j;
    j++;

    if (k <= 10) {
    document.getElementById('hab').innerHTML = k;
    k++;

    if (l <= 3) {
    document.getElementById('wardens').innerHTML = l;
    l++;


    setTimeout(typeWriter, 10);
}
}