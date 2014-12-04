var i = prompt("Please enter a number")
	if (i % 1 != 0) {
		document.write("That is not a whole number, please hit refresh and try again");
	} else if (i % 3 === 0 && i % 5 === 0) {
		// If number is divisible by both 3 and 5, you say "fizz buzz"
		document.write("fizz buzz");
	} else if (i % 3 === 0) {
		// If number is divisible by 3, you say "fizz"
		document.write("fizz");
	} else if (i % 5 === 0) {
		// If number is divisible by 5, you say "buzz"
		document.write("buzz")
	} else {
		// If number is not divisible by 3 or 5, you say the number
		document.write(i)
	}