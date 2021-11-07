import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useForm, useWatch } from 'react-hook-form'
import appDetail from '../../../constants/appDetail'
import SecondaryTextButton from '../../../Components/Button/SecondaryTextButton'
import { emailRegExp, nameRegExp, passwordRegExp, phoneRegExp, usernameRegExp } from '../../../constants/regExp'
import { registration } from '../../../features/registration/registrationAction'
import { useHistory } from 'react-router-dom'
import FadeTransition from '../../../Components/Transition/FadeTransition'
const RegisterTab = () => {
    const dispatch = useDispatch();
    const registrationState = useSelector(state => state.registration);
    const history = useHistory();
    const {
        register,
        handleSubmit,
        control,
        formState: { errors }
    } = useForm();

    const curentPassword = useWatch({
        control,
        name: 'password1',
        defaultValue: "",
    });

    const onSubmit = (formData) => {
        dispatch(registration({ formData, history }));
    }

    const authErrorGenerator = (errorObject) => {
        return (
            <div className="py-4 px-6 bg-red-50 border border-red-600 rounded-lg">
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
            {/* loading indicator */}
            <h1 className="font-semibold">Welcome to {appDetail.appName}!</h1>
            <p className="text-xs">
                {appDetail.appShortDescription}
            </p>
            <form noValidate={true} className="mt-6 flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
                <div className="grid gap-2 grid-cols-2">
                    {/* first name */}
                    <div className="flex flex-col">
                        <label className="text-sm font-medium" htmlFor="first_name">First name:</label>
                        <input
                            type="text"
                            id="first_name"
                            className={`${errors.first_name && 'border-red-600 focus:border-red-600'}`}
                            {...register("first_name", {
                                required: "Required",
                                pattern: {
                                    value: nameRegExp,
                                    message: "Invalid first name",
                                },
                            })}
                        />
                        {errors.first_name && <p className="text-sm text-red-600">{errors.first_name.message}</p>}
                    </div>
                    {/* last name */}
                    <div className="flex flex-col">
                        <label className="text-sm font-medium" htmlFor="last_name">Last name:</label>
                        <input
                            type="text"
                            id="last_name"
                            className={`${errors.last_name && 'border-red-600 focus:border-red-600'}`}
                            {...register("last_name", {
                                required: "Required",
                                pattern: {
                                    value: nameRegExp,
                                    message: "Invalid last name",
                                },
                            })}
                        />
                        {errors.last_name && <p className="text-sm text-red-600">{errors.last_name.message}</p>}
                    </div>
                </div>
                {/* username */}
                <div className="flex flex-col">
                    <label className="text-sm font-medium" htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        className={`${errors.username && 'border-red-600 focus:border-red-600'}`}
                        {...register("username", {
                            required: "Required",
                            minLength: {
                                value: 8,
                                message: 'Must be more than 8 character long'
                            },
                            maxLength: {
                                value: 20,
                                message: 'Must not be more than 20 character long'
                            },
                            pattern: {
                                value: usernameRegExp,
                                message: 'Invalid username',
                            }
                        })}
                    />
                    {errors.username && <p className="text-sm text-red-600">{errors.username.message}</p>}
                </div>
                {/* email */}
                <div className="flex flex-col">
                    <label className="text-sm font-medium" htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        className={`${errors.email && 'border-red-600 focus:border-red-600'}`}
                        {...register("email", {
                            required: "Required",
                            pattern: {
                                value: emailRegExp,
                                message: "Invalid email address",
                            }
                        })}
                    />
                    {errors.email && <p className="text-sm text-red-600">{errors.email.message}</p>}
                </div>
                {/* phone number */}
                <div className="flex flex-col">
                    <label className="text-sm font-medium" htmlFor="phone_number">Phone number:</label>
                    <input
                        type="number"
                        id="phone_number"
                        className={`${errors.phone && 'border-red-600 focus:border-red-600'}`}
                        {...register("phone_number", {
                            required: "Required",
                            pattern: {
                                value: phoneRegExp,
                                message: "Invalid phone number",
                            },
                        })}
                    />
                    {errors.phone_number && <p className="text-sm text-red-600">{errors.phone_number.message}</p>}
                </div>
                {/* password */}
                <div className="flex flex-col">
                    <label className="text-sm font-medium" htmlFor="password1">Password:</label>
                    <input
                        type="password"
                        id="password1"
                        className={`${errors.password && 'border-red-600 focus:border-red-600'}`}
                        {...register("password1", {
                            required: "Required",
                            pattern: {
                                value: passwordRegExp,
                                message: "Must have at least 8 characters, at least one capital letter, one number and one symbol (#?!@$%^&*-)"
                            },
                        })}
                    />
                    {errors.password1 && <p className="text-sm text-red-600">{errors.password1.message}</p>}
                </div>
                {/* confirm password */}
                <div className="flex flex-col">
                    <label className="text-sm font-medium" htmlFor="password2">Confirm password:</label>
                    <input
                        type="password"
                        id="password2"
                        className={`${errors.password2 && 'border-red-600 focus:border-red-600'}`}
                        {...register("password2", {
                            required: "Required",
                            validate: value => value === curentPassword || "Passwords do not match",

                        })}
                    />
                    {errors.password2 && <p className="text-sm text-red-600">{errors.password2.message}</p>}
                </div>                
                <FadeTransition show={ Object.keys(errors).length > 0 }>{/* show when error occur on front side */}
                    <div className="py-4 px-6 bg-red-50 border border-red-600 rounded-lg">
                        <div className="font-bold text-red-600 text-xs">
                            Fix all errors first to create account.
                        </div>
                    </div>
                </FadeTransition>
                <FadeTransition show={registrationState.error !== null}>
                    {registrationState.error !== null ? authErrorGenerator(registrationState.error) : null}
                </FadeTransition>
                <SecondaryTextButton isLoading={registrationState.isLoading} loadingText="Registration..." type="submit">Create account</SecondaryTextButton>
            </form>
        </div>
    )
}

export default RegisterTab
