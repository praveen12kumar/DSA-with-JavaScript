function BinarySearch(arr, target){
	let low = 0, high = arr.length -1;
	
	while( low <= high){
	let mid = Math.floor((high - low)/2);
	
	if(arr[mid] == target) return mid;
	
	else if(arr[mid] < target)
		low = mid +1;
	else
	 high = mid-1;
	}
	return -1;
}	


const arr = [1,2,3,4,5,6,7,8,9,10];
console.log(BinarySearch(arr, 2));