export function fullContent(cardObj, parent) {
    const cardsKeys = Object.keys(cardObj);
    const allItems = [
        "purpose",
        "description",
        "priority",
        "visit Date",
        "status",
        "pressure",
        "body Mass Index",
        "diseases Of Heart",
        "age",
        "last Visit",
    ];
    allItems
        .filter((key) => {
            const camelKey = key.replace(/\s/g, "");
            return cardsKeys.includes(camelKey) && cardObj[camelKey];
        })
        .map((key) => {
            const camelKey = key.replace(/\s/g, "");
            const p = document.createElement("p");
            p.innerHTML =
                "<strong>" +
                key[0].toUpperCase() +
                key.slice(1) +
                ":</strong> " +
                cardObj[camelKey];
            parent.append(p);
        });
}
