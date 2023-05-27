import React, {createContext, useState} from "react";

export const CounterContext = createContext()

export const CounterProvider = ({ children }) => {
    const [count, setCount] = useState(0)
    const values = {
        count,
        suma(){
            setCount( val => val + 1 )
        },
        resta(){
            setCount( val => val - 1 )
        },
        user: {
            user: "Online",
            jwt: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsInVzZXIiOiJPbmxpbmUifQ.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.u9q_5W1PO7Ns8k0njUNEzjsUopEo2axOljUvh4jbK8I",
        }
    };
    return(
        <CounterContext.Provider value={values}>
            { children }
        </CounterContext.Provider>
    )

}