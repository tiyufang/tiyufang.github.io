(function () {
  "use strict";

  const data = window.SITE_DATA;
  if (!data) return;

  const byId = (id) => document.getElementById(id);

  byId("bio").textContent = data.bio;
  byId("email-text").textContent = data.email;
  byId("email-link").href = `mailto:${data.email}`;
  byId("year").textContent = new Date().getFullYear();

  byId("news-list").innerHTML = data.news
    .map(
      (item) => `
        <li class="news-item reveal">
          <time>${item.date}</time>
          <div class="news-item-body">
            <span class="news-tag">${item.tag}</span>
            <p>
              ${item.text}
              ${item.link ? `<a class="news-link" href="${item.link}" target="_blank" rel="noopener">${item.linkText || "查看详情"}<span aria-hidden="true">↗</span></a>` : ""}
            </p>
          </div>
        </li>`
    )
    .join("");

  byId("research-list").innerHTML = data.research
    .map(
      (item, index) => `
        <article class="research-card reveal">
          <span class="research-number">0${index + 1}</span>
          <h3>${item.title}</h3>
          <p>${item.description}</p>
        </article>`
    )
    .join("");

  const renderPublications = () => {
    byId("publication-list").innerHTML = data.publications
      .map(
        (paper, index) => `
          <li class="publication reveal ${index >= 6 ? "is-hidden extra-item" : ""}">
            <time class="pub-year">${paper.year}</time>
            <div>
              <h3>${paper.title}</h3>
              <p>${paper.authors}. <em>${paper.venue}</em>.</p>
            </div>
            <div class="paper-meta"><span class="tag">${paper.tag}</span></div>
          </li>`
      )
      .join("");
    if (data.publications.length <= 6) byId("publication-action").hidden = true;
  };

  const renderProjects = () => {
    byId("project-list").innerHTML = data.projects
      .map(
        (project, index) => `
          <article class="project-card reveal ${index >= 4 ? "is-hidden extra-item" : ""}">
            <div class="project-meta">
              <span>${project.partner}</span>
              <time>${project.period}</time>
            </div>
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <p class="project-result">${project.result}</p>
            ${project.link ? `<a class="project-link" href="${project.link}" target="_blank" rel="noopener">${project.linkText}</a>` : ""}
          </article>`
      )
      .join("");
    if (data.projects.length <= 4) byId("project-action").hidden = true;
  };

  renderPublications();
  renderProjects();

  byId("honors-list").innerHTML = data.honorTimeline
    .map(
      (period) => `
        <article class="honor-period reveal">
          <time>${period.year}</time>
          <span class="honor-marker" aria-hidden="true"></span>
          <ul>
            ${period.items.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </article>`
    )
    .join("");

  const setupToggle = (buttonId, containerId, noun) => {
    const button = byId(buttonId);
    const container = byId(containerId);
    if (!button || !container) return;

    button.addEventListener("click", () => {
      const expanded = button.getAttribute("aria-expanded") === "true";
      container.querySelectorAll(".extra-item").forEach((item) => {
        item.classList.toggle("is-hidden", expanded);
        if (!expanded) requestAnimationFrame(() => item.classList.add("is-visible"));
      });
      button.setAttribute("aria-expanded", String(!expanded));
      button.innerHTML = expanded
        ? `查看更多${noun} <span aria-hidden="true">↓</span>`
        : `收起${noun} <span aria-hidden="true">↓</span>`;
    });
  };

  setupToggle("publication-toggle", "publication-list", "论文");
  setupToggle("project-toggle", "project-list", "项目");

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reducedMotion || !("IntersectionObserver" in window)) {
    document.querySelectorAll(".reveal").forEach((el) => el.classList.add("is-visible"));
  } else {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal:not(.is-hidden)").forEach((el) => observer.observe(el));
  }
})();
