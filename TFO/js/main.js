document.addEventListener("DOMContentLoaded", () => {
  changeDataFormat();
  showAvailabilityOnCart();
});

function changeDataFormat() {
  const dataElements = document.querySelectorAll(".datad");
  console.log(dataElements);

  dataElements.forEach((element) => {
    const items = element.querySelectorAll("i");
    const day = items[0].textContent;
    const monthNumber = items[1].textContent;
    const year = items[2].textContent;

    // Mapowanie numeru miesiąca na nazwę
    const months = [
      "sty",
      "lut",
      "mar",
      "kwi",
      "maj",
      "cze",
      "lip",
      "sie",
      "wrz",
      "paź",
      "lis",
      "gru",
    ];
    const monthName = months[parseInt(monthNumber, 10) - 1];

    // Aktualizacja struktury
    items[1].textContent = monthName;
  });
}

//pokaż dostępne na koszyku - bez radio buttons
function showAvailabilityOnCart() {
  const availWrapper = document.querySelector(".conten2.wfl");
  if (!availWrapper) return;

  const availBtns = availWrapper.querySelectorAll(".product_availability-btn");

  availBtns.forEach((element) => {
    element.addEventListener("click", function (e) {
      e.preventDefault();

      const availPanel = this.closest(".product_availability");
      const availList = availPanel?.nextElementSibling;
      //  const emptyCart = this.closest('.empty-content');
      if (availList) {
        availList.classList.toggle("active");
        availPanel.classList.toggle("active");
      }
    });
  });
}

// //pokaż dostępne na koszyku - z radio buttons
// function showAvailabilityOnCart() {
//   const availBtns = document.querySelectorAll(".product_availability-btn");

//   availBtns.forEach((element) => {
//     element.addEventListener("click", function (e) {
//       e.preventDefault();

//       const availPanel = this.closest('.product_availability');
//       const productList = availPanel?.nextElementSibling;

//       if (productList) {
//         productList.classList.toggle("active");
//         availPanel.classList.toggle("active");

//         // Pobierz status z atrybutu data-status
//         const status = productList.dataset.status;

//         // Zaznacz odpowiedni radio button
//         const targetRadio = document.querySelector(`.availability-radio[data-target="${status}"]`);
//         if (targetRadio) {
//           targetRadio.checked = true;

//           // Wyzwól zdarzenie change dla zsynchronizowania widoczności
//           targetRadio.dispatchEvent(new Event("change"));
//         }
//       }
//     });
//   });

//   // Obsługa radio buttons
//   const radios = document.querySelectorAll(".availability-radio");

//   radios.forEach((radio) => {
//     radio.addEventListener("change", function () {
//       const target = this.dataset.target;

//       const productLists = document.querySelectorAll(".product_list");

//       productLists.forEach((list) => {
//         const status = list.dataset.status;

//         if (target === "all" || target === status) {
//           list.classList.add("active");
//           list.previousElementSibling.classList.add("active");
//         } else {
//           list.classList.remove("active");
//           list.previousElementSibling.classList.remove("active");
//         }
//       });
//     });
//   });

//   // Wywołanie domyślnego filtra (pokazuje wszystkie produkty na start)
//   const defaultRadio = document.querySelector('.availability-radio[data-target="all"]');
//   if (defaultRadio) {
//     defaultRadio.dispatchEvent(new Event("change"));
//   }
// }

