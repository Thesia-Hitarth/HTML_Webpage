document.addEventListener("DOMContentLoaded", function(event) {
    var typewriter = document.getElementById("typewriter");
    var statements = [
        " " ,
        "E-Learning",
       " Innovative",
       " Real-world internships",
       " Transformative learning",
       " Accessible education"
    ];
    var currentIndex = 0;
    var isDeleting = false;
    var typingSpeed = 200; // Speed of typing in milliseconds
    var deletingSpeed = 100; // Speed of deleting in milliseconds
  
    function typeNextCharacter() {
      var currentText = typewriter.textContent;
      var targetText = statements[currentIndex];
  
      if (!isDeleting) {
        typewriter.textContent = targetText.substring(0, currentText.length + 1);
        if (currentText === targetText) {
          isDeleting = true;
          setTimeout(typeNextCharacter, deletingSpeed);
        } else {
          setTimeout(typeNextCharacter, typingSpeed);
        }
      } else {
        typewriter.textContent = targetText.substring(0, currentText.length - 1);
        if (currentText === "") {
          isDeleting = false;
          currentIndex++;
          currentIndex %= statements.length;
          setTimeout(typeNextCharacter, typingSpeed);
        } else {
          setTimeout(typeNextCharacter, deletingSpeed);
        }
      }
    }
  
    typeNextCharacter();
  });
  

  function scrollToAbout() {
    const aboutSection = document.getElementById("about");
    aboutSection.scrollIntoView({ behavior: "smooth" });
  }
  