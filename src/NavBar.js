import npclogo from './logo.webp';
import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';


function Navibar() {


    return (
        <div>
            <img
                src={npclogo}
                width="160rem"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
            />
        </div>
    );
}

export default Navibar;