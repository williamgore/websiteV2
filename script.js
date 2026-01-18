function setHome() {

    document.getElementById("contentHeader").innerHTML =`<h1>Who I am</h1>`
    document.getElementById("contentBody").innerHTML = `
    <p>
    My first introduction to programming was making little games in Scratch in middle school. Later in early highschool my brother taught me some Java and I built a little Zork type text based game. After highschool and completing IB Computer Science, I started university doing Biology during COVID. Online school wasn't for me so I took a gap year and switched to CS when I returned to school in 2022. Since then I've been on my academic come back, completing my statistics minor and battling waitlists to get into all my CS courses. With a little over a year left, I'm eager to start working and applying my skills. I love working in groups and coming up with interesting and unique ideas for solving problems. There's nothing more satisfying than fixing a problem with code. 
    </p>
    `
}

function setProj() {
    document.getElementById("contentHeader").innerHTML =`<h1>Projects</h1>`
    document.getElementById("contentBody").innerHTML = `

    <section class="aboutMain">
        <h1>
            my recent work 
        </h1>


        <section class = "body">

            <h2>
                Python Weather Data Project
            </h2>
            
            <p>
                    This was my first experience writing in Python. I coded this up as an easy way to track weather trends as thats something that interests me.
                Learning the Python syntax was a headache at first but once I got used to it I realised how powerful it can be.
                Since then I've used python for playing around with distributed systems and sockets.
            </p>

        </section>
        
        <section class = "body">

            <h2>
                This Website
            </h2>
            
            <p>
                    I put this website together as a way to familiarize myself with HTML and CSS as I had never had any experience
                in either language prior. I wanted to challenge myself to not use any JS and rely solely on new skills to make everything work.
                It went through a couple iterations before I found a style I liked. In the future I plan on updating it radically with a few new
                ideas, but until then it's a good spot to put my resumé.
            </p>

        </section>
        
    </section>
    `

}

function setResume() {
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
            September 2022 - Present <br />
            Major: Computer Science <br/>
            Minor: Statistics
        </p>
        
        <p>
            Relevant Course Work <br/>
            COMP 2080 - Analysis of Algorithms<br/>
            COMP 2140 - Data Structures and Algorithms<br/>
            COMP 2150 - Object Oriented Programming<br/>
            COMP 2160 - Programming Practices<br/>
            COMP 2280 - Intro to Computer Systems<br/>
            
            <br/>

            <i>To be completed by December 2025</i><br/>
            COMP 3010 - Distributed Systems<br/>
            COMP 3020 - Human Computer Interaction<br/>
            COMP 3380 - Databases Concepts and Usage<br/>
        
            <br/>

            <i>To be completed by May 2026</i><br/>
            COMP 3430 - Operating Systems <br/>
            COMP 3350 - Software Engineering I <br/>
            COMP 3580 - Application Security<br/>
        </p>

    </div>

    <h1>
        <br/>Experience
    </h1>


    <div class = "body">
        <h2>
            Tavern on King Edwrad, 1760 Sargent Ave — Bartender
        </h2>
        
        <p>
            May 2025 - Present <br />
            Bartender, working in a team, and being sociable.
        </p>

    </div>


    <div class = "body">
        <h2>
            St James Assiniboia School Division, 678 Moray St — Grounds
        </h2>
        
        <p>
            June 2024 - August 2024 <br />
            Summer job, lawn care, tree trimming, and truck driving.
        </p>

    </div>

    <div class = "body">
        <h2>
            Uptown Alley, 1301 St Matthews Ave — Bartender
        </h2>
        
        <p>
            November 2022 - Present <br />
            Preparing and serving drinks, waiting tables, interacting with customers, working as a 
            team while under pressure to provide service quickly.
            
        </p>

    </div>

    <div class = "body">
        <h2>
            Subway, 2539 Portage Ave — Sandwich Artist, Closer
        </h2>
        
        <p>
            March 2020 - September 2022 <br />
            Providing efficient and excellent customer service, working alone, preparing food, keeping track of inventory, and keeping guest areas clean.

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

function moveButtons() {
    const buttons = document.getElementById("sidebuttons")
    
    height = parseInt(buttons.offsetTop)
    maxHeight = document.getElementById("main").offsetTop
    console.log(maxHeight)
    console.log(height)

    if(lastScrollPos - window.scrollY > 0) {
        //height = buttons.style.top.substring(0,(buttons.style.top.length-2))
       // buttons.style.top = (height+0.1) + "px"

    } else {
       // buttons.style.top = (height-0.1) + "px"
    }
    lastScrollPos = window.scrollY
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

setHome()
document.addEventListener("scroll", moveButtons);
let lastScrollPos = 0
console.log(lastScrollPos)

let titles = ["a problem solver", "a developer", "a people person", "a dedicated learner", "the right choice."];
updateTitles(titles)