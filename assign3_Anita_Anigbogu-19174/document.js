document.addEventListener('DOMContentLoaded', function() {
  const orderForm = document.getElementById('orderForm');
  const submitOrderBtn = document.getElementById('submitOrder');

  // Function to generate order form based on menu items
  function generateOrderForm() {
    const menuItems = document.querySelectorAll('#menu .item');
    menuItems.forEach(item => {
      const itemName = item.textContent.trim();
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = itemName.toLowerCase().replace(' ', '_') + '_quantity';
      input.value = 0;
      orderForm.appendChild(input);
    });
  }

  // Function to validate form inputs
  function validateForm() {
    const quantities = document.querySelectorAll('.quantity');
    let isValid = true;

    quantities.forEach(quantity => {
      const value = parseInt(quantity.value);
      if (isNaN(value) || value < 0 || value > 10) {
        isValid = false;
        quantity.classList.add('error');
      } else {
        quantity.classList.remove('error');
      }
    });

    return isValid;
  }

  // Event listener for form submission
  orderForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    if (validateForm()) {
      // Submit the form
      this.submit();
    } else {
      alert('Please correct the errors in the form.');
    }
  });

  // Generate order form on page load
  generateOrderForm();
});

