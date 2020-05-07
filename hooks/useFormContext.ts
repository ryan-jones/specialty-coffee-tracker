import React, { useContext } from "react";
import FormContext from "../contexts/formContext";

export default function useFormContext() {
	return useContext(FormContext);
}
