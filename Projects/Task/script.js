"usestrict";

function getValue() {
  let value = document.getElementById("categories");
  let selected = [...value.options]
    .filter((option) => option.selected)
    .map((option) => option.value);
  for (let i = 0; i < selected.length; i++) {
    const newProducts = products.filter(function (category) {
      if (selected.length === 1) {
        return category[selected[i]] === "1";
      } else if (selected.length > 1) {
        return category[selected[i]] === "1" && category[selected[i + 1]];
      }
    });
    // console.log(newProducts);
    for (const product of newProducts) {
      console.log(product.name);
      // document.querySelector(".product").textContent = product.name;
    }
  }
}

// const categories = [
//   "brand",
//   "style",
//   "travel",
//   "mobile",
//   "personal",
//   "clothing",
// ];

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
    travel: "1",
    personal: "1",
    clothing: "",
  },
];
