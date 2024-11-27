
    // J-QUERY

    // section-1 
    
    // email

document.getElementById("form").onsubmit = function(event){
    document.getElementById("err_1").innerHTML = ""
    event.preventDefault()

    try{
        let email = document.getElementById("email").value

        if(email === "" ||!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)){
                throw new Error("Enter Valid Email")
            }
        }
        catch(e){
            document.getElementById("err_1").innerHTML = e.message
        }
}

    // header

    $(document).ready(function(){
        $(Window).scroll(function(){
            if($(document).scrollTop()>30){               
                $("#head").css("width","100%")
                $("#head").css("transition-duration","1s")
                $("#head").css("margin-top","-50px")
                $("#head").css("border-radius","0px")
            } 
            else{
                $("#head").css("margin-top","0px")
                $("#head").css("border-radius","40px")
                $("#head").css("transition-duration","1s")
                $("#head").css("width","80%")
            }
        })
    })
    
    // button
    
$(document).ready(function(){
    $(".btn-h-1").mouseenter(function(){
        $(".btn-h-1").css("background-color","black")
        $(".btn-h-1").css("transition-duration","0.3s")
    })
    $(".btn-h-1").mouseleave(function(){
        $(".btn-h-1").css("background-color","#FF6481")
        $(".btn-h-1").css("transition-duration","0.3s")
    })

    $(".btn-h-2").mouseenter(function(){
        $(".btn-h-2").css("background-color","black")
        $(".btn-h-2").css("transition-duration","0.3s")
    })
    $(".btn-h-2").mouseleave(function(){
        $(".btn-h-2").css("background-color","#FF6481")
        $(".btn-h-2").css("transition-duration","0.3s")
    })

    $("#explore").mouseenter(function(){
        $("#explore").css("background-color","black")
        $("#explore").css("transition-duration","0.3s")
    })
    $("#explore").mouseleave(function(){
        $("#explore").css("background-color","#FF6481")
        $("#explore").css("transition-duration","0.3s")
    })

    $("#submit").mouseenter(function(){
        $("#submit").css("background-color","black")
        $("#submit").css("transition-duration","0.3s")
    })
    $("#submit").mouseleave(function(){
        $("#submit").css("background-color","#FF6481")
        $("#submit").css("transition-duration","0.3s")
    })
})      


// $(document).ready(function(){
//     $(".btn-setting").mouseenter(function(){
//         $(".btn-setting").css("height","100px")
//         $(".btn-setting").css("width","50px")
//         $(".btn-setting").css("background-color","red")
//         $(".btn-setting").css("transition-duration","0.3s")
//     })
//     $(".btn-setting").mouseleave(function(){
//         $(".btn-setting").css("height","50px")
//         $(".btn-setting").css("width","50px")
//         $(".btn-setting").css("background-color","white")
//         $(".btn-setting").css("transition-duration","0.3s")
 
//     })
// })    

function BG(){

    document.getElementById('sec-1').style.background = "black"
    document.getElementById('h6').style.color = "white"
    document.getElementById('sec-2').style.background = "black"
    document.getElementById('h5').style.color = "white"
    document.querySelector('p').style.color = "white"
    document.querySelector('h2').style.color = "white"
    document.getElementById('sec-3').style.background = "black"
    document.querySelector('h5').style.color = "black"
    document.getElementById('sec-4').style.background = "black"
    document.getElementById('contact').style.color = "white"
    document.getElementById('sec-6').style.background = "black"
    document.getElementById('foot-h6-1').style.color = "white"
    document.getElementById('foot-h6-2').style.color = "white"
    document.getElementById('foot-p').style.color = "white"
    document.getElementById('foot-h6-3').style.color = "white"
    document.getElementById('li1').style.color = "white"
    document.getElementById('li2').style.color = "white"
    document.getElementById('li2').style.color = "white"
    document.getElementById('li3').style.color = "white"
    document.getElementById('li4').style.color = "white"
    document.getElementById('li5').style.color = "white"
    document.getElementById('li6').style.color = "white"
    document.getElementById('li7').style.color = "white"
    document.getElementById('li8').style.color = "white"
    document.getElementById('li9').style.color = "white"
}
function BACKGROUND(){  

    document.getElementById('sec-1').style.background = "#FFF4F5"
    document.getElementById('h6').style.color = "black"
    document.getElementById('sec-2').style.background = "#FFF4F5"
    document.getElementById('h6').style.color = "black"
    document.getElementById('h5').style.color = "black"
    document.querySelector('p').style.color = "black"
    document.querySelector('h2').style.color = "black"
    document.getElementById('sec-3').style.background = "#FFF4F5"
    document.querySelector('h5').style.color = "white"
    document.getElementById('sec-4').style.background = "#FFF4F5"
    document.getElementById('contact').style.color = "black"
    document.getElementById('sec-6').style.background = "#FFF4F5"
    document.getElementById('foot-h6-1').style.color = "black"
    document.getElementById('foot-h6-2').style.color = "black"
    document.getElementById('foot-p').style.color = "black"
    document.getElementById('foot-h6-3').style.color = "black"
    document.getElementById('li1').style.color = "black"
    document.getElementById('li2').style.color = "black"
    document.getElementById('li2').style.color = "black"
    document.getElementById('li3').style.color = "black"
    document.getElementById('li4').style.color = "black"
    document.getElementById('li5').style.color = "black"
    document.getElementById('li6').style.color = "black"
    document.getElementById('li7').style.color = "black"
    document.getElementById('li8').style.color = "black"
    document.getElementById('li9').style.color = "black"
}

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
 