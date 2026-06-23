
// *********Two sum 

const nums=[2,3,5,1,7,8]
const target = 10

const twoSum = (nums,target)=>{ //O(n2)
  for(let i=0;i<nums.length;i++){
    for(let j=i+1;j<nums.length;j++){
        if(nums[i]+nums[j]===target){
            return [i,j]
        }
    }
  }
}


const twoSum=(nums,target)=>{
    const maps={}
    for(let i=0;i<nums.length;i++){ // O(n)
        let comp = target-nums[i]
        if(maps[comp]!==undefined){
            return [maps[comp],i]
        }
        maps[nums[i]]=i
    }
}

console.log(twoSum(nums,target));




