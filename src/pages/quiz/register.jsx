import RegisterForm from "../../components/quiz/register/RegisterForm"

const RegisterPage = () => {
  return (
    <div className="quiz-wrapper d-flex justify-content-center align-items-center p-3 px-md-5">
      <div className="container position-relative">
        <div className="row form-wrapper h-100">
            <div className="col-lg-6 col-md-12 p-0">
                <RegisterForm />
            </div>
            <div className="col-lg-6 col-md-12 d-lg-block d-none p-0">
              <div className="img-wrapper h-100 position-relative">
                <img src={require("../../assets/img/register.jpg")} className="right h-100 position-absolute w-100" alt="" />
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage
