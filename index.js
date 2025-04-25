function calculate() {
      const yardSize = parseFloat(document.getElementById("yard").value);
      const design = document.getElementById("design").value;

      if (isNaN(yardSize) || yardSize <= 0) {
        document.getElementById("estimateResult").textContent = "Please enter a valid yard size.";
        return;
      }

      let ratePerSqFt;
      switch (design) {
        case 'basic': ratePerSqFt = 2; 
          break;
        case 'standard': ratePerSqFt = 4; 
          break;
        case 'premium': ratePerSqFt = 6; 
          break;
      }

      const totalCost = yardSize * ratePerSqFt;
      document.getElementById("estimateResult").textContent = `Estimated Cost: $${totalCost.toFixed(2)}`;
    }

    document.getElementById("contactForm").addEventListener("submit", function(e) {
      e.preventDefault();
      alert("Thank you for your query! We'll get back to you soon.");
      this.reset();
    });