function count(str, letter){
	var count = 0;
	for(var i = 0; i < str.length; i++){
		if (str[i] == letter){
			count += 1
		}
	}
	return count
}

var str = "Hello darkness my old friend";
var letter = prompt("Enter your letter: ", "");
alert(count(str, letter));
