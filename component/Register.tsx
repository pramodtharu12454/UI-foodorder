"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

interface RegisterFormValues {
  username: string;
  email: string;
  phone: string;
  address: string;
  dob: string;
  gender: string;
  password: string;
}

const initialValues: RegisterFormValues = {
  username: "",
  email: "",
  phone: "",
  address: "",
  dob: "",
  gender: "",
  password: "",
};

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string()
    .matches(/^[0-9]{10,15}$/, "Enter valid phone")
    .required("Phone is required"),
  address: Yup.string().required("Address is required"),
  dob: Yup.string().required("Date of Birth is required"),
  gender: Yup.string()
    .oneOf(["male", "female", "other"], "Select gender")
    .required("Gender is required"),
  password: Yup.string()
    .min(6, "Min 6 characters")
    .required("Password is required"),
});

const RegisterForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (values: RegisterFormValues) => {
    console.log("Register submitted:", values);
  };

  return (
    <div className="max-w-lg mx-auto mt-16 p-8 bg-white rounded-2xl shadow-xl shadow-[rgba(0,0,0,0.1)]">
      <h2 className="text-2xl font-bold text-center mb-6">Register</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="space-y-5">
          <div>
            <label className="block mb-1 font-medium">Username</label>
            <Field
              name="username"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            <ErrorMessage
              name="username"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Email</label>
            <Field
              name="email"
              type="email"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Phone</label>
            <Field
              name="phone"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            <ErrorMessage
              name="phone"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Address</label>
            <Field
              name="address"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            <ErrorMessage
              name="address"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Date of Birth</label>
            <Field
              name="dob"
              type="date"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            <ErrorMessage
              name="dob"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Gender</label>
            <Field
              as="select"
              name="gender"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </Field>
            <ErrorMessage
              name="gender"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Password</label>
            <div className="relative">
              <Field
                name="password"
                type={showPassword ? "text" : "password"}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 pr-10"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 cursor-pointer"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </span>
            </div>
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Register
          </button>
          <p className="text-center text-sm text-gray-600 mt-4">
            Already have an account?{" "}
            <a href="/Login" className="text-blue-600 hover:underline">
              Login
            </a>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default RegisterForm;
