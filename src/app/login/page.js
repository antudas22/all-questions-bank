import LoginForm from './LoginForm';

export const metadata = {
    title: "Login - AQB"
}

const LoginPage = () => {

    return (
        <div className="flex justify-center">

      {/* Login Form */}

        <LoginForm />
      
    </div>
    );
};

export default LoginPage;