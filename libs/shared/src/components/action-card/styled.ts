import {
  Box as MUIBox,
  Button as MUIButton,
  ButtonProps,
  Card as MUICard,
  CardMedia as MUICardMedia,
  CardMediaProps,
  Typography as MUITypography
} from "@mui/material";
import styled from "styled-components";

export const Card: React.FC = styled(MUICard)`
  && {
    display: flex;
    flex-flow: column wrap;
    border-radius: 8px;
    justify-content: space-between;
    background-color: #f7f7f7;

    /* TODO when theme config will be applied - replace with theme breakpoints*/
    @media (min-width: 600px) {
      flex-direction: row;
      flex-wrap: nowrap;
      margin: 88px 0px;
      max-width: 736px;
    }

    /* TODO when theme config will be applied - replace with theme breakpoints*/
    @media (min-width: 900px) {
      min-width: 736px;
      justify-content: center;
    }
  }
`;

export const Box: React.FC = styled(MUIBox)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px 8px;

  /* TODO when theme config will be applied - replace with theme breakpoints*/
  @media (min-width: 600px) {
    padding: 24px 40px;
  }
`;

export const Typography: React.FC = styled(MUITypography)`
  text-align: justify;

  /* TODO when theme config will be applied - replace with theme breakpoints*/
  @media (min-width: 600px) {
    max-width: 400px;
  }

  /* TODO when theme config will be applied - replace with theme breakpoints*/
  @media (min-width: 900px) {
    width: 400px;
    padding: 8px 0 0 0;
  }
`;

export const Button: React.FC<ButtonProps> = styled(MUIButton)`
  && {
    width: 174px;
    height: 40px;
    padding: 8px 16px;
    font-size: 16px;
    align-self: center;
    border-radius: 8px;
    text-transform: none;
    margin-top: 16px;
    background-color: #515151;

    :hover {
      background-color: black;
    }

    /* TODO when theme config will be applied - replace with theme breakpoints*/
    @media (min-width: 600px) {
      align-self: flex-end;
      margin-top: 0;
    }
  }
`;

export const CardMedia: React.FC<CardMediaProps> = styled(MUICardMedia)`
  && {
    width: 100%;
    height: 176px;

    /* TODO when theme config will be applied - replace with theme breakpoints*/
    @media (min-width: 600px) {
      max-width: 40%;
    }
  }
`;
