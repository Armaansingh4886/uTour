import React from 'react'
import { BASE_URL } from "./../utils/config";
import {useNavigate} from "react-router-dom"
const VerifyEmail = () => {

    const navigate = useNavigate()
const handleclick = async()=>{
try {
  const queryParameters = new URLSearchParams(window.location.search)
  const id = queryParameters.get("id")
  console.log(id);
  
    const res = await fetch(`${BASE_URL}/auth/verifyemail/${id}`,{
      method:'get',
  headers:{
    'content-type':'application/json'
  }
  })
  
  const result = await res.json()
  console.log(result);
  if(!res.ok){
    return alert(result.message)
  }
      navigate("/login");
  } catch (err) {
    console.log(err.message);
    alert(err.message)
    // navigate("/thank-you");
  
  }
}


  return (
    <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate facere numquam error, unde consequatur totam accusantium nostrum pariatur animi, quidem at temporibus nulla deleniti reprehenderit sequi vitae dolorem quae cumque labore, laboriosam esse delectus libero quibusdam culpa? Omnis illum tenetur aut, accusantium incidunt consectetur adipisci error nemo unde vero soluta nostrum enim. At dolor debitis corporis accusantium, non soluta voluptates expedita sit, exercitationem ullam eius animi, veniam earum magni. Adipisci maxime aperiam culpa architecto enim! Doloremque adipisci voluptatem velit libero id assumenda tempore ea nemo, aspernatur voluptatum aperiam nisi nesciunt repudiandae vel dignissimos odit reiciendis consequatur itaque optio at veritatis labore! Ad ipsa iusto nam blanditiis, expedita voluptas magni quam voluptatum perspiciatis voluptates perferendis modi pariatur cupiditate sed accusamus ex. Quisquam quos cumque neque ab aliquam, vitae suscipit delectus obcaecati expedita? Necessitatibus quas ea maiores et sunt dolores animi, unde magnam obcaecati culpa pariatur rem libero debitis ab fugit expedita asperiores? Ab sit optio animi! Voluptas facilis eligendi veritatis culpa amet laborum totam officia, possimus repellat? Beatae, doloremque hic minus labore natus autem eum in fuga facere aut sequi ipsa, porro animi, quia ex placeat sit maiores deserunt vero perferendis alias. Quae sed eius veritatis veniam a nemo laboriosam voluptatem aspernatur accusantium, iste itaque quos incidunt ab facere autem fugiat dolorum fuga consectetur.
      <button onClick={handleclick}>Click Here to verify email</button>
      
    </div>
  )
}

export default VerifyEmail
