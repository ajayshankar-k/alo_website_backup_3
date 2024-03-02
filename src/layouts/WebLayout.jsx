import React, { Fragment } from "react"
import WebHeader from "@/layouts/utils/WebHeader"
import WebFooter from "@/layouts/utils/WebFooter"
import { ModalProvider } from "@/components/common/ModelContext"

const WebLayout = (props) => {
    return (
        <ModalProvider>
        <Fragment>
            <WebHeader />
            {props.children}
            <WebFooter />
        </Fragment>
        </ModalProvider>
    )
}
export default WebLayout;
