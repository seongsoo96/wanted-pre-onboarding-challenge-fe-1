import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthWrapper } from '../components/Auth';
import { Join, Login } from '../containers/Auth';

class Auth extends Component {
    // // 페이지에 진입 할 때 헤더를 비활성화
    // componentWillMount() {
    //     this.props.BaseActions.setHeaderVisibility(false);
    // }

    // // 페이지에서 벗어 날 때 다시 활성화
    // componentWillUnmount() {
    //     this.props.BaseActions.setHeaderVisibility(true);
    // }

    render() {
        return (
            <AuthWrapper>
                <Routes>
                    <Route path="/auth/login" element={<Login />} />
                    <Route path="/auth/join" element={<Join />} />
                </Routes>
            </AuthWrapper>
        );
    }
}

export default Auth;