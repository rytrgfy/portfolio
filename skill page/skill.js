// $(document).ready(function() {

//     $(window).scroll(function() {
//         var scroll = $(window).scrollTop();
//         if (scroll > 100) {
//             $(".header").css("background", "#1f242d");
//             $(".header").css("filter", "blur(1px)");
//         } else {
//             $(".header").css("background", "");
//             $(".header").css("filter", "blur(1px)");
//         }
//     })
// })

// // Event listener for window scroll
// $(window).scroll(function() {
//     scroll = $(window).scrollTop();
//     updateBlur();
// });

// // Event listener for mouse enter and leave on header
// $(".header").hover(
//     function() {
//         // Mouse enter
//         $(".header").css("filter", "blur(0)");
//     },
//     function() {
//         // Mouse leave
//         updateBlur(); // Reapply blur based on scroll position
//     }
// );



$(document).ready(function() {
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll > 100) {
            $(".header").css("background", "#1f242d");
            $(".header").css("filter", "blur(1px)");
        } else {
            $(".header").css("background", "");
            $(".header").css("filter", "blur(1px)");
        }
    });

    // Function to update blur effect
    function updateBlur() {
        var scroll = $(window).scrollTop();
        if (scroll > 100) {
            $(".header").css("filter", "blur(1px)");
        } else {
            $(".header").css("filter", "blur(0)");
        }
    }

    // Event listener for window scroll
    $(window).scroll(function() {
        updateBlur();
    });

    // Event listener for mouse enter and leave on header
    $(".header").hover(
        function() {
            // Mouse enter
            $(".header").css("filter", "blur(0)");
        },
        function() {
            // Mouse leave
            updateBlur(); // Reapply blur based on scroll position
        }
    );
});