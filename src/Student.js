import Studentcard from './Studentcard'
import Studentdetail from './Studentdetail'
import { Row,Col } from 'reactstrap'
import { useEffect,useState } from "react";

export default function Student(){
    const [UserData,setUserData]=useState([]) 
    const [inputarray,setinputarray]=useState([]) 
    useEffect(()=>{
    fetch('https://640f08d74ed25579dc43acce.mockapi.io/amazon').then(res=>res.json()).then(val=>setUserData(val))
    },[])
    function AddList(id) {
        let tempTodos = UserData[id - 1];
        setinputarray([tempTodos])
    }
    return (
       <Row className="studentpage">
                <Col xs={12} sm={inputarray.length === 0 ? 12 : 8} md={inputarray.length === 0 ? 12 : 6}>
                    {
                       UserData.map((value, index) =>
                            <>
                                <Studentcard key={index} data={value} add={AddList} />
                                <br />
                            </>
                        )
                    }

                </Col>
                <Col xs={12} sm={inputarray.length === 0 ? 12 : 8}  md={inputarray.length === 0 ? 0: 6}>
                {
                   inputarray.map((value, index) => (
                        < Studentdetail key={index} details={value} />
                    ))
                }
                </Col>
            </Row>
      

    )
}