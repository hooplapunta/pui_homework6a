$(".menuItem").find("button").hide();

$(".menuItem").on("mouseover", function (event) {
    $(this).find("button").show()

    var id = $(this).attr("id")
    var text = "All our donuts are baked fresh daily. Select any donut to learn more about all of Donut Theory's doughy personality."

    switch (id) {
        case "almond":
            text = "Head Baker Tom’s special creation was made when he toasted almonds for a little too long, \
            but this donut has a wonderful smokiness, especially when paired with our signature toffee glaze."
            break;
        case "classic":
            text = "Despite this donut having just the simple classic sugary glaze, our humble beginnings \
            uses the finest vanilla and sugar that is also sustainably sourced!"
            break;
        case "chocolate":
            text = "Nothing is quite like this decadant treat of a luscious glaze atop any donut, \
            made with a mix of both 70% dark and milk chocolate, plus a hint of spice."
            break;
        case "pink":
            text = '"Hey, hey you", Pink Donut says. "Are you feeling craaaaazy?!" \
            Our crazy pink donut does not actually talk, but we believe that is what it would say. '
            break;
        case "strawberry":
            text = "An innocent looking sugar-dusted donut this looks, but once you bite into \
            the center, expect an explosion of delicious homemade strawberry jelly."
            break;
        case "mango":
            text = "Is it mango? Is it lime? What we do know that this donut is a mystery. \
            We are pretty sure it tastes different every bite, but it will always be moreish."
            break;
    }

    $("#description").html(text)
});

$(".menuItem").on("mouseleave", function (event) {
    $(this).find("button").hide()
});

$(".menuItem").find("input").on("change", updateAmount);

$(".up-button").on("click", function (event) {
    if ($(this).parent().find("input").val() < 12) {
        $(this).parent().find("input").val(parseInt($(this).parent().find("input").val()) + 1)
    }

    updateAmount();
});

$(".down-button").on("click", function (event) {
    if ($(this).parent().find("input").val() > 0) {
        $(this).parent().find("input").val(parseInt($(this).parent().find("input").val()) - 1)
    }

    updateAmount();
});

function updateAmount (event) {
    console.log($(".menuItem").find("input").toArray().reduce((a, b) => a + parseInt(b.val()), 0))
}