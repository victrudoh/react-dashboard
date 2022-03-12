import styled from 'styled-components'

export const Container = styled.div`

    text-align: left;
    z-index: 100;

    label {
        font-size: 11px;
        text-align: left;
        color: gray;
    }

    select {
        border-radius: 5px;
        padding: 0.5rem;
        color: gray;
        font-size: 13px;

        &:focus {
            outline: none;
        }
    }
`;