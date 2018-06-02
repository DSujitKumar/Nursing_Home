window.onload = init;
function init() {
        document.querySelector("#branches").addEventListener("mouseover",dealMouseB);
        var branches =  document.querySelector("#navSec");
        function dealMouseB() {

            branches.style="height:300px";
            branches.innerHTML="<ul> <li>Bhubaneswar</li><li>Cuttack</li><li>Roulkela</li></ul>";

        }
    document.querySelector("body").addEventListener("click",dealMouseBody);
        function dealMouseBody() {
            branches.style="height:0px";
        }
}