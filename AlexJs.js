<script>
  var video = document.getElementById("myVideo");
  var btn = document.getElementById("myBtn");
  function myFunction() {
  if (video.paused) {
    video.play();
  btn.innerHTML = "Pause";
  } else {
    video.pause();
  btn.innerHTML = "Play";
  }
}

  document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); 

  if (!this.checkValidity()){
    document.querySelector('.modal-body').innerHTML = '<p>Form Submission unsuccessful. Please fill all fields properly.</p>';
   }
   else{
    document.querySelector('.modal-body').innerHTML = '<p>Form successfully submitted.</p>';
        }
    });
    
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl)
    })
</script>

