import { Link } from "react-router-dom";
function Test() {
  return (
    <div>
      <div>login page 2</div>
      <Link to="/login3">
        <button>login2</button>
      </Link>
    </div>
  );
}

export default Test;
