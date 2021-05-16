export default (value, inProccess = false) => (
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
