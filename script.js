function generateQRCode() {
    const upiId = document.getElementById('upiId').value.trim();
    const amount = document.getElementById('amount').value.trim();

    if (!upiId) {
        alert('Please enter a valid UPI ID.');
        return;
    }

    const qrText = generateUPIQRText(upiId, amount);
    displayQRCode(qrText);
}

function generateUPIQRText(upiId, amount) {
    let qrText = 'upi://pay?pa=' + encodeURIComponent(upiId);

    if (amount) {
        qrText += '&mc=yourMerchantCode'; // Replace with your merchant code
        qrText += '&tid=yourTransactionId'; // Replace with your transaction ID
        qrText += '&tr=yourTransactionRefId'; // Replace with your transaction reference ID
        qrText += '&tn=Payment Description';
        qrText += '&am=' + encodeURIComponent(amount);
    }

    return qrText;
}

function displayQRCode(qrText) {
    const resultContainer = document.getElementById('qrcode');
    resultContainer.innerHTML = ''; // Clear previous QR code

    const qrcode = new QRCode(resultContainer, {
        text: qrText,
        width: 360,
        height: 360,
        colorDark: "#b1f202", // Set the dark color to #b1f202
        colorLight: "#fff",   // Set the light color to #fff
    });

    resultContainer.style.display = 'block';
}




