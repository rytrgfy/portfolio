// var classchilddiv = document.querySelectorAll(".childdiv");
// var tenth = document.querySelectorAll(".tenth");
// var twelve = document.querySelectorAll(".twelve");
// var graduation = document.querySelectorAll(".graduation");
// var postgraduation = document.querySelectorAll(".postgraduation");

// var chsix = document.querySelectorAll("h6");
// var para = document.querySelectorAll("p");

// // Function to hide paragraphs and h6 elements
// function hideElements() {
//     para.forEach(p => {
//         p.style.visibility = "hidden";
//     });
//     chsix.forEach(h6 => {
//         h6.style.display = "block";
//     });
// }

// // Loop through each element with the class "childdiv"
// classchilddiv.forEach(element => {
//     // Add event listener for mouseover
//     element.addEventListener("mouseover", () => {
//         // Loop through each paragraph
//         para.forEach(p => {
//             // Show paragraphs
//             p.style.visibility = "visible";
//         });
//         // Loop through each h6 element
//         chsix.forEach(h6 => {
//             // Show h6 elements
//             h6.style.display = "none";
//         });
//     });

//     // Add event listener for mouseout
//     element.addEventListener("mouseout", () => {
//         // Hide paragraphs and h6 elements when mouse leaves the box
//         hideElements();
//     });
// });

// // Hide paragraphs and h6 elements initially
// hideElements();
var tenthDiv = document.querySelector(".tenth");
var twelveDiv = document.querySelector(".twelve");
var graduationDiv = document.querySelector(".graduation");
var postgraduationDiv = document.querySelector(".postgraduation");

var chsix = document.querySelectorAll("h6");
var para = document.querySelectorAll("p");

// Function to hide paragraphs and h6 elements within a specific div
function hideElements() {
    para.forEach(p => {
        p.style.visibility = "hidden";
    });
    chsix.forEach(h6 => {
        h6.style.display = "block";
    });
}

// Function to add mouseover and mouseout event listeners to a specific div
function addEventListenersToDiv(div) {
    div.addEventListener("mouseover", () => {
        para.forEach(p => {
            p.style.visibility = "visible";
        });
        chsix.forEach(h6 => {
            h6.style.display = "none";
        });
    });

    div.addEventListener("mouseout", () => {
        hideElements();
    });
}

// Add event listeners to each specific div
addEventListenersToDiv(tenthDiv);
addEventListenersToDiv(twelveDiv);
addEventListenersToDiv(graduationDiv);
addEventListenersToDiv(postgraduationDiv);

// Hide paragraphs and h6 elements initially
hideElements();