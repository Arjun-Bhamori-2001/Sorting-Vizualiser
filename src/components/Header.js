import React from 'react'
import {Navbar,Nav,Container} from "react-bootstrap"

const Header = (props) => {
    return (
        <>
        <Navbar expand="lg" bg="dark" variant="dark" style={{height:"10%"}}>
            <Container >
            <button type="button" className="btn btn-primary btn-lg mr-2" onClick={() => props. genRandomArray()}>Generate Random Array</button>
            <button type="button" className="btn btn-warning mr-1" onClick={() => props. setTime(1000)}>X/4</button>
            <button type="button" className="btn btn-warning mr-1" onClick={() => props. setTime(400)}>X/2</button>
            <button type="button" className="btn btn-warning mr-1" onClick={() => props. setTime(200)}>X</button>
            <button type="button" className="btn btn-warning mr-1" onClick={() => props. setTime(100)}>2X</button>
            <button type="button" className="btn btn-warning mr-1" onClick={() => props. setTime(50)}>4X</button>
            <Nav className="me-auto" >
            <button type="button" className="btn btn-danger btn-lg  mr-3" onClick={() => props. bubbleSort()}>Bubble</button>
            <button type="button" className="btn btn-danger btn-lg mr-3"  onClick={() => props. insertionSort()}>Insertion</button>
            <button type="button" className="btn btn-danger btn-lg mr-3">Merge</button>
            <button type="button" className="btn btn-danger btn-lg mr-3">Selection</button>
            <button type="button" className="btn btn-danger btn-lg">Quick</button>
            </Nav>
            </Container>
        </Navbar>
        </>
    )
}

export default Header
