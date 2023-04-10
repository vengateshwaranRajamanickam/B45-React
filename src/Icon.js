import {FaReact, FaGithub,FaJsSquare} from "react-icons/fa";
export default function Icon({ iconname}) {

  return (
    <>
      {iconname === "empty" ? <FaGithub className="icon"/>: iconname === "React" ? <FaReact className="icon"/> :<FaJsSquare className="icon"/>}
    </>
  );
}
