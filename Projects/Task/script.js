"usestrict";
const products = [
  {
    name: "A",
    price: "120",
    brand: "1",
    style: "",
    mobile: "",
    travel: "1",
    personal: "1",
    clothing: "",
  },
  {
    name: "B",
    price: "220",
    brand: "",
    style: "1",
    mobile: "",
    travel: "1",
    personal: "",
    clothing: "",
  },
  {
    name: "C",
    price: "100",
    brand: "1",
    style: "1",
    mobile: "",
    travel: "",
    personal: "1",
    clothing: "",
  },
];

function getValue() {
  const productNames = [];

  let value = document.getElementById("categories");
  let selected = [...value.options]
    .filter((option) => option.selected)
    .map((option) => option.value);
  console.log(selected);

  const final = [];
  for (let i = 0; i < products.length; i++) {
    let isTrue = true;
    for (let j = 0; j < selected.length; j++) {
      if (products[i][selected[j]] === "") {
        isTrue = false;
      }
    }
    if (isTrue) {
      final.push(products[i]);
    }
  }
  const finalProducts = new Set(final);
  console.log(finalProducts);

  for (const item of finalProducts) {
    productNames.push(item.name);
  }
  if (productNames.length > 0) {
    document.querySelector(
      ".product"
    ).textContent = `Products corresponding to your selection are ${productNames.join(
      ", "
    )}`;
  } else {
    document.querySelector(".product").textContent =
      "No corresponding products found";
  }
}
