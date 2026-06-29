
const target=9 
const nums=[2,3,6,1,8,3]

const twoSum=(nums,target)=>{
    const obj={}
for(let i=0;i<nums.length;i++){
    const temp = target-nums[i]
    if(obj[temp]!==undefined){
        return [obj[temp],i]
    }

    obj[nums[i]]=i
}
}
console.log(twoSum(nums,target));



