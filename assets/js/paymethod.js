const cardTypeSelect = document.getElementById("cardtype");
const cardNumberInput = document.getElementById("cardnumber");
const errorMessage = document.getElementById("error-message");

cardNumberInput.addEventListener("input", validateCardNumber);

function validateCardNumber() {
    const cardType = cardTypeSelect.value;
    const cardNumber = cardNumberInput.value.replace(/\s+/g, '');

    let isValid = false;

    // Determine the validity based on selected card type
    switch (cardType) {
        case "visa":
            isValid = /^4\d{12}(\d{3})?$/.test(cardNumber); // Visa: 13 or 16 digits, starts with 4
            break;
        case "mastercard":
            isValid = /^5[1-5]\d{14}$/.test(cardNumber); // MasterCard: 16 digits, starts with 51–55
            break;
        case "amex":
            isValid = /^3[47]\d{13}$/.test(cardNumber); // Amex: 15 digits, starts with 34 or 37
            break;
        case "discover":
            isValid = /^6(?:011|5\d{2})\d{12}$/.test(cardNumber); // Discover: 16 digits, starts with 6011 or 65
            break;
        default:
            isValid = false; // No type selected or invalid card type
            break;
    }

    if (!isValid && cardType) {
        errorMessage.textContent = "Invalid card number for selected card type.";
    } else {
        errorMessage.textContent = ""; // Clear error if valid
    }
}
