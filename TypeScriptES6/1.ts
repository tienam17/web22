let soChan=(arr:number[])=>{
  let ketQua:number[]=[];
  for(let i=0;i<arr.length;i++){
    if(arr[i]%2==0){
      ketQua.push(arr[i])
    }
  }

  /**
   * 1. Sử dụng hàm filter 
   * 2. Sử dùng hàm map
   */
  return ketQua
}

console.log(soChan([1,2,4,6,7]));












