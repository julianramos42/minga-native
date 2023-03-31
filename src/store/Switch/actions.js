import { createAction } from "@reduxjs/toolkit";

let switchActions = createAction(
    'switchActions',
    ({checked}) => {
        return{
            payload: {
                checked: checked
            }
        }
    }
)

const checkActions = { switchActions }
export default checkActions