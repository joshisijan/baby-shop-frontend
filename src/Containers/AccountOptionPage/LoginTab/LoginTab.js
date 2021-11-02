import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import appDetail from '../../../constants/appDetail'
import SecondaryTextButton from '../../../Components/Button/SecondaryTextButton'
import { login } from '../../../features/login/loginAction'
import { useHistory } from 'react-router-dom'
import FadeTransition from '../../../Components/Transition/FadeTransition'

const LoginTab = () => {
    const dispatch = useDispatch();
    const loginState = useSelector(state => state.login); //getting login state
    const history = useHistory();
    // using register for form in login so that it doesnot match with
    // login function from login action thunk
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = (formData) => {
        dispatch(login({ formData, history }));
    }

    // scroll to top
    const gotoTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // generate error list from response map of array within object
    const authErrorGenerator = (errorObject) => {
        gotoTop();
        return (
            <div className="mt-6 px-6">
                <div className="font-bold text-red-600 text-xs">
                    Following error occurred:
                </div>
                <ul className="text-red-600 font-semibold text-xs list-disc">
                    {
                        Object.keys(errorObject).map((errorKey, index) => {
                            return errorObject[errorKey].map((error, secondIndex) => {

                                return <li key={`${index}${secondIndex}`}>{error}</li>
                            });
                        })
                    }
                </ul>
            </div>
        );
    }
    return (
        <div>
            <h1 className="font-semibold">Welcome back!</h1>
            <p className="text-xs">
                {appDetail.appShortDescription}
            </p>
            <FadeTransition show={loginState.error !== null}>
                {loginState.error !== null ? authErrorGenerator(loginState.error) : null}
            </FadeTransition>
            <form className="mt-6 flex flex-col gap-2" noValidate={true} onSubmit={handleSubmit(onSubmit)}>
                {/* email */}
                <div className="flex flex-col">
                    <label className="text-sm font-medium" htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        className={`${errors.email && 'border-red-600 focus:border-red-600'}`}
                        {...register("email", {
                            required: "Required",
                        })}
                    />
                    {errors.email && <p className="text-sm text-red-600">{errors.email.message}</p>}
                </div>
                {/* password */}
                <div className="flex flex-col">
                    <label className="text-sm font-medium" htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        className={`${errors.password && 'border-red-600 focus:border-red-600'}`}
                        {...register("password", {
                            required: "Required",
                        })}
                    />
                    {errors.password && <p className="text-sm text-red-600">{errors.password.message}</p>}
                </div>
                <SecondaryTextButton isLoading={loginState.isLoading} loadingText="Logging in..." type="submit">Login</SecondaryTextButton>
            </form>
        </div>
    )
}

export default LoginTab
