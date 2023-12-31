import { placeholderPropertyObj } from "./properties/placeholderPropertyObj.js";
import { propertyForSaleArr } from "./properties/propertyForSaleArr.js";

function getPropertyHtml(propertiesArr = [placeholderPropertyObj]) {
  let htmlList = propertiesArr
    .map((property) => {
      const { propertyLocation, roomsM2, priceGBP, comment, image } = property;
      const totalSize = roomsM2.reduce((total, current) => {
        return total + current;
      });
      let htmlContent = `
        <section class="card">
            <img src="/images/${image}">
            <div class="card-right">
                <h2>${propertyLocation}</h2>
                <h3>${priceGBP}</h3>
                <p>${comment}</p>
                <h3>${totalSize} m&sup2;</h3>
            </div>
        </section>
        `;

      return htmlContent;
    })
    .join("");
  return htmlList;
}

document.getElementById("container").innerHTML =
  getPropertyHtml(propertyForSaleArr);
