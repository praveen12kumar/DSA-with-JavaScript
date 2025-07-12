function lowerFunction(arr, target){
    let low = 0, high = arr.length -1;
	let ans = arr.length;
	
	while(low <= high){
		let mid = low + Math.floor((high - low)/2);
		
		if(arr[mid] < x){
			low = mid + 1;
		}
		else{
				ans = mid;
				high = mid -1;
		}
	}
	return ans;

}