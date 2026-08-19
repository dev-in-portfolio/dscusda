// DSC USDA FIELD SERVICES ENGINE
document.addEventListener('DOMContentLoaded', () => {
  initSamplingRequestForm();
});

function initSamplingRequestForm() {
  const form = document.getElementById('sampling-request-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    const requests = JSON.parse(localStorage.getItem('dsc_usda_requests') || '[]');
    requests.push({ ...data, request_id: 'REQ-' + Date.now(), timestamp: new Date().toISOString() });
    localStorage.setItem('dsc_usda_requests', JSON.stringify(requests));

    const statusBox = document.getElementById('request-status-output');
    if (statusBox) {
      statusBox.style.display = 'block';
      statusBox.innerHTML = `
        <div class="disclaimer-banner" style="background: rgba(42, 204, 116, 0.15); border-color: var(--accent-emerald);">
          <h4 style="font-family:var(--font-heading); color:var(--accent-emerald); margin-bottom:0.5rem;">Sampling Request Submitted</h4>
          <p>Your field sampling request has been logged under ID <strong>REQ-${Date.now()}</strong>. Please note: <strong>Submission does NOT constitute scheduling confirmation or acceptance.</strong> A field sampling agent will contact you within 24 hours to verify producer registration, field location, and schedule an official sampling window.</p>
        </div>
      `;
    }
    form.reset();
  });
}
