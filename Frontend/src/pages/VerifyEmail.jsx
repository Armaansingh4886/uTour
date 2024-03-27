import React from 'react'

const VerifyEmail = () => {

const handleclick = async()=>{
    
try {
    
  
    const res = await fetch(`${BASE_URL}/verifyemail`,{
      method:'post',
  headers:{
    'content-type':'application/json'
  }
  })
  
  const result = await res.json()
  console.log(result);
  if(!res.ok){
    return alert(result.message)
  }
      navigate("/thank-you");
  } catch (err) {
    console.log(err.message);
    alert(err.message)
    // navigate("/thank-you");
  
  }
}
  return (
    <div>
        
      <button onClick={handleclick()}>Click Here to </button>
    </div>
  )
}

export default VerifyEmail
