const validPin = 12345;
// add money btn
document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();

    const bank = document.getElementById("bank").value;
    const accountNumber = document.getElementById("account-number").value;
    const amount = parseInt(document.getElementById("add-amount").value);
    const pin = parseInt(document.getElementById("add-pin").value);

    const availableBalance = parseInt(
      document.getElementById("available-balance").innerText
    );

    if (accountNumber.length < 11) {
      alert("Please provide valid account number");
      return;
    }

    if (pin !== validPin) {
      alert("please provide a valid pin number");
      return;
    }

    const totalNewAvailableBalance = amount + availableBalance;
    document.getElementById("available-balance").innerText =
      totalNewAvailableBalance;
  });

// withdraw money btn

document.getElementById("withdraw-btn").addEventListener("click", function (e) {
  e.preventDefault();
  const amount = parseInt(document.getElementById("withdraw-amount").value);

  const availableBalance = parseInt(
    document.getElementById("available-balance").innerText
  );

  const totalNewAvailableBalance = availableBalance - amount;

  document.getElementById("available-balance").innerText =
    totalNewAvailableBalance;
  console.log(totalNewAvailableBalance);
});

// toggling feature

document.getElementById("add-button").addEventListener("click", function () {
  document.getElementById("cash-out-parent").style.display = "none";
  document.getElementById("add-money-parent").style.display = "block";
});
document
  .getElementById("cash-out-button")
  .addEventListener("click", function () {
    document.getElementById("add-money-parent").style.display = "none";
    document.getElementById("cash-out-parent").style.display = "block";
  });
