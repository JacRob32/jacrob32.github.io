document.querySelectorAll('a[href^="#"]').forEach(function (link) {
  link.addEventListener('click', function (event) {
    var target = document.querySelector(link.getAttribute('href'));
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Keep these logos with the site instead of relying on fragile third-party image URLs.
var localToolLogos = {
  'Amazon Web Services website': 'assets/aws.svg',
  'Microsoft Excel website': 'assets/excel.svg',
  'Visual Studio Code website': 'assets/vscode.svg'
};

Object.keys(localToolLogos).forEach(function (label) {
  var card = document.querySelector('.tool-card[aria-label="' + label + '"]');
  var image = card && card.querySelector('.tool-logo img');
  if (image) {
    image.src = localToolLogos[label];
  }
});
