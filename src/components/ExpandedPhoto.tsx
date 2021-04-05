import React from 'react';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';

const Expand = styled.div`
    background-color: rgba(255,255,255,0.5);
    width: 100vw;
    height: 100vh;
    position: sticky;
    top: 0;
    left: 0;
`

interface Props{};

export const ExpandedPhoto: React.FC<Props> = ({}) => {

return(
    <Expand>
        <Button variant='danger'>
            X
        </Button>

    </Expand>
);

};