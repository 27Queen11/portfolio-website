const projects = [
  {
    title: " Personal Portfolio Website",
    description: "A responsive full-stack portfolio website built using HTML, CSS, Bootstrap, JavaScript, Node.js, and MongoDB. "
  },

  {
    title: "UI/UX Design Prototype Website",
    description: "A Modern mobile and website interface design created using Figma."
  },

  {
    title: "Student Management system",
    description: "A beginner-friendly web application to manage student records,attendance and details using frontend and backend technologies."
  },

  {
    title: "E-Book Recommendation Platform",
    description: "Developed a group project website that recommends books to users based on their interests. Features including book preview, wishlist management and direct integration links to kindle and Amazon for easy access and purchase."
  },

  {
    title: "Multimedia Editing Showcase",
    description: "A creative project showcasing photo editing, poster designing, and video editing skills using tools like GIMP, Krita and Filmora."
  },
];

const container = document.getElementById("project-container");

projects.forEach(project => {

  container.innerHTML += `
  
  <div class="col-md-4 mb-4">
    <div class="card shadow p-3 h-100">

      <h4>${project.title}</h4>

      <p>${project.description}</p>

    </div>
  </div>
  
  `;
});
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  try {
    const response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        email,
        message
      })
    });

    const data = await response.json();

    alert(data.message);

    contactForm.reset();

  } catch (error) {
    alert("Error sending message");
    console.log(error);
  }
});