import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Input, TextField } from "@mui/material";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";

import * as Styled from "./styled";

export const TitleAndDescriptionForm: React.FC = () => {
  const [formDisabled, setFormDisabled] = useState<boolean>(true);

  const schema = yup
    .object({
      title: yup.string().required("Required"),
      description: yup.string()
    })
    .required();

  const { control, formState, handleSubmit } = useForm({ resolver: yupResolver(schema) });

  const handleClick = (): void => {
    setFormDisabled(!formDisabled);
  };

  const onSubmit = (data: any): void => {
    console.log(data);
    setFormDisabled(true);
  };

  return (
    <>
      <Styled.Form component='form'>
        <Controller
          name='title'
          control={control}
          defaultValue='New presentation'
          render={({ field: { onChange, value } }) => (
            <Input onChange={onChange} value={value} disableUnderline disabled={formDisabled} error={!!formState.errors["title"]} />
          )}
        />

        <Controller
          name='description'
          control={control}
          defaultValue=''
          render={({ field: { value, onChange } }) => (
            <TextField
              value={value}
              onChange={onChange}
              multiline
              rows={4}
              placeholder='Description'
              disabled={formDisabled}
              error={!!formState.errors["description"]}
            />
          )}
        />
      </Styled.Form>
      {/* TODO: replace with proper icon button, when branch JI:759433 P2022-465 will be merged */}
      <Button onClick={handleClick}>Edit</Button>
      {!formDisabled && <Button onClick={handleSubmit(onSubmit)}>Submit</Button>}
    </>
  );
};
