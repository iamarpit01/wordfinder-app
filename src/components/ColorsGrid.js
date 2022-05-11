import React from 'react';
import { connect } from 'react-redux'; 
import styled from 'styled-components'

const ColorsGridRow = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin: 30px 0;
`
const ColorsGridColWrapper = styled.div`
    background-color: ${props => props.background};
    width: calc(100% / 5 - 30px);
    margin: 15px;

    @media (max-width: 1199px){
        width: calc(100% / 4 - 30px);
    }
    
    @media (max-width: 991px){
        width: calc(100% / 3 - 30px);
    }
    
    @media (max-width: 767px){
        width: calc(100% / 2 - 30px);
    }


    .color-block {
        width: 100%;
        height: 150px;
    }
`

const Loader = styled.div`
    margin: 15px 0;
    text-align: center;
`

const Error = styled.div`
    margin: 15px auto;
    text-align: center;
    background: red;
    color: #FFFFFF;
    padding: 5px 10px;
    border-radius: 3px;
    width: 300px;
`

function ColorsGridCol({color}) {
    return (
        <ColorsGridColWrapper className='colors-grid-col'>
            <span>{color.hex}</span>
            <div className='color-block' style={{background: color.hex}}></div>
        </ColorsGridColWrapper>
    )
}

function ColorsGrid(props) {
    const {colorsList, loading, error} = props;
    return (
        <div>
            { error ? (
                <Error>{error}</Error>
            ) : loading ? (
                <Loader>Loading...</Loader>
            ) : (
                <ColorsGridRow>
                    { colorsList.map(color => {
                        return <ColorsGridCol key={color.name} color={color} />
                        })
                    }
                </ColorsGridRow>
            )
        }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        colorsList: state.colors.colorsList,
        error: state.colors.error,
        loading: state.colors.loading    
    }
}

export default connect(
    mapStateToProps,
    null
  )(ColorsGrid);