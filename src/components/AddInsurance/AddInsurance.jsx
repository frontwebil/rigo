import { useEffect, useState } from "react";
import { Search } from "../Search/Search";

export function AddInsurance({currentPage}) {
  const [typeCustomer, setTypeCustomer] = useState("Business Customer");
  const [isCompleted, setIsCompleted] = useState(false);
  const handleCloseModal = () => {
    setIsCompleted(false);
  };
  const [formData, setFormData] = useState({
    companyName: "",
    companyNumber: "",
    businessType: "",
    phone: "",
    address: "",
    contactDetails: "",
    email: "",
    contactPosition: "",
    insuranceCompany: "",
    insuranceType: "",
    startDate: "",
    endDate: "",
    rateOfInsurance: "",
    typeOfPayment: "",
    dateOfPayment: "",
    paymentDetails: "",
  });

  useEffect(() => {
    if (typeCustomer === "Business Customer") {
      setFormData({
        companyName: "",
        companyNumber: "",
        businessType: "",
        phone: "",
        address: "",
        contactDetails: "",
        email: "",
        contactPosition: "",
        insuranceCompany: "",
        insuranceType: "",
        startDate: "",
        endDate: "",
        rateOfInsurance: "",
        typeOfPayment: "",
        dateOfPayment: "",
        paymentDetails: "",
      });
    } else if (typeCustomer === "Tourist") {
      setFormData({
        passportId: "",
        lastName: "",
        firstName: "",
        phone: "",
        gender: "",
        address: "",
        dateOfBirth: "",
        phoneFax: "",
        email: "",
        additionalContactPerson: "",
        employmentInfo: "",
        insuranceCompany: "",
        healthCard: "",
        startDate: "",
        endDate: "",
        typeOfPayment: "",
        dateOfPayment: "",
        rateOfInsurance: "",
        paymentDetails: "",
      });
    }
  }, [typeCustomer]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "customerType") {
      setTypeCustomer(value);
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   customersAdmin.push({
  //     ...formData,
  //     name: `${
  //       typeCustomer === "Business Customer"
  //         ? formData.contactDetails
  //         : formData.firstName + formData.lastName
  //     }`,
  //     country: `${formData.address}`,
  //     status: "Pending",
  //     alerts: "0",
  //     notes: "0",
  //     tax: Math.floor(Math.random() * (2000 - 1000 + 1)) + 1000,
  //     member:
  //       Math.floor(Math.random() * (7000000000 - 6000000000 + 1)) + 6000000000,
  //   });
  //   console.log(customersAdmin)
  //   setIsCompleted(true)
  //   setFormData({
  //     companyName: "",
  //     companyNumber: "",
  //     businessType: "",
  //     phone: "",
  //     address: "",
  //     contactDetails: "",
  //     email: "",
  //     contactPosition: "",
  //     insuranceCompany: "",
  //     insuranceType: "",
  //     startDate: "",
  //     endDate: "",
  //     rateOfInsurance: "",
  //     typeOfPayment: "",
  //     dateOfPayment: "",
  //     paymentDetails: "",
  //   });
  //   setTypeCustomer("Business Customer");
  // };

  return (
    <>
          <Search
            currentPage={currentPage}
          />
      {/* <ControlsPanelAdminPage />
      <Search current={false} /> */}
      <div className="form-container">
        <div className="form-header">
          <h2>Step 1</h2>
          <h3>Creating a New Customer</h3>
          <select
            required
            className={`customer-type-select`}
            style={{
              backgroundColor: `${
                typeCustomer === "Foreign Employer" ? "#049aa3" : ""
              }
              ${typeCustomer === "Business Customer" ? "#5766d0" : ""}
              ${typeCustomer === "Tourist" ? "#eb5b93" : ""}`,
            }}
            name="customerType"
            value={typeCustomer}
            onChange={handleChange}
          >
            <option value="Business Customer">Business Customer</option>
            <option value="Tourist">Tourist</option>
            <option value="Foreign Employer">Foreign Employer</option>
          </select>
        </div>
        {typeCustomer === "Business Customer" && (
          <form className="form-grid">
            <div className="form-row">
              <div className="form-item">
                <label>1. Company Name</label>
                <input
                  required
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                />
              </div>
              <div className="form-item">
                <label>2. Company Number</label>
                <input
                  required
                  type="text"
                  name="companyNumber"
                  value={formData.companyNumber}
                  onChange={handleChange}
                />
              </div>
              <div className="form-item">
                <label>3. Business Type</label>
                <input
                  required
                  type="text"
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleChange}
                />
              </div>
              <div className="form-item">
                <label>4. Phone</label>
                <input
                  required
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-item">
                <label>5. Address of Registration</label>
                <input
                  required
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>
              <div className="form-item">
                <label>6. Contact Details</label>
                <input
                  required
                  type="text"
                  name="contactDetails"
                  value={formData.contactDetails}
                  onChange={handleChange}
                />
              </div>
              <div className="form-item">
                <label>7. E-mail</label>
                <input
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-item">
                <label>8. Contact Position</label>
                <input
                  required
                  type="text"
                  name="contactPosition"
                  value={formData.contactPosition}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-item">
                <label>9. Insurance Company</label>
                <input
                  required
                  type="text"
                  name="insuranceCompany"
                  value={formData.insuranceCompany}
                  onChange={handleChange}
                />
              </div>
              <div className="form-item">
                <label>10. Insurance Type</label>
                <input
                  required
                  type="text"
                  name="insuranceType"
                  value={formData.insuranceType}
                  onChange={handleChange}
                />
              </div>
              <div className="form-item">
                <label>11. Start Date</label>
                <input
                  type="date"
                  required
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                />
              </div>
              <div className="form-item">
                <label>12. End Date</label>
                <input
                  required
                  type="date"
                  name="endDate"
                  value={formData.endDate}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-item">
                <label>13. Rate of Insurance</label>
                <input
                  required
                  type="text"
                  name="rateOfInsurance"
                  value={formData.rateOfInsurance}
                  onChange={handleChange}
                />
              </div>
              <div className="form-item">
                <label>14. Type of Payment</label>
                <input
                  required
                  type="text"
                  name="typeOfPayment"
                  value={formData.typeOfPayment}
                  onChange={handleChange}
                />
              </div>
              <div className="form-item">
                <label>15. Date of Payment</label>
                <input
                  required
                  type="date"
                  name="dateOfPayment"
                  value={formData.dateOfPayment}
                  onChange={handleChange}
                />
              </div>
              <div className="form-item">
                <label>16. Payment Details</label>
                <input
                  required
                  type="text"
                  name="paymentDetails"
                  value={formData.paymentDetails}
                  onChange={handleChange}
                />
              </div>
            </div>
            <button type="submit" className="submit-button">
              Next
            </button>
          </form>
        )}
        {typeCustomer === "Tourist" || typeCustomer === "Foreign Employer" ? (
          <form className="form-grid">
            <div className="form-row">
              <div className="form-item">
                <label>1. Passport ID</label>
                <input
                  required
                  type="text"
                  name="passportId"
                  value={formData.passportId}
                  onChange={handleChange}
                />
              </div>
              <div className="form-item">
                <label>2. First Name</label>
                <input
                  required
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>
              <div className="form-item">
                <label>3. Last Name</label>
                <input
                  required
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
              <div className="form-item">
                <label>4. Gender</label>
                <input
                  required
                  type="text"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-item">
                <label>5. Address</label>
                <input
                  required
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>
              <div className="form-item">
                <label>6. Date of Birth</label>
                <input
                  required
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                />
              </div>
              <div className="form-item">
                <label>7. Phone/Fax</label>
                <input
                  required
                  type="text"
                  name="phoneFax"
                  value={formData.phoneFax}
                  onChange={handleChange}
                />
              </div>
              <div className="form-item">
                <label>8. Email</label>
                <input
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-item">
                <label>9. Additional Contact Person</label>
                <input
                  required
                  type="text"
                  name="additionalContactPerson"
                  value={formData.additionalContactPerson}
                  onChange={handleChange}
                />
              </div>
              <div className="form-item">
                <label>10. Employment Info</label>
                <input
                  required
                  type="text"
                  name="employmentInfo"
                  value={formData.employmentInfo}
                  onChange={handleChange}
                />
              </div>
              <div className="form-item">
                <label>11. Insurance Company</label>
                <input
                  required
                  type="text"
                  name="insuranceCompany"
                  value={formData.insuranceCompany}
                  onChange={handleChange}
                />
              </div>
              <div className="form-item">
                <label>12. Health Card</label>
                <input
                  required
                  type="text"
                  name="healthCard"
                  value={formData.healthCard}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-item">
                <label>13. Start Date</label>
                <input
                  required
                  type="date"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                />
              </div>
              <div className="form-item">
                <label>14. End Date</label>
                <input
                  required
                  type="date"
                  name="endDate"
                  value={formData.endDate}
                  onChange={handleChange}
                />
              </div>
              <div className="form-item">
                <label>15. Type of Payment</label>
                <input
                  required
                  type="text"
                  name="typeOfPayment"
                  value={formData.typeOfPayment}
                  onChange={handleChange}
                />
              </div>
              <div className="form-item">
                <label>16. Date of Payment</label>
                <input
                  required
                  type="date"
                  name="dateOfPayment"
                  value={formData.dateOfPayment}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-item">
                <label>17. Rate of Insurance</label>
                <input
                  required
                  type="text"
                  name="rateOfInsurance"
                  value={formData.rateOfInsurance}
                  onChange={handleChange}
                />
              </div>
              <div className="form-item">
                <label>18. Payment Details</label>
                <input
                  required
                  type="text"
                  name="paymentDetails"
                  value={formData.paymentDetails}
                  onChange={handleChange}
                />
              </div>
              {/* <div className="form-item">
                <label>19. Phone</label>
                <input
                  required
                  type="phone"
                  name="paymentDetails"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div> */}
            </div>
            <button type="submit" className="submit-button">
              Next
            </button>
          </form>
        ) : (
          ""
        )}

        {isCompleted && (
          <div className="modal">
            <div className="modal-content">
              <h3>Customer was added successfully!</h3>
              <button onClick={handleCloseModal} className="close-button">
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
