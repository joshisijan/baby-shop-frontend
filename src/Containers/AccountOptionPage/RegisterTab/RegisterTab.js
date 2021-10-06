import React from 'react'
import { useForm, useWatch } from 'react-hook-form'
import appDetail from '../../../constants/appDetail'
import SecondaryTextButton from '../../../Components/Button/SecondaryTextButton'

const RegisterTab = () => {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors }
    } = useForm();

    const curentPassword = useWatch({
        control,
        name: 'password',
        defaultValue: "",
    });

    const onSubmit = (data) => {
        console.log(data);
        console.log(errors);
    }

    return (
        <div>
            <h1 className="font-semibold">Welcome to {appDetail.appName}!</h1>
            <p className="text-xs">
                {appDetail.appShortDescription}
            </p>
            <form className="mt-6 flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
                {/* first name */}
                <div className="flex flex-col">
                    <label className="text-sm font-medium" htmlFor="firstName">First name:</label>
                    <input
                        type="text"
                        id="firstName"
                        className={`${errors.firstName && 'border-red-600 focus:border-red-600'}`}
                        {...register("firstName", {
                            required: "Required",
                        })}
                    />
                    {errors.firstName && <p className="text-sm text-red-600">{errors.firstName.message}</p>}
                </div>
                {/* last name */}
                <div className="flex flex-col">
                    <label className="text-sm font-medium" htmlFor="lastName">Last name:</label>
                    <input
                        type="text"
                        id="lastName"
                        className={`${errors.lastName && 'border-red-600 focus:border-red-600'}`}
                        {...register("lastName", {
                            required: "Required",
                        })}
                    />
                    {errors.lastName && <p className="text-sm text-red-600">{errors.lastName.message}</p>}
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
                            minLength: {
                                value: 8,
                                message: "must be at least 8 character long"
                            },
                        })}
                    />
                    {errors.password && <p className="text-sm text-red-600">{errors.password.message}</p>}
                </div>
                {/* confirm password */}
                <div className="flex flex-col">
                    <label className="text-sm font-medium" htmlFor="confirmPassword">Confirm password:</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        className={`${errors.confirmPassword && 'border-red-600 focus:border-red-600'}`}
                        {...register("confirmPassword", {
                            required: "Required",
                            validate: value => value === curentPassword || "Passwords do not match",

                        })}
                    />
                    {errors.confirmPassword && <p className="text-sm text-red-600">{errors.confirmPassword.message}</p>}
                </div>
                <SecondaryTextButton type="submit">Create account</SecondaryTextButton>
            </form>
        </div>
    )
}

export default RegisterTab
