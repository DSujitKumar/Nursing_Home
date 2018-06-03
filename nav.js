window.onload = init;
function init() {
        document.querySelector("#branches").addEventListener("mouseover",dealMouseB);
        document.querySelector("#Specialty").addEventListener("mouseover",dealMouseS);
        document.querySelector("#home").addEventListener("mouseover",dealMouseBody);
        document.querySelector("#about").addEventListener("mouseover",dealMouseBody);
        document.querySelector("#departments").addEventListener("mouseover",dealMouseBody);
        document.querySelector("#contactUs").addEventListener("mouseover",dealMouseBody);
        var navSec =  document.querySelector("#navSec");
        function dealMouseB() {

            navSec.style="height:300px";
            navSec.innerHTML="<ul> <li>Bhubaneswar</li><li>Kolkata</li><li>Hyderabad</li><li>Delhi</li><li>Mumbai</li></ul>";

        }
        function dealMouseS() {
            navSec.style="height:300px";
            navSec.innerHTML="<ul> <li>Orthopaedics & Joint Replacement</li><li>Blood Bank & Transfusion Medicine</li><li>Paediatrics & Neonatology</li><li>Dentistry & Maxillo Facial Surgery</li>" +
                "<li>Dermatology</li><li>Emergency & Critical Care</li><li>Ent & Head Neck Surgery</li><li>Radiology & Interventional Radiology</li><li>Urology & Nephrology</li><li>Laboratories</li></ul>";
        }

    document.querySelector("body").addEventListener("click",dealMouseBody);
        function dealMouseBody() {
            navSec.style="height:0px";
        }
}