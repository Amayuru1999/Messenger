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
        <div>
            <h1>AuthForm</h1>
        </div>
    )
}

export default AuthForm