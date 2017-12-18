var a1 = [1, 2, 3, 4, 5]
var a2 = [6, 7, 8, 9, 10]

function greaterThan3(int){
	//return bool if int is greater than 3
	// if(int > 3){
	// 	return true
	// }else{
	// 	return false
	// }
	return int > 3
}

function sumTwoNumbers(int1, int2){
	return int1+ int2
}

function conditional(int1, int2){
	//return bool
	return int1*2 === int2
}

function sumOfArray(arr){
	var counter = 0
	for(var i=0; i < arr.length; i++){
		counter+= arr[i]
	}
	return counter
}

function productOfArray(arr){
	if(arr.length === 1){
		return arr[0]
	}
	return arr[0] * productOfArray(arr.slice(1))
}

function maxOfArray(arr){
	//reduce - 
	//current - item at curren index
	//when you return it comes new accum

	return arr.reduce(function(accum, current){
		if(current > accum){
			return current
		}
		return accum
	}, arr[0])

}

function filterArray(arr, filterFunc){
	var finalArray = []
	for (var i =0; i< arr.length; i++){
		if(filterFunc(arr[i])){
			finalArray.push(arr[i])
		}
	}
	return finalArray
}

function zipWith(arr1, arr2, zipFunc){
	var finalArray = []
	var maxLength = Math.min(arr1.length, arr2.length) //arr1.length > arr2.length ? arr1.length : arr2.length;
	for(var i=0; i < maxLength; i++){
		var zipped = zipFunc(arr1[i], arr2[i])	
		finalArray.push(zipped)
	}
	return finalArray
}

function compose(arr1, arr2, outputFunc, conditional){
	var finalArray = []
	for(var i=0; i< arr1.length; i++){
		for(var j=0; j < arr2.length; j++){
			if(conditional(arr1[i], arr2[j])){
				finalArray.push(outputFunc(arr1[i], arr2[j]))
			}
		}
	}
	return finalArray
}

console.log(compose(a1, a2, sumTwoNumbers, conditional))
