import { useContext, useRef } from 'react';
import {InputGroup,Input,Button, Container } from 'reactstrap'
import {LibraryContext} from '../../Context'
//import GiArchiveResearch from 'react-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
const TodoForm = () => {
    const {SearchBook}=useContext(LibraryContext);
    const ref = useRef();
   
  
    return (
        <Container className='Searchbar'>
      <InputGroup className=' d-flex mt-4 mb-4 '>
        <Input innerRef={ref} onChange={()=>SearchBook(ref.current.value)}/>
        <Button color="success" >
          {/* <GiArchiveResearch/> */}
          <FontAwesomeIcon icon={faMagnifyingGlass} flip />
        </Button>
      </InputGroup>
      </Container>
    );
  };
  export default TodoForm;