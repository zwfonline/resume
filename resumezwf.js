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
    var aboutModal = document.getElementById('aboutModal');
    aboutModal.style.display = 'block';
}

function closeAboutModal() {
    var aboutModal = document.getElementById('aboutModal');
    aboutModal.style.display = 'none';
}

function showEducationModal() {
    var educationModal = document.getElementById('educationModal');
    educationModal.style.display = 'block';
}

function closeEducationModal() {
    var educationModal = document.getElementById('educationModal');
    educationModal.style.display = 'none';
}

function showWorkModal() {
    var workModal = document.getElementById('workModal');
    workModal.style.display = 'block';
}

function closeWorkModal() {
    var workModal = document.getElementById('workModal');
    workModal.style.display = 'none';
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

function openDeloitte(){
    window.open("https://en.wikipedia.org/wiki/Deloitte", "width=600,height=400");
}

function showskillModal() {
    var workModal = document.getElementById('skillModal');
    workModal.style.display = 'block';
}

function closeskillModal() {
    var workModal = document.getElementById('skillModal');
    workModal.style.display = 'none';
}

function showrefereeModal() {
    var workModal = document.getElementById('refereeModal');
    workModal.style.display = 'block';
}

function closerefereeModal() {
    var workModal = document.getElementById('refereeModal');
    workModal.style.display = 'none';
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