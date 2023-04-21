import { Link } from 'react-router-dom';
function NotFound() {
  return (
    <>
    <h1>Page not Found</h1>
    <Link to="/">Return Home</Link>
    </>
  );
}

export default NotFound;