const loginSection = document.getElementById('loginSection');
const dashboard = document.getElementById('dashboard');
const roleSelect = document.getElementById('roleSelect');
const loginBtn = document.getElementById('loginBtn');
const logoutBtn = document.getElementById('logoutBtn');

const adminSection = document.getElementById('adminSection');
const recruiterSection = document.getElementById('recruiterSection');
const candidateSection = document.getElementById('candidateSection');
const visitorSection = document.getElementById('visitorSection');  // Added visitor section

loginBtn.addEventListener('click', () => {
  const selectedRole = roleSelect.value;
  if (!selectedRole) {
    alert('Please select a role to login.');
    return;
  }
  showDashboard(selectedRole);
});

logoutBtn.addEventListener('click', () => {
  roleSelect.value = "";
  dashboard.style.display = 'none';
  loginSection.style.display = 'block';
  hideAllRoleSections();
});

function showDashboard(role) {
  loginSection.style.display = 'none';
  dashboard.style.display = 'block';
  hideAllRoleSections();

  if (role === 'admin') {
    adminSection.style.display = 'block';
  } else if (role === 'recruiter') {
    recruiterSection.style.display = 'block';
  } else if (role === 'candidate') {
    candidateSection.style.display = 'block';
  } else if (role === 'visitor') {
    visitorSection.style.display = 'block';
  }
}

function hideAllRoleSections() {
  adminSection.style.display = 'none';
  recruiterSection.style.display = 'none';
  candidateSection.style.display = 'none';
  if(visitorSection) visitorSection.style.display = 'none';  // Hide visitor section if exists
}
