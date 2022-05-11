import React, { useState} from "react";
import styled from "styled-components";
import { fetchColors } from "../redux/colors.actions";
import Button from "../shared/Button";
import Input from "../shared/Input";
import { connect } from "react-redux";

const H1 = styled.h1`
    margin: 30px 0 15px 0;
    font-size: '24px!important';
    color : ${props => props.primary ? '#333333': '#CCCCCC'};
    font-size: ${props => props.lg ? '30px' : '28px'};
`;

function ColorForm(props) {
        const [word, setWord] = useState("")

        const onChangeInput = e => {
            setWord(e.target.value);
        }

        const onFormSubmit = evt => {
            evt.preventDefault();
            props.fetchColors(word);
        }

        return (
            <>
                <H1 primary>Color A Word</H1>  
                <form onSubmit={onFormSubmit}
                      className="form-inline d-flex justify-content-center">
                    <Input
                        onChange={onChangeInput}
                        inputWrapperClass="form-group"
                        type="text"
                        value={word}
                        placeholder="Type words"
                        className="form-control"
                        />
                    <Button 
                        primary
                        type="submit"
                        className="btn ml-2">Search</Button>
                </form>
            </>
        )
}

const mapStateToProps = state => {
    return {
        colorsList: state.colors.colorsList
    }
}

const mapDispatchToProps = dispatch => {
    return {
      fetchColors: word => {
        dispatch(fetchColors(word));
      }
    };
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ColorForm)