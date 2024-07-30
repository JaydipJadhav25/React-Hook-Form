// import React from 'react'
import Container  from "../components/container/Container";
import Login from "../components/Login";
// import Header from "../components/Header";
import Signin from "../components/Signin";

import RTE from "../components/RTE";
import PostFrom from "../components/PostFrom";


 const App = () => {
  return (
  <>

   <div className="bg-orange-700">
   

     <Container>
     <div className="bg-gray-700 w-full px-4">
        <h1>SignUp</h1>
    </div>
       <Signin/>
       <div className="bg-gray-700 w-full px-4">
        <h1>SignIn</h1>
    </div>
    <Login/>
    </Container>
   </div>
   {/* <RTE/> */}
   <PostFrom/>
  </>
  
  )


}

export default App;
