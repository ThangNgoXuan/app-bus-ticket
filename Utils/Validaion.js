import * as yup from "yup";

const regexPhone = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;

export const loginValidationSchema = yup.object().shape({
  phone: yup
    .string()
    .required("Vui lòng nhập số điện thoại")
    .matches(regexPhone, "Số điện thoại không hợp lệ"),
  password: yup.string().required("Vui lòng nhập mật khẩu"),
});

export const signUpValidationSchema = yup.object().shape({
  phone: yup
    .string()
    .required("Vui lòng nhập số điện thoại")
    .matches(regexPhone, "Số điện thoại không hợp lệ"),
  password: yup.string().required("Vui lòng nhập mật khẩu"),
});

export const booking = yup.object().shape({
  start: yup.string().required("Vui lòng chọn điểm đi"),
  end: yup.string().required("Vui lòng chọn điểm đến"),
  seetNumber: yup.number().required("Vui lòng nhập số ghế"),
});
