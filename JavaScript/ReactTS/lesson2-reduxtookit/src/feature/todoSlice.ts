import { PayloadAction, createSlice } from "@reduxjs/toolkit";


interface todoType{
    id:string,
    title:string
}

const todoList:todoType[] = [


    
];


const todoSlice = createSlice({
    name:"todos",
    initialState:todoList,
    reducers:{
        add:(state,action:PayloadAction<string>)=>{
            const newTodo = {id:crypto.randomUUID(),title:action.payload}
            state.push(newTodo);
        },
        remove:(state,action:PayloadAction<string>)=>(
            state.filter((item:any)=>{
                return item.id !== action.payload
            })
        )
    }
})

export default todoSlice.reducer;

export const {add,remove} = todoSlice.actions;


