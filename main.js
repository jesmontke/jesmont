document.addEventListener('DOMContentLoaded', () => {
  auth.onAuthStateChanged(user => {
    if (user) {
      db.collection('sellers').doc(user.uid).get().then(doc => {
        if (doc.exists) {
          showPage('dashboard');
          loadDashboard(user.uid);
        } else {
          showPage('explore');
          loadBuyerDashboard(user.uid);
        }
      });
    } else {
      showPage('home');
    }
  });
});

function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.add('hidden'));
  const page = document.getElementById(id + 'Page');
  if (page) page.classList.remove('hidden');
}