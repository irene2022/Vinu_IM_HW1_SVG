(() => {
  console.log('Icon Site');

  let theBadges = document.querySelector('.icon h3');
      theBadges = document.querySelectorAll('.icon h3');

  function logMe() {
    console.log('click on the image or label');
  }

  theBadge.addEventListener("click", logMe);

  theBadge.forEach(badge => icon.addEventListener("click", logMe));
})()
