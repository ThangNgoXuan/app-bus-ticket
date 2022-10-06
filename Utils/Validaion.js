import * as yup from "yup";

const regexPhone = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;
const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

export const loginValidationSchema = yup.object().shape({
  phone: yup
    .string()
    .required("Vui lòng nhập số điện thoại")
    .matches(regexPhone, "Số điện thoại không hợp lệ"),
  password: yup.string().required("Vui lòng nhập mật khẩu"),
});

export const signUpValidationSchema = yup.object().shape({
  name: yup.string().required("Vui lòng nhập tên"),
  phone: yup
    .string()
    .required("Vui lòng nhập số điện thoại")
    .matches(regexPhone, "Số điện thoại không hợp lệ"),
  password: yup.string().required("Vui lòng nhập mật khẩu"),
});

export const bookingValidationSchema = yup.object().shape({
  start: yup.string().required("Vui lòng chọn điểm đi"),
  end: yup.string().required("Vui lòng chọn điểm đến"),
  date: yup.date().required("Vui lòng chọn ngày"),
  sheetTotal: yup.number().required("Vui lòng nhập số ghế"),
});

export const bookingInfoValidationSchema = yup.object().shape({
  phone: yup
    .string()
    .required("Vui lòng nhập số điện thoại")
    .matches(regexPhone, "Số điện thoại không hợp lệ"),
  name: yup.string().required("Vui lòng nhập tên"),
  email: yup
    .string()
    .required("Vui lòng nhập email")
    .matches(regexEmail, "Email không hợp lệ"),
});


export const chooseSeetValidationSchema = yup.object().shape({
  timeStart: yup.string().required("Vui lòng chọn giờ đi"),
  seetNumber: yup.string().required("Vui lòng chọn ghế")
});
