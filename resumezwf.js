document.addEventListener('DOMContentLoaded', function() {
    const greetingElement = document.getElementById('greeting');
    const currentHour = new Date().getHours();

    let greeting;

    if (currentHour >= 5 && currentHour < 12) {
        greeting = 'Good Morning！I am';
    } else if (currentHour >= 12 && currentHour < 18) {
        greeting = 'Good Afternoon! I am';
    } else if (currentHour >= 18 && currentHour < 24) {
        greeting = 'Good Evening！ I am';
    } else {
        greeting = 'Hi！ I am';
    }

    greetingElement.textContent = greeting;
});

function showModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = 'block';
}

function closeModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = 'none';
}

function showAboutModal() {
    window.location.href = 'about.html'
}

function homepage() {
    window.location.href = 'resumezwf.html'
}

function showEducationModal() {
    window.location.href = 'education.html'
}



function showWorkModal() {
    window.location.href = 'work.html'
}

function showProjectModal(){
    window.location.href = 'project.html'
}


function openSegi(){
    window.open("https://en.wikipedia.org/wiki/SEGi_University_and_Colleges", "width=600,height=400");
}

function openUQ(){
    window.open("https://en.wikipedia.org/wiki/University_of_Queensland", "width=600,height=400");
}

function openUniSA(){
    window.open("https://en.wikipedia.org/wiki/University_of_South_Australia", "width=600,height=400");
}

function openMITX(){
    window.open("https://en.wikipedia.org/wiki/MITx", "width=600,height=400");
}

function openSF(){
    window.open("https://en.wikipedia.org/wiki/SF_Express", "width=600,height=400");
}

function openASO(){
    window.open("https://zwfonline.github.io/aso/home.html");
}

function openDeloitte(){
    window.open("https://en.wikipedia.org/wiki/Deloitte", "width=600,height=400");
}

function showskillModal() {
    window.location.href = 'skills.html'
}



function showrefereeModal() {
    window.location = 'referees.html'

}



function ins(){
    window.open("https://www.instagram.com/zwfonline/", "width=600,height=400");
}

function facebook(){
        window.open("https://www.facebook.com/profile.php?id=100009113345433", "width=600,height=400");
    }

function linkedin(){
        window.open("https://www.linkedin.com/in/weifeng-zhou-2824bb1b9?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BS4ZOB5dzQIyBYyvnbDfuoA%3D%3D", "width=600,height=400");
    }

function downloadFile() {
        var link = document.createElement('a');
        link.href = 'pictures/WEIFENG ZHOU RESUME 230926.pdf';
        link.download = 'WEIFENG ZHOU RESUME 230926.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }