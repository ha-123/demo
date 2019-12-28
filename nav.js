window.onscroll= function() {scrollFunction()};
function scrollFunction(){
    if(document.body.scrollTop> 100 || document.documentElement.scrollTop> 100){
            document.getElementById('tops').style.height="60px";
            document.getElementById('logo').style.fontSize="20px";
        }
    else{
        document.getElementById('tops').style.height="70px ";
            document.getElementById('logo').style.fontSize="30px";

    }
}

function openPage(){
    document.getElementById("page").style.height="100%";

}
function closePage(){
    document.getElementById("page").style.height="0%";

}