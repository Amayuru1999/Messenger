'use client'
import {useCallback, useState} from "react";

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

    return(
        <div>
            <h1>AuthForm</h1>
        </div>
    )
}

export default AuthForm