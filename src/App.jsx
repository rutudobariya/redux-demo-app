import React from "react";
import { Container } from "react-bootstrap";
import Counter from "./container/CounterContainer";
function App()
{
  return(
    <>
    <Container className="p-5 mt-5 shadow w-75 mx-auto">
     <h2 className="text-center">React Redux counter App using Redux dev Tools</h2>
      <h1 className="text-center"><Counter /></h1>
    
    </Container>

    </>
  )
}
export default App