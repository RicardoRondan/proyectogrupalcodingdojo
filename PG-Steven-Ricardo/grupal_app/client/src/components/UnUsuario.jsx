import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const UnUsuario = () => {
	const { nombre, alias, email, id } = useParams();
const navigate = useNavigate();
const logout = (e) => {
	e.preventDefault();
	axios
		.get('http://localhost:8000/api/logout', { withCredentials: true })
		.then((res) => {
			navigate('/');
		})
		.catch((error) => console.log(error));
};
	return (
		<div className='col-10 mx-auto'>
			<div className='unusuarioexamen-principal'>
				{/* <p>Register</p> */}
				<div id='enlace'>
					<div>
						<Link to={`/bright_ideas/${id}`}>Bright Ideas</Link>
					</div>
					<div>
						<Link onClick={logout}>Logout</Link>
					</div>
				</div>
			</div>
			<p>Name:{nombre}</p>
			<p>Alias:{alias}</p>
			<p>Email:{email}</p>
			<hr></hr>
			{/* <p>Total Number of Posts:</p>
			<p>Total Number of Likes:</p> */}
		</div>
	);
};

export default UnUsuario;
