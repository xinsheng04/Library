function createPopup() {
    // Create a new div element for the popup
    const popup = document.createElement('div');
    popup.classList.add('popup'); // Add a CSS class for styling
  
    // Create a close button
    const closeButton = document.createElement('button');
    closeButton.textContent = 'Close';
    closeButton.addEventListener('click', () => {
      popup.style.display = 'none';
    });
  
    // Add content to the popup
    const content = document.createElement('p');
    content.textContent = 'This is the popup content.';
  
    // Append elements to the popup
    popup.appendChild(closeButton);
    popup.appendChild(content);
  
    // Add the popup to the document body
    document.body.appendChild(popup);
  
    // Show the popup
    popup.style.display = 'block';
  }