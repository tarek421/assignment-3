function kilometerToMeter(km) {
    var meter = km * 1000;
    return meter;
}
var result = kilometerToMeter(5);
console.log(result);

/*================================================*/

var watch = 50;
var phone = 100;
var laptop = 500;
function budgetCalculator(watch, mobile, laptop) {
    var watch = watch * 50;
    var mobile = mobile * 100;
    var laptop = laptop * 500;
    var totalPrice = watch + mobile + laptop;
    return totalPrice;
}
var result2 = budgetCalculator(5, 2, 5);
console.log(result2);

/*================================================*/

function megaFriend(friends) {
    var maxword = 0
    var longest;
    for (i = 0; i < friends.length; i++) {
        if (friends[i].length > maxword) {
            var maxword = friends[i].length;
            longest = friends[i];
        }
    }
    return longest;
}
var friends = ['rana', 'rafik', 'rahim', 'rayhan rana', 'tarek mahmud', 'sumaiya'];
var result = megaFriend(friends);
console.log(result);

/*=================================================*/
var days = 0;
function hotelCost(days) {
    if (days <= 10) {
        cost = days * 100;
    } else if (days <= 20) {
        var first_10_days = 10 * 100;
        var remining = days - 10;
        var second_10_days = remining * 80;
        cost = first_10_days + second_10_days;
    } else {
        var first_10_days = 10 * 100;
        var second_10_days = 10 * 80;
        var remining = days - 20;
        var after_20_days = remining * 50;
        cost = first_10_days + second_10_days + after_20_days;
    }
    return cost;
}
var result = hotelCost(45);
console.log(result);
