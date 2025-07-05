import React from 'react'
import avr from './images/avr.png'
const StaffPreview = ({formData,handleClose}) => {

    return (
    <div className='container mt-4'>
        <div className='row'>
            <div className='col-md-5'>
                <div className='card text-center p-3'>
                    <img 
                        src={avr} 
                        alt="Profile" 
                        className='rounded-circle mx-auto'
                        width="120"
                        height="120"
                    />
                    <h5 className='mt-3'>{formData.firstName} {formData.lastName}</h5>
                    <div className='d-flex justify-content-center gap-2'>
                        <i className="bi bi-facebook text-primary"></i>
                        <i className="bi bi-linkedin text-primary"></i>
                        <i className="bi bi-skype text-primary"></i>
                        <i className="bi bi-envelope text-primary"></i>
                    </div>

                    <div className="text-start mt-3">
                        <p><i className="bi bi-envelope"></i> {formData.email}</p>
                        <p><i className="bi bi-telephone"></i> {formData.phone}</p>
                        <p><i className="bi bi-building"></i> {formData.university || "Oxford University"}</p>
                        <p>{formData.jobPosition}</p>
                        <p>Direct manager: <i className="bi bi-person-circle"></i></p>
                    </div>
                </div>
            </div>


            <div className="col-md-7">
                <h5>General Information</h5>
                <div className="row  p-3 mb-3">
                    <div className='row py-2 bg-light'>
                        <div className='col-md-5 '>Staff Code</div>
                        <div className='col-md-7'>{formData.staffCode}</div>
                    </div>
                     <div className='row py-2'>
                        <div className='col-md-5 '>Staff Name</div>
                        <div className='col-md-7'>{formData.firstName} {formData.lastName}</div>
                    </div>
                    <div className='row py-2 bg-light'>
                        <div className='col-md-5 '>Gender</div>
                        <div className='col-md-7'>{formData.gender}</div>
                    </div>
                    <div className='row py-2'>
                        <div className='col-md-5 '>BirthDay</div>
                        <div className='col-md-7'>{formData.birthday}</div>
                    </div>
                    <div className='row py-2 bg-light'>
                        <div className='col-md-5 '>Phone</div>
                        <div className='col-md-7'>{formData.phone}</div>
                    </div>
                    <div className='row py-2 '>
                        <div className='col-md-5 '>Workplace</div>
                        <div className='col-md-7'>{formData.workplace}</div>
                    </div>
                    <div className='row py-2 bg-light'>
                        <div className='col-md-5 '>Status</div>
                        <div className='col-md-7'>{formData.status}</div>
                    </div>
                    <div className='row py-2 '>
                        <div className='col-md-5 '>Job position</div>
                        <div className='col-md-7'>{formData.jobPosition}</div>
                    </div>
                    <div className='row py-2 bg-light'>
                        <div className='col-md-5 '>Academic Level</div>
                        <div className='col-md-7'>{formData.academicLevel}</div>
                    </div>
                    <div className='row py-2 '>
                        <div className='col-md-5 '>Hourly Rate</div>
                        <div className='col-md-7'>{formData.hourlyRate}</div>
                    </div>
                    <div className='row py-2 bg-light'>
                        <div className='col-md-5 '>Religion</div>
                        <div className='col-md-7'>{formData.religion || "NA"}</div>
                    </div>
                    <div className='row py-2 '>
                        <div className='col-md-5 '>Nation</div>
                        <div className='col-md-7'>{formData.nation || "NA"}</div>
                    </div>
                    <div className='row py-2 bg-light'>
                        <div className='col-md-5 '>Marital status</div>
                        <div className='col-md-7'>{formData.maritalStatus ||"NA"}</div>
                    </div>
                </div>

                 <h5>Related Information</h5>
                <div className="row  p-3 mb-3">
                    <div className='row py-2 bg-light'>
                        <div className='col-md-5 '>Citizen identification</div>
                        <div className='col-md-7'>{formData.citizenIdentification ||"NA"}</div>
                    </div>
                     <div className='row py-2 '>
                        <div className='col-md-5 '>Date of issue</div>
                        <div className='col-md-7'>{formData.dateOfIssue ||"NA"}</div>
                    </div>
                    <div className='row py-2 bg-light'>
                        <div className='col-md-5 '>Place of Birth</div>
                        <div className='col-md-7'>{formData.placeOfBirth ||"NA"}</div>
                    </div>
                    <div className='row py-2 '>
                        <div className='col-md-5 '>Current address</div>
                        <div className='col-md-7'>{formData.currentAddress ||"NA"}</div>
                    </div>
                    <div className='row py-2 bg-light'>
                        <div className='col-md-5 '>Bank account number</div>
                        <div className='col-md-7'>{formData.bankAccountNumber ||"NA"}</div>
                    </div>
                    <div className='row py-2 '>
                        <div className='col-md-5 '>Bank name</div>
                        <div className='col-md-7'>{formData.bankName ||"NA"}</div>
                    </div>
                    <div className='row py-2 bg-light'>
                        <div className='col-md-5 '>Personal tax code</div>
                        <div className='col-md-7'>{formData.personalTaxCode ||"NA"}</div>
                    </div>
                </div>
                </div>
                <div className="row mt-4">
                    <div className="col-md-12 d-flex justify-content-end">
                        <button type="button" className="btn btn-light me-2" onClick={handleClose}>OK</button>
                    </div>
                    </div>
        </div>
    </div>
  )
}

export default StaffPreview