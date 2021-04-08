var arr=[ 0, -1, 2, 3, -3, 1 ]
console.log(arr);
let len=arr;

for ( i=0 ; i<len-2 ; i++ )
{
	for ( j=i+1; j<$len-1 ; j++ )
	{
		for ( k=j+1 ; k<$len ; k++ )
		{
			if ( (arr[i]+arr[j]+arr[k] ) == 0 )
			{
				console.log(arr.push(i))
				console.log(arr.push(j))	
				console.log(arr.push(k))
            }
        }
    }	
}