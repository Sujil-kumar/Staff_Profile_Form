import React, { useState } from 'react'
import Header from './Header'
import Nav from './Nav'
import avr from './images/avr.png'
const Profile = ({formData,handleInput,handleCancel,handleFormSubmit}) => {

  const [password,setPassword]=useState("")
  const [showPassword,setShowPassword]=useState(false)
  const handleRequired=()=><span className='required-star'>*</span>

  const handleTogglePassword =()=>{
    setShowPassword(!showPassword)
  }
  const handleResetPassword=()=>{
    setPassword('')
  }

  return (
    <div>
      <Header/>
      <Nav/>
      <div className='body'>
          <form onSubmit={handleFormSubmit}>
            <div>
              <label htmlFor="staff-profile">
                <input 
                  type="checkbox"
                  name="enableAuthentication"
              /><i className='bi bi-question-circle-fill mx-2 '></i>
              Enable Email Two Factor Authentication
              </label>
            </div>
            <div>
              <img 
                  src={avr} 
                  alt="Profile" 
                  className='rounded-circle mx-auto'
                  width="120"
                  height="120"
                />
            </div>

            <div className='row mt-3'>
              <div className='col-12 '>
                <label htmlFor="Staff code" className='form-label'>{handleRequired()}Staff code</label>
                <input 
                  type="text"
                  name="staffCode"
                  className='form-control'
                  value={formData.staffCode || ''}
                  onChange={handleInput}
                  required
                />
              </div>
            </div>

            <div className='row mt-3'>
              <div className='col-md-6'>
                <label htmlFor="First name" className='form-label'>{handleRequired()}First name</label>
                <input 
                  type="text"
                  name="firstName"
                  className='form-control'
                  value={formData.firstName || ''}
                  onChange={handleInput}
                  required
                />
              </div>
              <div className='col-md-6 '>
                <label htmlFor="Last name" className='form-label'>{handleRequired()}Last name</label>
                <input 
                  type="text"
                  name="lastName"
                  className='form-control'
                  value={formData.lastName || ''}
                  onChange={handleInput}
                  required
                />
              </div>
            </div>
            
            <div className='row mt-3'>
              <div className='col-md-6'>
                <label htmlFor="Gender" className='form-label'>{handleRequired()}Gender</label>
                <select 
                    className='form-select'
                    name='gender'
                    value={formData.gender || ''}
                    onChange={handleInput}
                    required
                    >
                  <option value="" disabled hidden>None selected</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className='col-md-6 '>
                <label htmlFor="birthday" className='form-label'>{handleRequired()}Birthday</label>
                <input 
                  type="date"
                  name="birthday"
                  className='form-control'
                  value={formData.birthday || ''}
                  onChange={handleInput}
                  required
                />
              </div>
            </div>


            <div className='row mt-3'>
              <div className='col-md-6'>
                <label htmlFor="Email" className='form-label'>{handleRequired()}Email</label>
                <input 
                  type="email"
                  name="email"
                  className='form-control'
                  value={formData.email || ''}
                  onChange={handleInput}
                  required
                />
              </div>
              <div className='col-md-6 '>
                <label htmlFor="phone no" className='form-label'>{handleRequired()}Phone</label>
                <input 
                  type="tel"
                  name="phone"
                  pattern="[0-9]{10}"
                  className='form-control'
                  value={formData.phone || ''}
                  onChange={handleInput}
                  required
                />
              </div>
            </div>


            <div className='row mt-3'>
              <div className='col-md-6'>
                <label htmlFor="Workplace" className='form-label'>{handleRequired()}Workplace</label>
                <select 
                className='form-select'
                name='workplace'
                value={formData.workplace || ''}
                onChange={handleInput}
                required
                >
                  <option value="" disabled hidden>None selected</option>
                  <option value="bengaluru office">Bengaluru Office</option>
                  <option value="chennai office">Chennai Office</option>
                  <option value="work from home">WFH</option>
                </select>
              </div>
              <div className='col-md-6 '>
                <label htmlFor="status" className='form-label'>{handleRequired()}Status</label>
                <select 
                className='form-select' 
                name='status'
                value={formData.status || ''}
                onChange={handleInput}
                required
                >
                  <option value="" disabled hidden>None selected</option>
                  <option value="Working">Working</option>
                  <option value="Inactive">Inactive</option>
                  <option value="Probation">Probation</option>
                  <option value="resigned">resigned</option>
                </select>
              </div>
            </div>

            <div className='row mt-3'>
              <div className='col-md-6'>
                <label htmlFor="Job position" className='form-label'>{handleRequired()}Job position</label>
                <select 
                className='form-select'
                name='jobPosition'
                value={formData.jobPosition || ''}
                onChange={handleInput} 
                required>
                  <option value="" disabled hidden>None selected</option>
                  <option value="Software Engineer">Software Engineer</option>
                  <option value="Web Developer">Web Developer</option>
                  <option value="HR">HR</option>
                </select>
              </div>
              <div className='col-md-6 '>
                <label htmlFor="Direct manager" className='form-label'>Direct manager</label>
                <select 
                className='form-select'
                name='directManager'
                value={formData.directManager || ''}
                onChange={handleInput}
                >
                  <option value="" disabled hidden>None selected</option>
                  <option value="Nisha">Nisha</option>
                  <option value="Meena">Meena</option>
                </select>
              </div>
            </div>
            
            <div className='row mt-3'>
              <div className='col-12 '>
                <label htmlFor="Role" className='form-label'>{handleRequired()}Role</label>
                <select 
                className='form-select'
                name='role'
                value={formData.role || ''}
                onChange={handleInput}
                required
                >
                  <option value="" disabled hidden>None selected</option>
                  <option value="Employee">Employee</option>
                  <option value="Manager">Manager</option>
                  <option value="Admin">Admin</option>
                </select>
              </div>
            </div>

            <div className='row mt-3'>
              <div className='col-md-6'>
                <label htmlFor="Academic level" className='form-label'>{handleRequired()}Academic level</label>
                <select 
                className='form-select'
                name='academicLevel'
                value={formData.academicLevel || ''}
                onChange={handleInput}
                required
                >
                  <option value="" disabled hidden>Not required</option>
                  <option value="Undergraduate">Undergraduate</option>
                  <option value="Postgraduate">Postgraduate</option>
                  <option value="PhD">PhD</option>
                </select>
              </div>
              <div className='col-md-6'>
                <label htmlFor="Hourly Rate" className='form-label'>{handleRequired()}Hourly Rate</label>
                <div className='input-group'>
                <input 
                  type="number"
                  name="hourlyRate"
                  className='form-control'
                  placeholder='0.00'
                  step="0.01"
                  value={formData.hourlyRate || ''}
                  onChange={handleInput}
                  required
                />
                <span className='input-group-text'>₹</span>
              </div>
              </div>
            </div>


            <div className='row mt-3'>
              <div className='col-md-6'>
                <label htmlFor="Default Language" className='form-label'>Default Language</label>
                <select 
                className='form-select'
                name='defaultLanguage'
                value={formData.defaultLanguage || ''}
                onChange={handleInput}
                >
                  <option value="" disabled hidden>None select</option>
                  <option value="English">English</option>
                  <option value="Tamil">Tamil</option>
                  <option value="Hindi">Hindi</option>
                </select>
              </div>
              <div className='col-md-6 '>
                <label htmlFor="Direction" className='form-label'>Direction</label>
                <select 
                className='form-select'
                name='direction'
                value={formData.direction || ''}
                onChange={handleInput}
                >
                  <option value="" disabled hidden>System Default</option>
                </select>
            </div>
          </div>

          <div className='row mt-3'>
              <div className='col-md-6'>
                <label htmlFor="emailSignature" className='form-label'><i className='bi bi-question-circle-fill'></i>Email Signature</label>
                  <textarea 
                  type="text"
                  name="emailSignature"
                  className='form-control'
                  rows="3"
                  value={formData.emailSignature || ''}
                  onChange={handleInput}
                />
              </div>
              <div className='col-md-6 '>
                <label htmlFor="OtherInfo" className='form-label'>Other Information</label>
                <textarea 
                  type="text"
                  name="otherInfo"
                  className='form-control'
                  rows="3"
                  value={formData.otherInfo || ''}
                  onChange={handleInput}
                />
                </div>
          </div>

                <div className="row mt-5">
                  <div className="col-md-12">
                    <label htmlFor="twilioNumber" className='form-label'><i className="bi bi-pencil-square text-primary"></i> Twilio Phone Number</label>
                    <input 
                      type="text" 
                      name='twilioNumber'
                      className="form-control" 
                      value={formData.twilioNumber || ''}
                      onChange={handleInput}  
                    />
                  </div>
                </div>

                  <div className="row mt-4">
                    <div className="col-md-12">
                      <label htmlFor="whatsappEnabled" className='form-label'><i className="bi bi-pencil-square text-primary"></i> Is Twilio number WhatsApp enabled</label>
                      <select 
                      className="form-select" 
                      name='whatsappEnabled'
                      value={formData.whatsappEnabled || ''}
                      onChange={handleInput} 
                      >
                        <option value="" disabled hidden>None selected</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select>
                    </div>
                  </div>

                  <div className="row mt-5">
                    <div className="col-md-12">
                    <label htmlFor="password" className="fw-semibold">{handleRequired()}Password</label>
                    <div className="input-group">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter password"
                        required
                      />
                      <button
                        className="btn btn-outline-secondary"
                        type="button"
                        onClick={handleTogglePassword}
                      >
                        <i className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'}`}></i>
                      </button>
                      <button
                        className="btn btn-outline-secondary"
                        type="button"
                        onClick={handleResetPassword}
                      >
                        <i className="bi bi-arrow-clockwise"></i>
                      </button>
                    </div>
                    <small className="form-text text-muted">
                      Note: If you populate this field, password will be changed for this member.
                    </small>
                  </div>
                  </div>

                  <div className="row mt-4">
                    <div className="col-md-12 d-flex justify-content-end">
                      <button type="button" className="btn btn-light me-2" onClick={handleCancel}>Close</button>
                      <button type="submit" className="btn btn-dark">Save</button>
                    </div>
                  </div>
            


          </form>
      </div>
    </div>
  )
}

export default Profile