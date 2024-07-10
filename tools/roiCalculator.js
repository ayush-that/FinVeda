document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('roi-form').addEventListener('submit', function(event) {
      event.preventDefault();
      const invested = parseFloat(document.getElementById('invested').value);
      const returned = parseFloat(document.getElementById('return').value);

      if (isNaN(invested) || isNaN(returned)) {
          document.getElementById('result').textContent = 'Please enter valid numbers.';
          return;
      }
      const gl = (returned - invested)
      const roi = ((returned - invested) / invested) * 100;
      document.getElementById('gl').textContent = `Gain: ${gl.toFixed(2)}`;
      document.getElementById('result').textContent = `ROI: ${roi.toFixed(2)}%`;
  });
});
