function setHome() {

    highlightButton("home")
    document.getElementById("contentHeader").innerHTML =`<h1>Who I am</h1>`
    document.getElementById("contentBody").innerHTML = `
    <div class = "aboutSection">
        <div class = "aboutText">
            <p>
            hello
            </p>
        </div>
    
        <div class = "aboutImg" >
            <img src = "src/imgs/Science_Rendezvous_2025.jpg">
        </div>
    </div>

    <div class = "aboutSection">

        <div class = "aboutImg" >
            <img src = "src/imgs/Hackathon2024.jpeg">
        </div>

        <div class = "aboutText">
            <p>
            hello
            </p>
        </div>
    
    </div>
    `
}

function setProj() {

    highlightButton("proj")
    document.getElementById("contentHeader").innerHTML =`<h1>Projects</h1>`
    document.getElementById("contentBody").innerHTML = `

    <section class="aboutMain">
        
        <section class = "body">

            <a href="https://github.com/williamgore/websiteV2" target="_blank">
                <h2>
                    This Website
                </h2>
            </a>
            
            
            <p>
                This website has gone through a number of iterations, all of which are available on my GitHub. Originally being purely html and CSS, I improved it iteratively to its current state. 
                Through this process I was able to improve my front-end abilities and improve my sense of style in web development.
            </p>

        </section>

        <section class = "body">


        <a href="https://github.com/williamgore/FastPass" target="_blank">
            <h2>
                Python FastPass Implementation
            </h2>
        </a>
            
            <p>
                My goal with this project was to replicate the original Disney FastPass system. The implementation is comprised of two main components, a client, and a server that interacts with a locally hosted database.
                Upon receiving a request, through stdin, the client sends a message via TCP to the server with the guest's information. The server then queries the database to validate the guest's information and determine whether or not a 
                FastPass should be distributed. If a FastPass is allowed, the server will send an OK message back to the client. Upon successful distribution of the FastPass, the client sends another message to the server so the database can be updated.
            </p>

        </section>

        <section class = "body">

            <a href="https://github.com/williamgore/weatherDataPullV1" target="_blank">
                <h2>
                    Python Weather Data Project
                </h2>
            </a>

            <p>
                    This was my first experience writing in Python. I coded this up as an easy way to track weather trends as thats something that interests me.
                Learning the Python syntax was a headache at first but once I got used to it I realised how powerful it can be.
                Since then I've used python for playing around with distributed systems and sockets.
            </p>

        </section>
        
    </section>
    `

}

function setResume() {
    highlightButton("resume")
    document.getElementById("contentHeader").innerHTML =`<h1>Resumé</h1>`
    document.getElementById("contentBody").innerHTML = `
    <div class="aboutMain">
        

    <h1>
        Education
    </h1>

    <div class = "body">
        <h2>
            University of Manitoba, Faculty of Science, Computer Science
        </h2>
        
        <p>
            September 2022 - December 2026 (Estimated) <br />
            Major: Computer Science <br/>
            Minor: Statistics
        </p>

    </div>

    <h1>
        <br/>Work Experience
    </h1>


    <div class = "body">
        <h2>
            Tavern on King Edward, 1760 Sargent Ave — Bartender
        </h2>
        
        <p>
            May 2025 - Present <br />
            Balancing multiple tasks simultaneously while also keeping an efficient workflow.
        </p>

    </div>


    <div class = "body">
        <h2>
            St James Assiniboia School Division, 678 Moray St — Grounds
        </h2>
        
        <p>
            June 2024 - August 2024 <br />
            Learned to manage a schedule to ensure tasks were completed on time across multiple sites.
        </p>

    </div>

    <div class = "body">
        <h2>
            Uptown Alley, 1301 St Matthews Ave — Bartender
        </h2>
        
        <p>
            November 2022 - Present <br />
            Organizing large groups of people to ensure efficient and effective service.
        </p>

    </div>

    <div class = "body">
        <h2>
            Subway, 2539 Portage Ave — Sandwich Artist, Closer
        </h2>
        
        <p>
            March 2020 - September 2022 <br />
            Worked independently and held myself accountable in absence of supervision.
        </p>

    </div>

    <h1>
    Skills & Interests
    </h1>

    <div class = "body">
        <h2>
            Technical Skills
        </h2>
        
        <p>
            Working with distributed systems, database querying, front end web design
        </p>

        <h2>
            Interests
        </h2>
        
        <p>
            Guitar, the outdoors, travelling, movies and games
        </p>

    </div>

    <h2>
        <br />References
    </h2>
    <p>
        For reference contact information, please contact me at williamgore241@gmail.com
    </p>

</div>
    `

}

