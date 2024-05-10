function shop() {
      let firstName = prompt("What is your first name?");
      let country = prompt("What country are you from?");

      if (country === "Kenya" || country === "Tanzania") {
        alert("Karibu " + firstName + "!😊 Shop your favorite outfits from Kenyan brands. Asante!");
      } else {
        alert("Welcome " + firstName + "!😊 Shop your favorite outfits from Kenyan brands. Thank you!");
      }

    }
    let shopButton = document.querySelector("button");
    shopButton.addEventListener("click", shop);