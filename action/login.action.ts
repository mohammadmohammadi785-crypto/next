import z from "zod";
type formstate = {
  errors?: {
    email: string[];
    password: string[];
  };
  message?: string;
  state?: boolean;
};
export function login(_prevstate: unknown, formdata: FormData) {
  const formschema = z.object({
    email: z.string().min(5, "Please enter a valid email address"),
    password: z
      .string()
      .min(6, "the lenght of password must be at least 6 charecters"),
  });
  const validateData = formschema.safeParse({
    email: formdata.get("email"),
    password: formdata.get("password"),
  });
  if (!validateData.success) {
    return {
      state: false,
      message: "somthing went wrong with data validated",
      errors: validateData.error.flatten().fieldErrors,
    };
  }
  return {
    state: true,
    message: "form submited successfully",
  };
}
