const findString = (str) => {
    // const arrStr = str.split(' ');
    // let n = 0;
    // arrStr.forEach(element => {
    //     if (element.toLowerCase() == "Lorem".toLowerCase()) {
    //         n = n + 1;
    //     }
    // });
    // return n;
    // return str.split(' ').filter((item)=> item.toLowerCase()==='lorem').length;
    return str.split('').sort()
}


const strData = "LoRem ipsum dolor sit amet, consectetur lorem adipisicing lorem elit. Tempora lorem natus nisi aspernatur eligendi modi velit recusandae earum et! Sequi quo totam inventore enim architecto cupiditate. Quidem reiciendis fugiat ipsa! Inventore eum amet aliquid modi distinctio. Sequi dolor accusantium aut eum, ab consectetur nemo, quia perferendis pariatur officiis nulla exercitationem vero eaque? Veniam, autem dolorum aut incidunt praesentium odit cupiditate soluta qui numquam pariatur sunt beatae voluptatibus animi modi vitae perferendis commodi eos in, cum deleniti hic similique debitis repellat? Facilis magnam perferendis earum. Dicta deserunt at ducimus ipsa vitae ab voluptatibus, eos cupiditate, eaque sunt inventore. Saepe officiis possimus nostrum maxime illum obcaecati? Ipsam id quos labore, necessitatibus sunt quidem!"

console.log(findString(strData))