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
            navSec.innerHTML="<ul> <a href='Orthopaedics.html'><li>Orthopaedics & Joint Replacement</li></a><a href='Blood_Bank.html'><li>Blood Bank & Transfusion Medicine</li></a><a href='Paediatrics_Neonatology.html'><li>Paediatrics & Neonatology</li></a><a href='Dentistry.html'><li>Dentistry & Maxillo Facial Surgery</li></a>" +
                "<a href='Dermatology.html'><li>Dermatology</li></a><a href='Emergency_Critical_Care.html'><li>Emergency & Critical Care</li></a><a href='ent_neck.html'><li>Ent & Head Neck Surgery</li></a><a href='Radiology.html'><li>Radiology & Interventional Radiology</li></a><a href='Urology_Nephrology.html'><li>Urology & Nephrology</li></a><a href='Laboratory.html'><li>Laboratories</li></a></ul>";
        }

    document.querySelector("body").addEventListener("click",dealMouseBody);
        function dealMouseBody() {
            navSec.style="height:0px";
        }

}