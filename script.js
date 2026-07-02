function showSection(section) {
  const content = document.getElementById("content");
  let html = "";
   
  if (section === "about") {
  html = `
    <h2>About Me</h2>
    <p class="about-intro">
      I am a passionate Computer Science Engineering student with a strong interest in 
      <b>Artificial Intelligence, Machine Learning and Data Science</b>. I enjoy creating 
      practical projects and exploring new technologies that can improve real-world systems.
      Built several projects in <b>Machine Learning, Artificial Intelligence and Web Development,</b>
      which strengthened my technical knowledge and problem solving abilities.
    </p></br></br>

    <ul class="about-list">
      <li>🎯 Quick learner and hardworker with the ability to understand and apply technical concepts effectively.</li>
      <li>🤝 Strong teamwork, communication and analytical thinking skills.</li>
      <li>💻 Aiming to build a career as an <b>AI/ML Engineer / Data Scientist</b> while continuously improving my coding and development skills.</li>
    </ul>
  `;
}

 if (section === "skills") {
  html = `
    <h2>My Skills</h2>

    <div class="skills-container">

      <div class="skill">
        <span>🐍 Python</span>
        <div class="progress"><div class="progress-bar" style="width:90%">90%</div></div>
      </div>

      <div class="skill">
        <span>☕ Java</span>
        <div class="progress"><div class="progress-bar" style="width:85%">85%</div></div>
      </div>

      <div class="skill">
        <span>⚙ C Programming</span>
        <div class="progress"><div class="progress-bar" style="width:75%">75%</div></div>
      </div>

      <div class="skill">
        <span>🐼 Pandas</span>
        <div class="progress"><div class="progress-bar" style="width:80%">80%</div></div>
      </div>

      <div class="skill">
        <span>🔢 NumPy</span>
        <div class="progress"><div class="progress-bar" style="width:80%">80%</div></div>
      </div>

      <div class="skill">
        <span>🗄 SQL</span>
        <div class="progress"><div class="progress-bar" style="width:70%">70%</div></div>
      </div>

      <div class="skill">
        <span>🌐 HTML</span>
        <div class="progress"><div class="progress-bar" style="width:70%">70%</div></div>
      </div>

      <div class="skill">
        <span>🎨 CSS</span>
        <div class="progress"><div class="progress-bar" style="width:70%">70%</div></div>
      </div>

      <div class="skill">
        <span>⚡ JavaScript</span>
        <div class="progress"><div class="progress-bar" style="width:60%">60%</div></div>
      </div>

      <div class="skill">
        <span>🔀 Git</span>
        <div class="progress"><div class="progress-bar" style="width:80%">80%</div></div>
      </div>

      <div class="skill">
        <span>💻 VS Code</span>
        <div class="progress"><div class="progress-bar" style="width:90%">90%</div></div>
      </div>

      <div class="skill">
        <span>🧠 IntelliJ IDEA</span>
        <div class="progress"><div class="progress-bar" style="width:90%">90%</div></div>
      </div>

    </div>
  `;
}

 if (section === "education") {
  html = `
    <h2>🎓 Education</h2>
    <div class="edu-block">
      <h3>Malnad College of Engineering, Hassan <span>| 2023–2027</span></h3>
      <p><b>B.E – Computer Science & Engineering</b></p>
      <p>7th Semester</p>
      <p>⭐ CGPA: <b>9.47</b></p>
    </div>
<br></br>
    <hr>
<br></br>
    <div class="edu-block">
      <h3>Masters PU College, Hassan <span>| 2021–2023</span></h3>
      <p><b>PUC – Science (PCMB)</b></p>
      <p>⭐ Percentage: <b>96.7%</b></p>
    </div>
<br></br>
    <hr>
<br></br>
    <div class="edu-block">
      <h3>United High School, Hassan <span>| 2021</span></h3>
      <p><b>SSLC</b></p>
      <p>⭐ Percentage: <b>99.3%</b></p>
    </div>
  `;
}

 if (section === "projects") {
  html = `
    <h2>Projects</h2>

    <div class="project-card">
      <h3>🛍️ VendorConnect – A Local Business Support System</h3>
      <p>
        A full-stack web application that connects local vendors with customers,
        enabling businesses to showcase products and helping users discover and
        support nearby businesses.
      </p>

      <p><b>🛠 Tech:</b> HTML5, CSS3, JavaScript, Node.js, Express.js, MongoDB, JWT, bcrypt</p>

      <div class="project-links">
        <a href="YOUR_GITHUB_LINK" target="_blank">💻 GitHub</a>
        <a href="YOUR_LIVE_LINK" target="_blank">🚀 Try Here</a>
      </div>
    </div>

    <div class="project-card">
      <h3>📰 Fake News Detection System</h3>
      <p>
        A Streamlit web application that predicts whether a news article is
        <b>Fake</b> or <b>Real</b> using Machine Learning and NLP-based text
        vectorization.
      </p>

      <p><b>🛠 Tech:</b> Python, Streamlit, Scikit-learn, Joblib, NLP</p>

      <div class="project-links">
        <a href="https://github.com/Ananya-G-Bharadwaj-Hassan/Fake-news-detection" target="_blank">💻 GitHub</a>
        <a href="https://fake-news-detection-4u58f7zwchto5jbnzbudxs.streamlit.app/" target="_blank">🚀 Try Here</a>
      </div>
      </div>

      <!-- <div class="project-card">
      <h3>📅 AI-Based Timetable Generator</h3>
      <p>
        Smart timetable generator using <b>Constraint Programming</b> and
        <b>Genetic Algorithms</b> to automatically create optimized college
        schedules aligned with <b>NEP 2020</b>.
      </p>

      <p><b>🛠 Tech:</b> Python, Constraint Programming, Genetic Algorithms</p>

      <div class="project-links">
        <a href="YOUR_GITHUB_LINK" target="_blank">💻 GitHub</a>
        <a href="YOUR_LIVE_LINK" target="_blank">🚀 Try Here</a>
      </div>
    </div>-->
  `;
}

  if (section === "certifications") {
  html = `
    <h2>My Certifications</h2>

    <div class="cert-grid">

      <div class="cert-card" onclick="this.classList.toggle('flip')">
        <div class="cert-inner">
          <div class="cert-front">
            <h3>Social Networks-NPTEL</h3>
          </div>
          <div class="cert-back">
            <img src="soc.jpg">
          </div>
        </div>
      </div>

      <div class="cert-card" onclick="this.classList.toggle('flip')">
        <div class="cert-inner">
          <div class="cert-front">
            <h3>Human Computer Interaction-NPTEL</h3>
          </div>
          <div class="cert-back">
            <img src="hci.jpg">
          </div>
        </div>
      </div>

      <div class="cert-card" onclick="this.classList.toggle('flip')">
        <div class="cert-inner">
          <div class="cert-front">
            <h3>Getting started with Artificial Intelligence-IBM</h3>
          </div>
          <div class="cert-back">
            <img src="ibm.png">
          </div>
        </div>
      </div>

      <div class="cert-card" onclick="this.classList.toggle('flip')">
        <div class="cert-inner">
          <div class="cert-front">
            <h3>Data Warehouse Essential Concepts-Infosys springboard</h3>
          </div>
          <div class="cert-back">
            <img src="infosys.jpg">
          </div>
        </div>
      </div>

      <div class="cert-card" onclick="this.classList.toggle('flip')">
        <div class="cert-inner">
          <div class="cert-front">
            <h3>Generative AI for Beginners</h3>
          </div>
          <div class="cert-back">
            <img src="jenny.png">
          </div>
        </div>
      </div>

      <div class="cert-card" onclick="this.classList.toggle('flip')">
  <div class="cert-inner">
    <div class="cert-front">
      <h3>TCS iON - Young Professional</h3>
    </div>
    <div class="cert-back">
      <img src="TCS.png">
    </div>
  </div>
</div>
    </div>
  `;
}
function openCert(src) {
  document.getElementById("cert-img").src = src;
  document.getElementById("cert-popup").style.display = "flex";
}

function closeCert() {
  document.getElementById("cert-popup").style.display = "none";
}

if (section === "achievements") {
  html = `
    <h2>🏆 Achievements</h2>

    <div class="achievement-list">

      <!-- Smart India Hackathon -->
      <div class="achievement-item">
        <h3>Internal Smart India Hackathon 2025</h3>
        <p>Participated in Internal Smart India Hackathon 2025 and got selected into semi-finals.</p>

        <div class="cert-card" onclick="this.classList.toggle('flip')">
          <div class="cert-inner">
            <div class="cert-front">
              <h3>Smart India Hackathon Certificate</h3>
            </div>
            <div class="cert-back">
              <img src="SIH.png"> <!-- replace with actual certificate image -->
            </div>
          </div>
        </div>
      </div>

      <!-- Another Achievement -->
      <div class="achievement-item">
        <h3>Hack-A-League 4.0</h3>
        <p>Participated in Hack-A-League 4.0 organized by Global Academy of Technology, Bengaluru.</p>

        <div class="cert-card" onclick="this.classList.toggle('flip')">
          <div class="cert-inner">
            <div class="cert-front">
              <h3>Hack-A-League Certificate</h3>
            </div>
            <div class="cert-back">
              <img src="HAL.png"> <!-- replace with actual certificate image -->
            </div>
          </div>
        </div>
      </div>

    </div>
  `;
}
  if (section === "contact") {
  html = `
    <h2>Contact Me</h2>

    <div class="contact-item">
      <i class="fa-solid fa-envelope"></i>
      <span>Email:</span>
      <a href="mailto:ananyagbharadwaj@gmail.com">ananyagbharadwaj@gmail.com</a>
    </div>

    <div class="contact-item">
      <i class="fa-solid fa-phone"></i>
      <span>Phone:</span>
      <a href="tel:6360572690">6360572690</a>
    </div>

    <div class="contact-item">
      <i class="fa-brands fa-linkedin"></i>
      <span>LinkedIn:</span>
      <a href="https://www.linkedin.com/in/ananya-g-bharadwaj-b665432bb/" target="_blank">
        linkedin.com/in/ananya-g-bharadwaj
      </a>
    </div>

    <div class="contact-item">
      <i class="fa-solid fa-location-dot"></i>
      <span>Location:</span>
      <p>Hassan, Karnataka</p>
    </div>

    <br><br>

    <h3>Send Me a Message</h3>

    <form class="contact-form" action="https://formsubmit.co/ananyagbharadwaj@gmail.com" method="POST">
      
      <input type="text" name="name" placeholder="Your Name" required>

      <input type="email" name="email" placeholder="Your Email" required>

      <textarea name="message" rows="5" placeholder="Your Message" required></textarea>

      <button type="submit">Send Message</button>

    </form>
  `;
}
  content.innerHTML = html;

  // scroll automatically to the content section
content.scrollIntoView({ behavior: "smooth" });


  // animation refresh
  AOS.init();
}
