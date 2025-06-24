// Seller and buyer auth handling
function registerUser(type, data) {
  auth.createUserWithEmailAndPassword(data.email, data.password).then(cred => {
    return db.collection(type).doc(cred.user.uid).set({
      ...data,
      createdAt: new Date()
    });
  }).then(() => showPage(type === 'sellers' ? 'dashboard' : 'explore'));
}

function loginUser(type, email, password) {
  auth.signInWithEmailAndPassword(email, password).then(() => {
    showPage(type === 'sellers' ? 'dashboard' : 'explore');
  }).catch(err => alert(err.message));
}