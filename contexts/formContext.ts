import React from "react";

interface FormContext {
	type: string;
}

const FormContext = React.createContext<FormContext>({ type: "" });

export default FormContext;
