function loadBuyerDashboard(uid) {
  db.collection('buyers').doc(uid).get().then(doc => {
    const data = doc.data();
    document.getElementById('buyerName').textContent = data.name;
    document.getElementById('buyerEmail').textContent = data.email;
  });
}