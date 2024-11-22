let topics = [
    { "title": "Getting Started with HTML", "status": "completed" },
    { "title": "Going Deeper with HTML", "status": "completed" },
    { "title": "Using Attributes", "status": "completed" },
    { "title": "Mastering HTML", "status": "completed" },
    { "title": "Getting Started with CSS", "status": "complete" },
    { "title": "Styling Elements", "status": "complete" },
    { "title": "Page Design and Layout", "status": "incomplete" },
    { "title": "Transitions & Transforms", "status": "incomplete" },
    { "title": "Welcome to JavaScript", "status": "incomplete" },
    { "title": "Going Deeper with JavaScript", "status": "incomplete" },
    { "title": "Working with Data", "status": "incomplete" },
    { "title": "Control Flow", "status": "incomplete" },
    { "title": "Welcome to Angular!", "status": "incomplete" },
    { "title": "Angular Basics", "status": "incomplete" },
    { "title": "Forms", "status": "incomplete" },
    { "title": "Routing & Navigation", "status": "incomplete" }
];

const courseSection = document.querySelector(".course-section");
topics.forEach((topic) => {
    const courseItem = document.createElement("div");
    courseItem.className = "courseItem";

    const button = document.createElement("button");
    button.className = "collapsible";

    const icon = topic.status === "completed" ? "✔️" : "🔒";
    
    button.innerHTML = `
        <span class="icon">${icon}</span>
        <h2 class="text">${topic.title}</h2>
    `;

    if (topic.status === "completed") {
        button.querySelector("h2").style.color = "#000"; 
    } else {
        button.querySelector("h2").style.color = "#888"; 
    }
    const content = document.createElement("div");
    content.className = "content";
    content.style.display = "none"; 
    content.innerHTML = `<p>Details for ${topic.title} will go here. This is a placeholder for the course content.</p>`;  // Placeholder content
    button.addEventListener("click", function () {
        this.classList.toggle("active");
        content.style.display = content.style.display === "block" ? "none" : "block";
    });
    courseItem.appendChild(button);
    courseItem.appendChild(content);
    courseSection.appendChild(courseItem);
});

