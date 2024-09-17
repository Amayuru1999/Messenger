'use client'
import {useCallback, useState} from "react";
import {FieldValue, FieldValues, SubmitHandler, useForm} from "react-hook-form";

type Variant = 'LOGIN' | 'REGISTER'

const AuthForm = () =>{

    const [variant,setVariant]=useState<Variant>('LOGIN')
    const [isLoading,setIsLoading]=useState(false)

    const toggleVariant = useCallback(()=>{
        if(variant === 'LOGIN') {
            setVariant('REGISTER')
        }else{
            setVariant('LOGIN')
        }
    },[variant])

    const {
        register,
        handleSubmit,
        formState:{errors},
    } = useForm<FieldValues>({
        defaultValues:{
            name:'',
            email:'',
            password:'',
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true)
        if(variant === 'LOGIN') {
            console.log('Logging in with', data)
        }
        if(variant === 'REGISTER') {
            console.log('Registering with', data)
        }
    }

    const socialAction = (action:string) =>{
        setIsLoading(true)

        //NextAuth social sign in
    }

    return(
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white px-4 py-8 sm:rounded-lg sm:px-10">
                <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>

                </form>

            </div>
        </div>
    )
}

export default AuthForm