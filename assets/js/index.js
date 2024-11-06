

function showMore(){

    const content = document.getElementById('personal-info');
    const btn = document.getElementById('expend');

    if(content.classList.contains('personal-info-on')){
        content.classList.remove('personal-info-on');
    } else [
        content.classList.add('personal-info-on')
    ]

    if (btn.classList.contains('expend-on')){
        btn.classList.remove('expend-on');
    } else {
        btn.classList.add('expend-on');
    }

}


document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('.nav-bar div');
    const smallNavItems = document.querySelectorAll('.small-nav div');
    const sections = document.querySelectorAll('.section-content div');

    navItems.forEach(item => {
        item.addEventListener('click', function() {

            navItems.forEach(nav => nav.classList.remove('active'));

            this.classList.add('active');

             sections.forEach(section => section.classList.remove('active-section'));

             if (this.id === 'about') {
                 document.getElementById('about-section').classList.add('active-section');
             } else if (this.id === 'resume') {
                 document.getElementById('resume-section').classList.add('active-section');
             } else if (this.id === 'portfolio') {
                 document.getElementById('portfolio-section').classList.add('active-section');
             }
        });
    });

    smallNavItems.forEach(item => {
        item.addEventListener('click', function() {

            smallNavItems.forEach(nav => nav.classList.remove('active'));

            this.classList.add('active');

             sections.forEach(section => section.classList.remove('active-section'));

             if (this.id === 'about') {
                 document.getElementById('about-section').classList.add('active-section');
             } else if (this.id === 'resume') {
                 document.getElementById('resume-section').classList.add('active-section');
             } else if (this.id === 'portfolio') {
                 document.getElementById('portfolio-section').classList.add('active-section');
             }

        });
    });

});


const items = ['Python', 'PHP', 'Laravel', 'Java', 'JavaScript', 'TypeScript', 'Nuxt', 'Nest', "UI/UX", 'Usability', 'Object Oriented Programming', 'Problem Solving', 'Critical Thinking', 'Data Structures', 'Figma', 'MySQL', 'MongoDB', 'PostgreSQL', 'Git' 
];

const container = document.getElementById('skill-container');

items.forEach(item => {
    const item_div = document.createElement('div');
    item_div.classList.add('skill-item');
    item_div.textContent = item;
    
    container.appendChild(item_div);
});

const portfolio_overlay = document.getElementById('portfolio-overlay');
const portfolio_overlay_close_btn = document.getElementById('close-portfolio');

portfolio_overlay_close_btn.addEventListener('click', function() {
    portfolio_overlay.style.display = 'none';
    document.getElementById('overlay-image').innerHTML = `
    <img src="assets/img/HM/HM_main.png" alt="" id="slide-1">
                    <div class="slider-nav">
                        <a href="#slide-1"></a>
                    </div>
    `;
    document.getElementById('overlay-description').innerHTML = ``;
});

portfolio_overlay.addEventListener('click', function(e) {
    if (e.target === portfolio_overlay) {
        portfolio_overlay.style.display = 'none';
        document.getElementById('overlay-image').innerHTML = `
    <img src="assets/img/HM/HM_main.png" alt="" id="slide-1">
                    <div class="slider-nav">
                        <a href="#slide-1"></a>
                    </div>
    `;
    document.getElementById('overlay-description').innerHTML = ``;

    }
});

let overlay_current_img =  1;
let max_slide_img = 1;

document.getElementById('navigate-right').setAttribute('href', `#slide-${overlay_current_img}`);
document.getElementById('navigate-left').setAttribute('href', `#slide-${overlay_current_img}`);

function navigateRight() {

    if (overlay_current_img < max_slide_img) {
    
        overlay_current_img++;
        document.getElementById('navigate-right').setAttribute('href', `#slide-${overlay_current_img}`);
    } else {
        overlay_current_img = 1;
        document.getElementById('navigate-right').setAttribute('href', `#slide-${overlay_current_img}`);
    }
}

function navigateLeft() {

   if( overlay_current_img == 1) {
       overlay_current_img =  max_slide_img;
       document.getElementById('navigate-left').setAttribute('href', `#slide-${overlay_current_img}`);
   } else {
         overlay_current_img--;
         document.getElementById('navigate-left').setAttribute('href', `#slide-${overlay_current_img}`);
   }
}

