let parent = document.querySelectorAll(".parent");
let allSum = document.querySelector(".all__sum");

let addBtn = document.querySelector(".add__button");
addBtn.addEventListener("click", function () {
  let table = document.querySelector("tbody");
  let inputPrice = document.querySelector(".input__price").value;
  let inputName = document.querySelector(".input__name").value;

  if (inputName == "" || inputPrice == "") {
    return alert("Незаполнены поля");
  }
  if (inputPrice != Number(inputPrice)) {
    return alert("Введите число");
  }
  table.insertAdjacentHTML(
    "beforeend",
    `
     <tr class="newParent">
        <td>${inputName}</td>
        <td class="price">${inputPrice}</td>
        <td class="newCount">1</td>
        <td class="newItemSum">${inputPrice}</td>
        <td><button class="newPlus">+</button></td>
        <td><button class="newMinus">-</button></td>
      </tr>
  `
  );
  let lastTable = document.querySelector("tbody");
  let lastEl = lastTable.querySelector(".newParent:last-child");
  console.log(lastEl);

  allSum.textContent = Number(allSum.textContent) + Number(inputPrice);
  let itemSum = lastEl.querySelector(".newItemSum");
  let price = lastEl.querySelector(".price");
  let newPlus = lastEl.querySelector(".newPlus");
  let newMinus = lastEl.querySelector(".newMinus");
  let count = lastEl.querySelector(".newCount");
  newPlus.addEventListener("click", function () {
    count.textContent = Number(count.textContent) + 1;
    itemSum.textContent =
      Number(itemSum.textContent) + Number(price.textContent);
    allSum.textContent = Number(allSum.textContent) + Number(price.textContent);
  });
  newMinus.addEventListener("click", function () {
    count.textContent = Number(count.textContent) - 1;
    itemSum.textContent =
      Number(itemSum.textContent) - Number(price.textContent);
    allSum.textContent = Number(allSum.textContent) - Number(price.textContent);
    if (Number(count.textContent) == 0) {
      lastEl.remove();
    }
  });

  //--------------------------------------------------------------

  // allSum.textContent = Number(allSum.textContent) + Number(inputPrice);
  // let itemSum = el.querySelector(".newItemSum");
  // let price = el.querySelector(".price");
  // let newPlus = el.querySelector(".newPlus");
  // let newMinus = el.querySelector(".newMinus");
  // let count = el.querySelector(".newCount");
  // newPlus.addEventListener("click", function () {
  //   count.textContent = Number(count.textContent) + 1;
  //   itemSum.textContent =
  //     Number(itemSum.textContent) + Number(price.textContent);
  //   allSum.textContent =
  //     Number(allSum.textContent) + Number(price.textContent);
  // });
  // newMinus.addEventListener("click", function () {
  //   count.textContent = Number(count.textContent) - 1;
  //   itemSum.textContent =
  //     Number(itemSum.textContent) - Number(price.textContent);
  //   allSum.textContent =
  //     Number(allSum.textContent) - Number(price.textContent);
  //   if (Number(count.textContent) == 0) {
  //     el.remove();
  //   }
  // });
});

for (let el of parent) {
  let plus = el.querySelector(".plus__btn");
  let minus = el.querySelector(".minus__btn");
  let itemSum = el.querySelector(".item__sum");
  let count = el.querySelector(".count");
  let price = el.querySelector(".price");
  plus.addEventListener("click", function () {
    count.textContent = Number(count.textContent) + 1;
    itemSum.textContent =
      Number(itemSum.textContent) + Number(price.textContent);

    allSum.textContent = Number(allSum.textContent) + Number(price.textContent);
  });
  minus.addEventListener("click", function () {
    count.textContent = Number(count.textContent) - 1;
    itemSum.textContent =
      Number(itemSum.textContent) - Number(price.textContent);

    allSum.textContent = Number(allSum.textContent) - Number(price.textContent);
    if (Number(count.textContent) == 0) {
      el.remove();
    }
  });
}
