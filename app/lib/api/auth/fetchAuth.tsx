import {ObjLogin} from "@/app/types";
import {LoginResponse } from "@/app/types";
import {ObjCompanyRegister} from "@/app/types";
import {ObjCompanyRegisterResponse} from "@/app/types";
import {ObjUserRegister} from "@/app/types";
import {ObjUserRegisterResponse} from "@/app/types";



export async function fetchLogin(obj:ObjLogin) {
    const resp = await fetch(`http://127.0.0.1:8000/login`, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj),
    })

    const data:LoginResponse = await resp.json()
    //console.log(data)
    return data
}

export async function fetchUserRegister(obj:ObjUserRegister) {
    const resp = await fetch(`http://127.0.0.1:8000/login`, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj),
    })

    const data:ObjUserRegisterResponse = await resp.json()
    //console.log(data)
    return data
}

export async function fetchCompanyRegister(obj:ObjCompanyRegister) {
    const resp = await fetch(`http://127.0.0.1:8000/login`, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj),
    })

    const data:ObjCompanyRegisterResponse = await resp.json()
    //console.log(data)
    return data
}