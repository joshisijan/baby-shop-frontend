import React from 'react'
import { useForm } from 'react-hook-form'
import appDetail from '../../../constants/appDetail'
import SecondaryTextButton from '../../../Components/Button/SecondaryTextButton'

const LoginTab = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        console.log(errors);
    }

    return (
        <div>
            <h1 className="font-semibold">Welcome back!</h1>
            <p className="text-xs">
                {appDetail.appShortDescription}
            </p>
            <form className="mt-6 flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
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
                <SecondaryTextButton type="submit">Login</SecondaryTextButton>
            </form>
        </div>
    )
}

export default LoginTab
