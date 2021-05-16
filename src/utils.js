export const setProgress = (value, inProccess = false) => (
  `<div class="progress" style="height: 3px"><div
    class="progress-bar"
    role="progressbar"
    style="width: ${value}%"
    aria-valuenow="${value}"
    aria-valuemin="0"
    aria-valuemax="100"
  ></div>${inProccess ? `
  <div
    class="progress-bar bg-success"
    role="progressbar"
    style="width: ${10}%"
    aria-valuenow="${10}"
    aria-valuemin="0"
    aria-valuemax="100"
  ></div>` : ''}</div>`
);

export const addProject = (link, technologies) => (
  `<li class="p-0 list-group-item d-flex justify-content-between align-items-center">
    <a class="btn-link text-muted" href="${link}" target="_blank">${link}</a>
    <span class="badge badge-secondary">[${technologies.join(', ')}]</span>
  </li>`
);
