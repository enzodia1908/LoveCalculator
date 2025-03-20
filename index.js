const button = document.getElementById("calculate");

function CalculateWhatTomOwes() {
    const debtType = document.getElementById("debtType").value;
    const hours = document.getElementById("hours").value;
    const outcome = document.getElementById("outcome");

    const rates = {
        kisses: 6,
        cuddles: 9,
        messina: 4,
        dollars: 36,
    };

    const total = rates[debtType] * hours;

    switch (debtType) {
        case "kisses":
            outcome.innerHTML = `Tom owes Nadia a grand total of ${total} kisses! Better start smooching!! 💋`;
            break;
        case "cuddles":
            outcome.innerHTML = `Tom owes Nadia a whopping ${total} warm cuddles, that's a lot of cuddles mate. Better get started then!! 💌`;
            break;
        case "messina":
            outcome.innerHTML = `Tom owes Nadia ${total} scoops of Messina. 🍦 That's probably not good for her calories.. Fuck it. She needs the points for the damn cart.`;
            break;
        case "dollars": 
            outcome.innerHTML = `Tom owes Nadia $${total} dollaroooonis. She can put that towards her Gymshark budget, hooray! 🤑`;
            break;
        default:
            outcome.innerHTML = "Please select an option!";
            break;
    }

    if (outcome.innerHTML.trim() !== "") {
        outcome.style.display = "block";
        outcomeLabel.style.display = "block";
    }
}

button.addEventListener("click", CalculateWhatTomOwes);

