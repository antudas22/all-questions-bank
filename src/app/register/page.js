import RegisterForm from "./RegisterForm";

export const metadata = {
    title: "Register - AQB"
}

const RegisterPage = () => {

    return (
        <div className="flex justify-center">

      {/* Login Form */}

        <RegisterForm />
      
    </div>
    );
};

export default RegisterPage;