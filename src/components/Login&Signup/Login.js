import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../features/userSlice';
import { auth } from '../Firebase/Firebase';
import './Login.css';


const Login = () => {
	//states//
	const [name, setName] = useState('');
	const [profilePic, setProfilepic] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
    const dispatch = useDispatch();

	const loginToApp = (e) => {
		e.preventDefault();
		auth
			.signInWithEmailAndPassword(email,password)
			.then((userAuth) =>{

				dispatch(login(
					{
						email:userAuth.user.email,
						uid:userAuth.user.uid,
						displayName:userAuth.user.displayName,
						profileUrl:userAuth.user.photoUrl
					}
				))
			} )
			.catch((error)=> {
				alert(error)  
			console.log(error)

			})
		
	};
	const register = () => {
        
        if(!name){
            return alert('Please enter a full name')
        }

        auth.createUserWithEmailAndPassword(email,password).then(
            (userAuth)=>{
                userAuth.user.updateProfile({
                    displayName:name,
                    photoURL: profilePic,
                })
                .then(()=>{
                    dispatch(
                        login({
                            email:userAuth.user.email,
                            uid:userAuth.user.uid,
                            displayName: name,
                            photoUrl: profilePic
                        })
                    )
                })
            }
        ).catch(error => alert(error) )
    };

	return (
		<div className='login'>
			<img
				src='https://www.vectorlogo.zone/logos/linkedin/linkedin-ar21.svg'
				alt=''
			/>

			<form>
				<input
					type='text'
					value={name}
					onChange={(e) => setName(e.target.value)}
					placeholder='Full name (required if registering)'
				/>
				<input
					type='text'
					value={profilePic}
					onChange={(e) => setProfilepic(e.target.value)}
					placeholder='Placeholder pic URL (optional)'
				/>
				<input
					type='email'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					placeholder='Email'
				/>
				<input
					type='password'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					placeholder='Password'
				/>
				<button type='submit' onClick={loginToApp}>
					Sign In
				</button>
			</form>
			<p>
				Not a memeber?{' '}
				<span className='login__regitser' onClick={register}>
					Register Now !
				</span>
			</p>
		</div>
	);
};

export default Login;
