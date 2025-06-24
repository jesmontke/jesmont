function loadProductDetail(id) {
  db.collection('products').doc(id).get().then(doc => {
    const p = doc.data();
    document.getElementById('productImage').src = p.image;
    document.getElementById('productName').textContent = p.name;
    document.getElementById('productPrice').textContent = '$' + p.price;
    document.getElementById('productDesc').textContent = p.description;
  });
}