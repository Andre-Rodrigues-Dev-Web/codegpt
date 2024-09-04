import styled from 'styled-components'

const ContainerTopo = styled.header<{ bgColor?: string }>`
    background-color: ${({ bgColor, theme }) => bgColor || theme.colors.primary};
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    padding: 0.78em 1em;
`;

const Logo = styled.div`
    width: clamp(8.125rem, 10vw + 6.25rem, 13.75rem);
    a{
        h1{
            color: #fff;
            span{
                color: #2DC88F;
                text-transform: uppercase;
            }
        }
    }
`;

const Actions  = styled.div`
    display: flex;
    align-items: center;
    gap: 1em;
    width: clamp(18.75rem, 22.222vw + 14.583rem, 31.25rem);
`;

export {
    Actions,
    ContainerTopo,
    Logo
}