import { Response } from "express";

type MockResponse<TResult> = Response &{ //Criado um mock de tipo
    state: {
        status?: number,
        json?: TResult | unknown
    }
}


export function makeMockeResponse<TResult> () { //Criado função de mock que retorna o response.
    const response = {
        state: {}
    } as MockResponse<TResult>

    response.status = (status: number) =>{
        response.state.status = status
        return response
    }

    response.json = (json: TResult) =>{
        response.state.json = json
        return response
    }

    return response
    
}