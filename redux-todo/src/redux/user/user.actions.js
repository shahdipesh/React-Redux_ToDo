const login =(userObj)=>{
   console.log(userObj)
   return{
       type:'LOGIN',
       payload:userObj
   }
}
 export const signOut =()=>{
   return{
       type:'SIGNOUT',
   }
}

export default login