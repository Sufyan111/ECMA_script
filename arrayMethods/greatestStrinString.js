const greatestStrinString = (str) => {
    const arrStr= str.split(" ")
    let maxStr = arrStr[0].length;
    let strData = arrStr[0];

    arrStr.forEach(element => {
        if (element.length > maxStr) {
            maxStr = element.length;
            strData = element;
        };
    });
    return strData;
}

console.log(greatestStrinString("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora natus nisi aspernatur eligendi modi velit recusandae earum et! Sequi quo totam inventore enim architecto cupiditate. Quidem reiciendis fugiat ipsa! Inventore eum amet aliquid modi distinctio. Sequi dolor accusantium aut eum, ab consectetur nemo, quia perferendis pariatur officiis nulla exercitationem vero eaque? Veniam, autem dolorum aut incidunt praesentium odit cupiditate soluta qui numquam pariatur sunt beatae voluptatibus animi modi vitae perferendis commodi eos in, cum deleniti hic similique debitis repellat? Facilis magnam perferendis earum. Dicta deserunt at ducimus ipsa vitae ab voluptatibus, eos cupiditate, eaque sunt inventore. Saepe officiis possimus nostrum maxime illum obcaecati? Ipsam id quos labore, necessitatibus sunt quidem!"))