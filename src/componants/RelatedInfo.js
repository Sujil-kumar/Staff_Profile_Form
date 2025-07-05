import React from 'react'
import Header from './Header'
import Nav from './Nav'

const RelatedInfo = ({formData,handleInput,handleClose,handleFormSubmit}) => {


  return (
    
    <div>
        <Header/>
        <Nav/>
        <div className='body'>
            <form onSubmit={handleFormSubmit}>
                <div className='row mt-3'>
                    <div className='col-md-6'>
                        <label htmlFor="Domicile" className='form-label'>Domicile</label>
                        <input 
                            type="text"
                            name="domicile"
                            className='form-control'
                            value={formData.domicile || ''}
                            onChange={handleInput}
                        />
                    </div>
                    <div className='col-md-6 '>
                        <label htmlFor="Martial Status" className='form-label'>Marital Status</label>
                        <select 
                            className='form-select'
                            name='maritalStatus'
                            value={formData.maritalStatus || ''}
                            onChange={handleInput}
                            >
                            <option value="" disabled hidden>None selected</option>
                            <option value="single">Single</option>
                            <option value="married">Married</option>
                </select>
                    </div>
            </div>

            <div className='row mt-3'>
                    <div className='col-md-6'>
                        <label htmlFor="Current Address" className='form-label'>Current Address</label>
                        <input 
                            type="text"
                            name="currentAddress"
                            className='form-control'
                            value={formData.currentAddress || ''}
                            onChange={handleInput}
                        />
                    </div>
                    <div className='col-md-6 '>
                        <label htmlFor="Nation" className='form-label'>Nation</label>
                        <input 
                            type="text"
                            name="nation"
                            className='form-control'
                            value={formData.nation || ''}
                            onChange={handleInput}
                        />
                    </div>
            </div>

            <div className='row mt-3'>
                    <div className='col-md-6'>
                        <label htmlFor="Place of birth" className='form-label'>Place of birth</label>
                        <input 
                            type="text"
                            name="placeOfBirth"
                            className='form-control'
                            value={formData.placeOfBirth || ''}
                            onChange={handleInput}
                        />
                    </div>
                    <div className='col-md-6 '>
                        <label htmlFor="Religion" className='form-label'>Religion</label>
                        <input 
                            type="text"
                            name="religion"
                            className='form-control'
                            value={formData.religion || ''}
                            onChange={handleInput}
                        />
                    </div>
            </div>

            <div className='row mt-3'>
                    <div className='col-md-6'>
                        <label htmlFor="Citizen identification" className='form-label'>Citizen identification</label>
                        <input 
                            type="text"
                            name="citizenIdentification"
                            className='form-control'
                            value={formData.citizenIdentification || ''}
                            onChange={handleInput}
                        />
                    </div>
                    <div className='col-md-6 '>
                        <label htmlFor="Date of issue" className='form-label'>Date of issue</label>
                        <input 
                            type="date"
                            name="dateOfIssue"
                            className='form-control'
                            value={formData.dateOfIssue || ''}
                            onChange={handleInput}
                            />
                    </div>
            </div>

            <div className='row mt-3'>
                    <div className='col-md-6'>
                        <label htmlFor="Place of issue" className='form-label'>Place of issue</label>
                        <input 
                            type="text"
                            name="placeOfIssue"
                            className='form-control'
                            value={formData.placeOfIssue || ''}
                            onChange={handleInput}
                        />
                    </div>
                    <div className='col-md-6 '>
                        <label htmlFor="Resident" className='form-label'>Resident</label>
                        <input 
                            type="text"
                            name="resident"
                            className='form-control'
                            value={formData.resident || ''}
                            onChange={handleInput}
                        />
                    </div>
            </div>

            <div className='row mt-3'>
                    <div className='col-md-6'>
                        <label htmlFor="Bank account number" className='form-label'>Bank account number </label>
                        <input 
                            type="text"
                            name="bankAccountNumber"
                            className='form-control'
                            value={formData.bankAccountNumber || ''}
                            onChange={handleInput}
                        />
                    </div>
                    <div className='col-md-6 '>
                        <label htmlFor="Bank account name" className='form-label'>Bank account name</label>
                        <input 
                            type="text"
                            name="bankAccountName"
                            className='form-control'
                            value={formData.bankAccountName || ''}
                            onChange={handleInput}
                        />
                    </div>
            </div>

            <div className='row mt-3'>
                    <div className='col-md-6'>
                        <label htmlFor="Bank name" className='form-label'>Bank name</label>
                        <input 
                            type="text"
                            name="bankName"
                            className='form-control'
                            value={formData.bankName || ''}
                            onChange={handleInput}
                        />
                    </div>
                    <div className='col-md-6 '>
                        <label htmlFor="Persoal tax code" className='form-label'>Personal tax code</label>
                        <input 
                            type="text"
                            name="personalTaxCode"
                            className='form-control'
                            value={formData.personalTaxCode || ''}
                            onChange={handleInput}
                        />
                    </div>
            </div>

            <div className='row mt-3'>
                    <div className='col-md-6'>
                        <label htmlFor="EPF No" className='form-label'>EPF No</label>
                        <input 
                            type="text"
                            name="epfNo"
                            className='form-control'
                            value={formData.epfNo || ''}
                            onChange={handleInput}
                        />
                    </div>
                    <div className='col-md-6 '>
                        <label htmlFor="Social Security No" className='form-label'>Social Security No</label>
                        <input 
                            type="text"
                            name="socialSecurityNo"
                            className='form-control'
                            value={formData.socialSecurityNo || ''}
                            onChange={handleInput}
                        />
                    </div>
            </div>

            <div className='row mt-3'>
                    <div className='col-md-6'>
                        <label htmlFor="Facebook" className='form-label'><i className="bi bi-facebook me-2"></i>Facebook</label>
                        <input 
                            type="text"
                            name="facebook"
                            className='form-control'
                            value={formData.facebook || ''}
                            onChange={handleInput}
                        />
                    </div>
                    <div className='col-md-6 '>
                        <label htmlFor="LinkedIn" className='form-label'><i className="bi bi-linkedin me-2"></i>LinkedIn</label>
                        <input 
                            type="text"
                            name="linkedIn"
                            className='form-control'
                            value={formData.linkedIn || ''}
                            onChange={handleInput}
                        />
                    </div>
            </div>

            <div className='row mt-3'>
                    <div className='col-md-6'>
                        <label htmlFor="Skype" className='form-label'><i className="bi bi-skype me-2"></i>Skype</label>
                        <input 
                            type="text"
                            name="skype"
                            className='form-control'
                            value={formData.skype || ''}
                            onChange={handleInput}
                        />
                    </div>
            </div>

            <div className="row mt-4">
                    <div className="col-md-12 d-flex justify-content-end">
                        <button type="button" className="btn btn-light me-2" onClick={handleClose}>Close</button>
                        <button type="submit" className="btn btn-dark">Save</button>
                    </div>
                    </div>

            </form>
        </div>
    </div>
  )
}

export default RelatedInfo