import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// 화면의 중앙에 위치시킨다
const Positioner = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

// 너비, 그림자 설정
const ShadowedBox = styled.div`
    width: 500px;
`;

// 로고
const LogoWrapper = styled.div`
    background: lightgray;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Logo = styled(Link)`
    color: white;
    font-family: 'Rajdhani';
    font-size: 2.4rem;
    letter-spacing: 5px;
    text-decoration: none;
`;

// children 이 들어가는 곳
const Contents = styled.div`
    background: #e8e8e8;
    padding: 2rem;
    height: auto;
`;

const AuthWrapper = (props) => (
    <Positioner>
        <ShadowedBox>
            <LogoWrapper>
                <Logo to="/">로그인/회원가입</Logo>
            </LogoWrapper>
            <Contents>
                {console.log(props)}
                {props.children}
            </Contents>
        </ShadowedBox>
    </Positioner>
);

export default AuthWrapper;