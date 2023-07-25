function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  function scrollToSection(sectionId) {
      var section = document.querySelector(sectionId);
      if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
      }
  }