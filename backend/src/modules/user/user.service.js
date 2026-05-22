function isValidEmail(email) {
  // A standard regex for basic email structure
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}