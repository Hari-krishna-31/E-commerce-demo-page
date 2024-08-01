document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // prevent form submission
    
    // Get form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
  
    // Simulate form submission (in real-world scenario, you would send these values to a server)
    // For demonstration purposes, let's just log them to the console
    console.log("Name: " + name);
    console.log("Email: " + email);
    console.log("Message: " + message);
  
    // Show confirmation message
    document.getElementById("confirmation").innerText = "Message sent!";
  });
  