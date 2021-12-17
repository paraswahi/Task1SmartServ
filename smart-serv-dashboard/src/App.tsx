import './App.css'
import logo from './logo.png'

function App() {
	// regex with at least one upper letter and one number and @
	// const exp = //
	return (
		<div>
			{/* black background div */}
			<div className='bg-black'>
				{/* div with class centered*/}
				<div className='centered'>
					{/* logo */}
					<div className='inner'>
						<div className='logo'>
							<img src={logo} alt='logo' />
						</div>
						<div className='form'>
							<form
								onSubmit={(e) => {
									e.preventDefault()
								}}
							>
								{/* input email with div */}
								<div className='input-elem input-email'>
									<input required type='text' placeholder='Username' />
								</div>
								{/* input password with div*/}
								<div className='input-elem input-password'>
									<input required type='password' placeholder='Password' pattern='^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$' />
								</div>
								{/* submit with input with div */}
								<div className='submit'>
									<input className='submit-button' type='submit' value='Login' />
								</div>
							</form>
						</div>
						{/* gray underlined text */}
						<div className='gray-text'>
							<p>Forgot your password?</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default App