// Source - https://stackoverflow.com/a
// Posted by Michael Zaporozhets, modified by community. See post 'Timeline' for change history
// Retrieved 2026-01-21, License - CC BY-SA 4.0

window.mobileCheck = function() {
    let check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
};

function setMobile() {

    document.getElementById("sidebuttons").style.flexDirection = "row"
    document.getElementById("sidebuttons").style.width = 100 + "vw"
    document.getElementById("sidebuttons").style.justifyContent = "center"
    document.getElementById("sidebuttons").style.top = 50 + "%"

    document.getElementById("footer").style.paddingBottom = 90 + "px"

    document.getElementById("title").style.marginLeft = 10 + "px"

    document.getElementById("contentBox").style.marginLeft = 20 + "px"
    document.getElementById("contentBox").style.marginTop = 60 + "px"

    document.getElementById("image").style.width = 100 + "px"
    document.getElementById("title").style.alignItems = "center"

}

function highlightButton(s) {
    document.getElementById("home").style.backgroundColor = "#dfdfdf"
    document.getElementById("resume").style.backgroundColor = "#dfdfdf"
    document.getElementById("proj").style.backgroundColor = "#dfdfdf"

    document.getElementById("home").style.color = "black"
    document.getElementById("resume").style.color = "black"
    document.getElementById("proj").style.color = "black"

    document.getElementById(s).style.color = "white"
    document.getElementById(s).style.backgroundColor = "#d16934"
}

function updateElement(newString, ID) {
    document.getElementById(ID).innerHTML = newString;
}

function updateTitles(titles) {
    s = "I am "
    typeTime = 125;     //how quickly letters appear - higher = slower
    deleteTime = 100;   //how quickly letters get deleted - higher = slower
    waitTime = 300;     //how long after opening the page the text will start
    waitToDelete = 4000 //How long a message stays before being deleted

    //looping through the array of strings
    for(let i = 0; i<titles.length; i++) {
        toAdd = titles[i]

        //this types out the letters
        setTimeout(addNewTitle, waitTime, s, toAdd, typeTime)
        
        //this deletes the letters, unless its the last one
        //then it will stay
        if(i < titles.length - 1) {
            setTimeout(removeTitle, (waitTime + waitToDelete), (s + toAdd), toAdd, deleteTime)
        }

        charTime = ((toAdd.length) * typeTime) + ((toAdd.length) * deleteTime)
        waitTime = waitTime + charTime + waitToDelete - 1500 //TODO fix this magic number
    }

}

//types out a string
function addNewTitle(s, title, typeTime) {
    for (let i = 0; i < title.length; i++) {
        s = s + title.charAt(i);
        setTimeout(updateElement,(typeTime*i), s, "me")
    }
}

//deletes the string
function removeTitle(s, title, deleteTime) {
    for (let i = 0; i < title.length; i++) {
        s = s.substring(0, s.length - 1);
        setTimeout(updateElement,(deleteTime*i), s, "me")
    }
}

////////////////////////////////////////////////////////////

if(window.mobileCheck()) {
    setMobile()
}

setHome()

let titles = ["a problem solver", "a developer", "a people person", "a dedicated learner", "the right choice."];
updateTitles(titles)