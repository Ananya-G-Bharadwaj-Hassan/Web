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
      <li>💻 Aiming to build a career as an <b>AI/ML Engineer</b> or a <b>Data Scientist</b> while continuously improving my coding and development skills.</li>
    </ul>
  `;
}

if (section === "skills") {
  html = `
    <h2>Professional Skills</h2>

    <div class="skill-card-grid">

      <div class="skill-card">
        <h3>💻 Programming Languages</h3>
        <p>Java, Python, C</p>
      </div>

      <div class="skill-card">
        <h3>📚 Libraries</h3>
        <p>Pandas, NumPy, Scikit-Learn, Matplotlib</p>
      </div>

      <div class="skill-card">
        <h3>🗄️ Databases</h3>
        <p>SQL, MongoDB</p>
      </div>

      <div class="skill-card">
        <h3>🛠 Developer Tools</h3>
        <p>Git, GitHub, VS Code, IntelliJ IDEA</p>
      </div>

      <div class="skill-card">
        <h3>🌐 Web Technologies</h3>
        <p>HTML, CSS, JavaScript</p>
      </div>

      <div class="skill-card">
        <h3>🤝 Soft Skills</h3>
        <p>Teamwork, Communication, Problem Solving, Eager Learner</p>
      </div>

      <div class="skill-card">
        <h3>📖 Relevant Coursework</h3>
        <p>OOPs, Data Structures & Algorithms, Machine Learning, Statistics, Operating Systems, DBMS</p>
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

      <div class="project-card">
  <h3>🚗 Car Price Predictor</h3>

  <p>
    Developed a Machine Learning model to estimate used car prices using
    Random Forest Regression. Built an interactive Streamlit application
    where users can input vehicle details and receive real-time price
    predictions.
  </p>

  <p><b>🛠 Tech:</b> Python, Scikit-learn, Pandas, NumPy, Streamlit</p>

  <div class="project-links">
    <a href="https://github.com/Ananya-G-Bharadwaj-Hassan/codealpha/tree/main/CarPricePrediction" target="_blank">💻 GitHub</a>
    <a href="https://codealpha-carpricepredictor.streamlit.app/" target="_blank">🚀 Try Here</a>
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

    <div class="cert-card" onclick="this.classList.toggle('flip')">
  <div class="cert-inner">
    <div class="cert-front">
      <h3>Anthropic - AI Fluency for students</h3>
    </div>
    <div class="cert-back">
      <img src="anthropic.png">
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

if (section === "experiences") {
  html = `

    <div class="internship-grid">

      <div class="internship-item">
        <h3>CodeAlpha Virtual Internship</h3>

        <p>
          Successfully completed a <b>Data Science Virtual Internship</b> at
          <b>CodeAlpha</b>, where I worked on real-world machine learning tasks,
          data preprocessing, model building and data analysis.
        </p>

        <div class="cert-card" onclick="this.classList.toggle('flip')">
          <div class="cert-inner">

            <div class="cert-front">
              <h3>Data Science Internship Certificate</h3>
            </div>

            <div class="cert-back">
              <img src="codealpha.png" alt="Data Science Internship Certificate">
            </div>

          </div>
        </div>

      </div>

    </div>
  `;
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
  <i class="fa-brands fa-github"></i>
  <span>GitHub:</span>
  <a href="https://github.com/Ananya-G-Bharadwaj-Hassan" target="_blank">
    github.com/Ananya-G-Bharadwaj-Hassan
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
