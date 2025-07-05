import Profile from './componants/Profile';
import { useState } from 'react';
import RelatedInfo from './componants/RelatedInfo';
import { Route,Routes } from 'react-router-dom';
import StaffPreview from './componants/StaffPreview';
import { useNavigate } from 'react-router-dom';

function App() {

  const [formData,setFormData]=useState({})
  const navigate = useNavigate();
  const handleInput=(e)=>{
    const {name,value}=e.target;
    setFormData({...formData,[name]:value});
  }
  const handleClose=()=>{
    setFormData({});
  }
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.staffCode || !formData.email) {
      alert("Please fill all required fields.");
      return;
    }

    console.log("Form Data Saved:", formData);
    navigate('/staff-preview');
  };

  return (
    <div>

      <Routes>
        <Route path='/' element={<Profile
        formData={formData}
        setFormData={setFormData}
        handleInput={handleInput}
        handleClose={handleClose}
        handleFormSubmit={handleFormSubmit}
      />} />
        <Route path='/related-info' element={<RelatedInfo
          formData={formData}
          setFormData={setFormData}
          handleInput={handleInput}
          handleClose={handleClose}
          handleFormSubmit={handleFormSubmit}
        />} />

        <Route path='/staff-preview' element={<StaffPreview formData={formData} handleClose={handleClose}/>} />
      </Routes>
      

      
    </div>
  );
}

export default App;
