import React from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Register() {
  const navigate = useNavigate();

  const initialValues = {
    fullName: "",
    fatherName: "",
    email: "",
    phone: "",
    cnic: "",
    fatherCNIC: "",
    city: "",
    selectCourse: "",
    dob: "",
    gender: "",
    address: "",
    qualification: "",
    laptop: "",
  };

  const onSubmit = (values) => {
    axios
      .post("http://localhost:5000/api/register", values)
      .then((res) => {
        alert(res.data.message);
        navigate("/allUsers");
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  const validate = (values) => {
    const errors = {};
    if (!values.fullName) {
      errors.fullName = "Required";
    }
    if (!values.fatherName) {
      errors.fatherName = "Required";
    }
    if (!values.email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }
    if (!values.phone) {
      errors.phone = "Required";
    }
    if (!values.cnic) {
      errors.cnic = "Required";
    }
    if (!values.city) {
      errors.city = "Required";
    }
    if (!values.selectCourse) {
      errors.selectCourse = "Required";
    }
    if (!values.dob) {
      errors.dob = "Required";
    }
    if (!values.laptop) {
      errors.laptop = "Required";
    }
    if (!values.address) {
      errors.address = "Required";
    }
    if (!values.gender) {
      errors.gender = "Required";
    }
    if (!values.qualification) {
      errors.qualification = "Required";
    }
    return errors;
  };

  const formik = useFormik({ initialValues, onSubmit, validate });

  return (
    <div className="relative py-3 w-screen sm:mx-auto sm:max-w-full">
      <div className="relative mx-4 rounded-3xl px-4 py-8 sm:p-10 md:mx-8 lg:mx-0">
        <div className="max-w-full lg:mx-auto">
          <form action="post" onSubmit={formik.handleSubmit}>
            <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label
                  className="block pb-1 text-sm font-semibold text-blue-600"
                  for="fullName"
                >
                  Full name
                </label>
                <input
                  className="mt-1 mb-5 w-full rounded-lg border border-green-200 px-3 py-2 text-sm focus:border-blue-400"
                  type="text"
                  id="fullName"
                  placeholder="Full Name"
                  value={formik.values.fullName}
                  onChange={formik.handleChange}
                />
                {formik.errors.fullName && formik.touched.fullName && (
                  <p classNameName="text-red-700"> {formik.errors.fullName} </p>
                )}
              </div>
              <div>
                <label
                  className="font-semibold text-sm text-blue-600 pb-1 block"
                  for="fatherName"
                >
                  Father name
                </label>
                <input
                  className="mt-1 mb-5 w-full rounded-lg border border-green-200 px-3 py-2 text-sm focus:border-blue-400"
                  type="text"
                  id="fatherName"
                  placeholder="Father Name"
                  value={formik.values.fatherName}
                  onChange={formik.handleChange}
                />
                {formik.errors.fatherName && formik.touched.fatherName && (
                  <p classNameName="text-red-700">
                    {" "}
                    {formik.errors.fatherName}{" "}
                  </p>
                )}
              </div>
              <div>
                <label
                  className="font-semibold text-sm text-blue-600 pb-1 block"
                  for="email"
                >
                  Email
                </label>
                <input
                  className="mt-1 mb-5 w-full rounded-lg border border-green-200 px-3 py-2 text-sm focus:border-blue-400"
                  type="email"
                  id="email"
                  placeholder="Email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                />
                {formik.errors.email && formik.touched.email && (
                  <p classNameName="text-red-700"> {formik.errors.email} </p>
                )}
              </div>
              <div>
                <label
                  className="font-semibold text-sm text-blue-600 pb-1 block"
                  for="phone"
                >
                  Phone
                </label>
                <input
                  className="mt-1 mb-5 w-full rounded-lg border border-green-200 px-3 py-2 text-sm focus:border-blue-400"
                  type="number"
                  id="phone"
                  placeholder="Phone"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                />
                {formik.errors.phone && formik.touched.phone && (
                  <p classNameName="text-red-700"> {formik.errors.phone} </p>
                )}
              </div>
              <div>
                <label
                  className="font-semibold text-sm text-blue-600 pb-1 block"
                  for="cnic"
                >
                  CNIC
                </label>
                <input
                  className="mt-1 mb-5 w-full rounded-lg border border-green-200 px-3 py-2 text-sm focus:border-blue-400"
                  type="text"
                  id="cnic"
                  placeholder="CNIC"
                  value={formik.values.cnic}
                  onChange={formik.handleChange}
                />
                {formik.errors.cnic && formik.touched.cnic && (
                  <p classNameName="text-red-700"> {formik.errors.cnic} </p>
                )}
              </div>
              <div>
                <label
                  className="font-semibold text-sm text-blue-600 pb-1 block"
                  for="fatherCNIC"
                >
                  Father's CNIC (Optional)
                </label>
                <input
                  className="mt-1 mb-5 w-full rounded-lg border border-green-200 px-3 py-2 text-sm focus:border-blue-400"
                  type="number"
                  id="fatherCNIC"
                  placeholder="Father CNIC (Optional)"
                  value={formik.values.fatherCNIC}
                  onChange={formik.handleChange}
                />
              </div>
              <div>
                <label
                  className="font-semibold text-sm text-blue-600 pb-1 block"
                  for="city"
                >
                  Select City
                </label>
                <select
                  className="mt-1 mb-5 w-full text-gray-400 rounded-lg border border-green-200 px-3 py-2 text-sm focus:border-blue-400"
                  id="city"
                  value={formik.values.city}
                  onChange={formik.handleChange}
                >
                  {formik.errors.address && formik.touched.address && (
                    <p classNameName="text-red-700">
                      {" "}
                      {formik.errors.address}{" "}
                    </p>
                  )}
                  <option value="city">Select city</option>
                  <option value="karachi">Karachi</option>
                  <option value="lahore">Lahore</option>
                  <option value="islamabad">Islamabad</option>
                </select>
              </div>
              <div>
                <label
                  className="font-semibold text-sm text-blue-600 pb-1 block"
                  for="selectCourse"
                >
                  Select Course
                </label>
                <select
                  className="mt-1 mb-5 w-full text-gray-400 rounded-lg border border-green-200 px-3 py-2 text-sm focus:border-blue-400"
                  id="selectCourse"
                  value={formik.values.selectCourse}
                  onChange={formik.handleChange}
                >
                  <option value="course">Select course</option>
                  <option value="development">
                    Mobile and Web app development
                  </option>
                  <option value="designer">Graphic Designer</option>
                  <option value="animation">3d Animation</option>
                  <option value="IT">IT Professional</option>
                </select>
              </div>
            </div>
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label
                  className="font-semibold text-sm text-blue-600 pb-1 block"
                  for="dob"
                >
                  Date of Birth
                </label>
                <input
                  className="mt-1 mb-5 w-full rounded-lg border border-green-200 px-3 py-2 text-sm focus:border-blue-400"
                  type="date"
                  id="dob"
                  placeholder="Date of Birth"
                  value={formik.values.dob}
                  onChange={formik.handleChange}
                />
              </div>
              <div>
                <label
                  className="font-semibold text-sm text-blue-600 pb-1 block"
                  for="gender"
                >
                  Select Gender
                </label>
                <select
                  className="mt-1 mb-5 w-full text-gray-400 rounded-lg border border-green-200 px-3 py-2 text-sm focus:border-blue-400"
                  id="gender"
                  value={formik.values.gender}
                  onChange={formik.handleChange}
                >
                  <option value="gender">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            <div className="mt-5">
              <label
                className="font-semibold text-sm text-blue-600 pb-1 block"
                for="address"
              >
                Address
              </label>
              <input
                className="mt-1 mb-5 w-full rounded-lg border border-green-200 px-3 py-2 text-sm focus:border-blue-400"
                id="address"
                placeholder="Address"
                value={formik.values.address}
                onChange={formik.handleChange}
              />
              {formik.errors.address && formik.touched.address && (
                <p classNameName="text-red-700"> {formik.errors.address} </p>
              )}
            </div>
            <div>
              <label
                className="font-semibold text-sm text-blue-600 pb-1 block"
                for="qualification"
              >
                Last qualification
              </label>
              <select
                className="mt-1 mb-5 w-full text-gray-400 rounded-lg border border-green-200 px-3 py-2 text-sm focus:border-blue-400"
                id="qualification"
                value={formik.values.qualification}
                onChange={formik.handleChange}
              >
                <option value="qualification">Last qualification</option>
                <option value="matric">Matric</option>
                <option value="intermediate">Interediate</option>
                <option value="bachelor">Bachelor</option>
              </select>
            </div>
            <div>
              <label
                className="font-semibold text-sm text-blue-600 pb-1 block"
                for="laptop"
              >
                Do you have a laptop?
              </label>
              <select
                className="mt-1 mb-5 w-full text-gray-400 rounded-lg border border-green-200 px-3 py-2 text-sm focus:border-blue-400"
                id="laptop"
                value={formik.values.laptop}
                onChange={formik.handleChange}
              >
                <option value="laptop">Do you have a laptop?</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <div className="mt-5">
              <button
                className="py-4 px-4 bg-blue-600 hover:bg-blue-700 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
