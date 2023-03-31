import { createAction } from "@reduxjs/toolkit";

let logoutReload = createAction(
    'logoutReload',
    ({ state }) => {
        return {
            payload: {
                state: state
            }
        }
    }
)

const logoutActions = { logoutReload }
export default logoutActions