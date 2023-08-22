var loadbar = document.createElement("div");
var kuki = {}
for(let i of document.cookie.split(";")){
    if(i != undefined &&  i != null && i != ""){
        kuki[i.split("=")[0].trim()] = i.split("=")[1].trim()
    }
    
}
window.onload = function(){
    loadbar.style.width = "0px";
    loadbar.className = "loadbar";

    document.body.prepend(loadbar)

    var mainlogo = document.getElementsByClassName("mainlogo")[0]
    if(mainlogo != undefined){
        mainlogo.onclick = function(){
        window.location.href = "/";
        }
    }
    // Initialising the canvas
    var canvas = document.getElementById("matrix_rain_bg")  //document.querySelector('canvas'),
    ctx = canvas.getContext('2d');

    // Setting the width and height of the canvas
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Setting up the letters
    var letters = 'ABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZ';
    letters = letters.split('');

    // Setting up the columns
    var fontSize = 10,
    columns = canvas.width / fontSize;

    // Setting up the drops
    var drops = [];
    for (var i = 0; i < columns; i++) {
    drops[i] = 1;
    }

    // Setting up the draw function
    function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, .1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < drops.length; i++) {
    var text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillStyle = '#0f0';
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);
    drops[i]++;
    if (drops[i] * fontSize > canvas.height && Math.random() > .95) {
    drops[i] = 0;
    }
    }
    }

    // Loop the animation
    setInterval(draw, 33);

    // if(window.innerWidth > 800){
    
    if(document.getElementById("profile_info") != undefined){
        var profile_info = document.getElementById("profile_info");
        
        var profile_info_div = document.getElementById("profile_info_div");

        var profile_logout_div = document.getElementById("profile_logout_div");


        profile_info.status = "closed";
        
        profile_logout_div.onclick = function(){
            document.cookie = "c_user=0;expires=Thu, 01 Jan 1970 00:00:01 GMT";
            document.cookie = "xs=0;expires=Thu, 01 Jan 1970 00:00:01 GMT";
            
            window.location.href = "/";
        }
        profile_saves_div.onclick = function(){
            window.location.href = "/saved_searches";
        }
        document.body.onclick = function(e){
            let targ_ancestor = [];

            let cur = e.target.parentNode;
            while(cur != undefined){
                targ_ancestor.push(cur);
                cur = cur.parentNode;

            }
            if(profile_info.status == "closed"){
                if(e.target == profile_info){
                    profile_info.style.backgroundImage = `url("/static/arr_open.svg")`;
                    // profile_info_div.style.opacity = "1";
                    profile_info_div.style.display = "block";
                    
                    profile_info.status = "open";
                }
                
            }
            else if(profile_info.status == "open"){
                if(!targ_ancestor.includes(profile_info_div)){
                    profile_info.style.backgroundImage = `url("/static/arr.svg")`;
                    // profile_info_div.style.opacity = "0";
                    profile_info_div.style.display = "none";
                    
                    profile_info.status = "closed";
                }
                
            }


        }
        
    }
    if(feedback_div != undefined){
        document.getElementById("feedback_div").onclick = function(){
            erori("გამოხმაურება ჯერ ჯერობით არ მუშაობს, Coming soon🚀")
        }
    }
    
    // }
    // else{

    // }




    
}
function livedirect(url){

    window.location.href = url;
    // fetch(url).then(
    //     async function(resp){
            
    //         let reader = resp.body.getReader();
    //         let jamzoma = resp.headers.get("Content-Length")
    //         let chunks = [];
    //         let size = 0;
    //         while(true){
    //             let {done,value} = await reader.read();

    //             if(done){
    //                 break;
    //             }

    //             chunks.push(value);
    //             size+=value.length;
    //             loadbar.style.width = parseInt((size/jamzoma)*100) + "%";
    //             console.log(parseInt((size/jamzoma)*100))
    //         }

    //         let arai = new Uint8Array(size);
    //         let position = 0;
    //         for(let chunk of chunks){
    //             arai.set(chunk,position);
    //             position+=chunk.length;
    //         }
    //         let dekoderi = new TextDecoder("utf-8")
    //         let res = dekoderi.decode(arai)
    //         console.log(size +"baiti")

    //         document.open()
    //         document.write(res)
    //         window.history.pushState("","",url)
    //     }
    // )
}
window.addEventListener("popstate",function(event){
    let lok = window.location.href.split("/")[3]
    livedirect(`/${lok}`)
        
})

function erori(txt,type="red"){
    // if(type == "dark"){
    if(true){
        let eror_div = document.createElement("div");
        eror_div.className = "eror_div";

        let par = document.createElement("p");
        par.innerText = txt;
        par.className = "eror_par";

        eror_div.append(par);

        let mntop;
        let mxtop;

        if(window.innerWidth > 800){
            mntop = -6;
            mxtop = 6;
        }
        else{
            mntop = -6;
            mxtop = 6;
        }

        document.body.append(eror_div);
        
        let iyi = mntop;

        ixi = 0.01;
        let accel = 0.0001;
        let maxtop = mxtop;
        
        let opixi = 1;
        let vanixi = mxtop;

        function darkeror_vanish_f(){
            eror_div.style.opacity = opixi;
            eror_div.style.top = vanixi + "%";
            opixi+=-0.01;
            vanixi+=-0.01;
        }
        
        function darkchamosvla_anim_f(){
            if(iyi < maxtop){
                iyi+=ixi;
                ixi+=accel;
                accel+=0.0003;
                eror_div.style.top  = iyi +"%";
            }
            else{
                iyi = mxtop;
                eror_div.style.top  = iyi +"%";
                clearInterval(darkchamosvla_anim_inter)
                setTimeout(function(){
                    let darkeror_vanish_inter = setInterval(darkeror_vanish_f,1)
                },1000)
            }
        }
        let darkchamosvla_anim_inter = setInterval(darkchamosvla_anim_f,1);

    }
    else if(type == "red"){
        alert(txt)
    }
}










function fontsize_config(){

    document.getElementById("profile_maininfo_span").style.fontsize = (document.getElementById("profile_maininfo_span").parentNode.style.width / 150) + "px";

}
// window.addEventListener("resize",fontsize_config)

