# Hospital_Api <br>



<h1>Hosting Link ::<b>https://hospital-api-zjle.onrender.com</b></h1>

<h1>Hospital_Api:</h1>  A nodejs + ejs web application   is a Hospital API for the doctors 
of a Hospital which has been allocated by the government for testing and quarantine + well being of COVID-19 patients <br><br>

<h3> Technology Used :</h3> <br>
<ul>
     <li>Nodejs</li>
     <li>Express</li>
     <li>Mongodb</li>
</ul>

<h3> Features :</h3> <br>
 <h4>There can be 2 types of Users</h4><br>
   <ol>
      <li><h5>Doctors</h5></li>
      <li><h5>Patients</h5></li>
       <ul>
         <b>Doctors</b>
         <li>Doctors can log in</li>
         <li>Each time a patient visits, the doctor will follow 2 steps
         <ol type="a">
           <li>Register the patient in the app (using phone number, if the patient already exists, just
             return the patient info in the API)</li>
           <li>After the checkup, create a Report</li>
         </ol>
         </li>
         <li>Patient Report will have the following fields
         <ol type="a">
           <li>Created by doctor</li>
           <li>Status (You can use enums if you want to):
              Can be either of: [Negative, Travelled-Quarantine, Symptoms-Quarantine,
              Positive-Admit]</li>
              <li>Date</li>
         </ol>
         </li> 
       </ul>
   </ol> 




