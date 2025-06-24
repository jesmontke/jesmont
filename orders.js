function placeOrder(productId, buyerId) {
  const order = {
    productId,
    buyerId,
    timestamp: new Date(),
    status: 'pending'
  };
  return db.collection('orders').add(order);
}

function loadOrders(uid, role) {
  db.collection('orders')
    .where(role === 'buyer' ? 'buyerId' : 'sellerId', '==', uid)
    .get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        console.log(doc.data());
      });
    });
}