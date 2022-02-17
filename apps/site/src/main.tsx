import "./i18n";

import { Form, FormTextField, ThemeProvider } from "@patronage-web/shared";
import { t } from "i18next";
import { StrictMode } from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import * as yup from "yup";

import { Routing } from "./app";

ReactDOM.render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <Routing />
        <Form
          formElements={[
            <FormTextField key='1' fieldName='title' defaultValue={t("newPresentation")} margin='dense' />,
            <FormTextField key='2' fieldName='description' defaultValue={t("description")} variant='outlined' margin='dense' />,
            <FormTextField key='3' fieldName='last' defaultValue='last' variant='standard' margin='dense' />
          ]}
          validationSchema={{ title: yup.string().required(`* ${t("missingTitleError")}`), description: yup.string() }}
        />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
  document.getElementById("root")
);
