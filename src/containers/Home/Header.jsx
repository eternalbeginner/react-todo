import { Title } from '../../components';

const Header = () => {
	return (
		<header className='header'>
			<Title
				name='header'
				heading='Todo App'
				description='What do you want to do today?'
			/>
		</header>
	);
};

export default Header;
