// Get all the relevant divs
var tenthDiv = document.querySelector(".tenth");
var twelveDiv = document.querySelector(".twelve");
var graduationDiv = document.querySelector(".graduation");
var postgraduationDiv = document.querySelector(".postgraduation");

// Function to hide paragraphs and h6 elements within a specific div
function hideElementsWithinDiv(div) {
    var paras = div.querySelectorAll("p");
    var chsix = div.querySelectorAll("h6");

    paras.forEach(p => {
        p.style.visibility = "hidden";
    });

    chsix.forEach(h6 => {
        h6.style.display = "block";
    });
}

// Function to add mouseover and mouseout event listeners to a specific div
function addEventListenersToDiv(div) {
    var paras = div.querySelectorAll("p");
    var chsix = div.querySelectorAll("h6");

    div.addEventListener("mouseover", () => {
        paras.forEach(p => {
            p.style.visibility = "visible";
        });

        chsix.forEach(h6 => {
            h6.style.display = "none";
        });
    });

    div.addEventListener("mouseout", () => {
        hideElementsWithinDiv(div);
    });
}

// Add event listeners to each specific div
addEventListenersToDiv(tenthDiv);
addEventListenersToDiv(twelveDiv);
addEventListenersToDiv(graduationDiv);
addEventListenersToDiv(postgraduationDiv);

// Hide paragraphs and h6 elements initially for each div
hideElementsWithinDiv(tenthDiv);
hideElementsWithinDiv(twelveDiv);
hideElementsWithinDiv(graduationDiv);
hideElementsWithinDiv(postgraduationDiv);