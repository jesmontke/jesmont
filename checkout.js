function checkoutWithStripe(productId) {
  const checkout = functions.httpsCallable('createStripeCheckout');
  checkout({ productId }).then(result => {
    window.location.href = result.data.url;
  });
}