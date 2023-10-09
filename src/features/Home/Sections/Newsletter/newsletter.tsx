
import React from 'react';
import { Caption, Input, SendForm, SubButton, Wrapper } from './styledNewsletter';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Newsletter = () => {

    const notify = () => toast.success("Thank you for your subscription");

    return (
        <Wrapper>
            <Caption>SUBSCRIBE TO THE NEWSLETTER AND RECEIVE MONEY</Caption>
            <SendForm>
                <Input placeholder='E-Mail' />
                <SubButton onClick={notify}>Subscribe</SubButton>
                <ToastContainer
                    position="bottom-left"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover={false}
                    theme="dark"
                />
            </SendForm>
        </Wrapper>
    );
};

