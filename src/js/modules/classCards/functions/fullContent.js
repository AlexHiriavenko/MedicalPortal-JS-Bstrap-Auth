export function fullContent(cardObj, parent) {
  const cardsKeys = Object.keys(cardObj);
  const allItems = [
    "age",
    "body Mass Index",
    "date",
    "description",
    "diseases Of Heart",
    "last Visit",
    "phone",
    "pressure",
    "priority",
    "purpose",
    "status",
  ];
  allItems
    .filter((key) => {
      const camelKey = key.replace(/\s/g, "");
      return cardsKeys.includes(camelKey) && cardObj[camelKey];
    })
    .map((key) => {
      const camelKey = key.replace(/\s/g, "");
      const p = document.createElement("p");
      p.classList.add("card-text");
      p.innerHTML = `<strong>${key[0].toUpperCase()}${key.slice(
        1
      )}: </strong><span data-${camelKey}>${cardObj[camelKey]}</span>`;
      parent.append(p);
      const span = p.querySelector("span");
      if (camelKey === "purpose") {
        span.classList.add("purpose");
      }
    });
}