function openOverlay(index) {
    portfolio_overlay.style.display = 'block';
    switch (index) {
        case 0: 
            document.getElementById('overlay-title').textContent = '9 Man Morris Game';
            max_slide_img = 3;
            document.getElementById('overlay-image').innerHTML = `
             <img src="assets/img/9MM/NMM_main.png" alt="" id="slide-1">
             <img src="assets/img/9MM/NMM_1.png" alt="" id="slide-2">
             <img src="assets/img/9MM/NMM_2.png" alt="" id="slide-3">
                    <div class="slider-nav">
                        <a href="#slide-1"></a>
                        <a href="#slide-2"></a>
                        <a href="#slide-3"></a>
                    </div>
            `
            document.getElementById('overlay-description').innerHTML = `
                 <ul>
                    <li>
                        This is a group project that I have worked on with my team members in my Year 3 Semester 1.
                    </li>
                    <li>
                        The project started from scratch with no based code given and the team is required to come out with a design for the UI and the main game engine.
                    </li>
                    <li>
                        This project is developed in Java and it strictly follows the OOP rules.
                    </li>
                    <li>
                        The game consists of Tutorial Mode, PvP Mode, PvC with the functionality of hint.
                    </li>

                </ul>
            `;
            document.getElementById('navigate-right').setAttribute('href', `#slide-${2}`);
            break;
        case 1:
            document.getElementById('overlay-title').textContent = 'Auto-Grading Tutoring System';
            max_slide_img = 6;
            document.getElementById('overlay-image').innerHTML = `
             <img src="assets/img/ATS/ATS-main.png" alt="" id="slide-1">
                    <img src="assets/img/ATS/ATS-1.png" alt="" id="slide-2">
                    <img src="assets/img/ATS/ATS-2.png" alt="" id="slide-3">
                    <img src="assets/img/ATS/ATS-3.png" alt="" id="slide-4">
                    <img src="assets/img/ATS/ATS-4.png" alt="" id="slide-5">
                    <img src="assets/img/ATS/ATS-5.png" alt="" id="slide-6">
                    <div class="slider-nav">
                        <a href="#slide-1"></a>
                        <a href="#slide-2"></a>
                        <a href="#slide-3"></a>
                        <a href="#slide-4"></a>
                        <a href="#slide-5"></a>
                        <a href="#slide-6"></a>
                    </div>
            `
            document.getElementById('overlay-description').innerHTML = `
                <ul>
                    <li>
                        This is a group project that consist of 15 members, and the project is expected to be completed by the end of 2023. 
                    </li>
                    <li>
                        The project started from scratch with some based code provided by NUS (National University of Singapore) and the team is required to develop a portal for student and lecture to access the functionality.

                    </li>
                    <li>
                        The main goal of the project is to automatically grade a student’s code and repair the code if error is found. (Intended to be used in one of the IT unit in monash).

                    </li>
                    <li>
                        Our team use Scaled Agile Framework (SAFe) to plan out the implementation cycle and the main logic of the system is developed in Java and it strictly follows the OOP rules.
                    </li>
               </ul>
            `;
            document.getElementById('navigate-right').setAttribute('href', `#slide-${2}`);
            break;

        case 2: 
            document.getElementById('overlay-title').textContent = 'Hearty Meal Dietary App';
            max_slide_img = 10;
            document.getElementById('overlay-image').innerHTML = `
             <img src="assets/img/HM/HM_main.png" alt="" id="slide-1">
                    <img src="assets/img/HM/HM_1.png" alt="" id="slide-2">
                    <img src="assets/img/HM/HM_2.png" alt="" id="slide-3">
                    <img src="assets/img/HM/HM_3.png" alt="" id="slide-4">
                    <img src="assets/img/HM/HM_4.png" alt="" id="slide-5">
                    <img src="assets/img/HM/HM_5.png" alt="" id="slide-6">
                    <img src="assets/img/HM/HM_6.png" alt="" id="slide-7">
                    <img src="assets/img/HM/HM_7.png" alt="" id="slide-8">
                    <img src="assets/img/HM/HM_8.png" alt="" id="slide-9">
                    <img src="assets/img/HM/HM_9.png" alt="" id="slide-10">
                    <div class="slider-nav">
                        <a href="#slide-1"></a>
                        <a href="#slide-2"></a>
                        <a href="#slide-3"></a>
                        <a href="#slide-4"></a>
                        <a href="#slide-5"></a>
                        <a href="#slide-6"></a>
                        <a href="#slide-7"></a>
                        <a href="#slide-8"></a>
                        <a href="#slide-9"></a>
                        <a href="#slide-10"></a>
                    </div>
            `;

            document.getElementById('overlay-description').innerHTML = `
                <p>
                    This school project involves working with an actual client to develop a food and fluid logging website for chronic disease patients. The web app will be part of the GreenSHeart application ecosystem. It allows users to log meals and create custom recipes if needed. Unlike existing meal trackers, it focuses on tracking sodium, cholesterol, and water intake to prevent health issues. My roles include project manager, negotiating requirements, managing the team, distributing tasks, and contributing to backend development. My contributions cover UI/UX design, client negotiations, backend and database structure, and frontend development.
                </p>
            `;
            document.getElementById('navigate-right').setAttribute('href', `#slide-${2}`);
            break;
    }
}