import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
        <p style={{color: 'white'}}>Copyright &copy; 2022</p>
        <Link to="/about">About</Link>
    </footer>
  )
}

export default Footer