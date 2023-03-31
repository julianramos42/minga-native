import { createAction } from "@reduxjs/toolkit"

const open = createAction(
    'open',
    ({ icon, text }) => {
        return {
            payload: {
                icon,
                text,
                visible: true
            }
        }
    }
)

const close = createAction(
    'close',
    ({ icon, text }) => {
        return {
            payload: {
                icon,
                text,
                visible: false
            }
        }
    }
)

const alertActions = { open, close }
export default alertActions