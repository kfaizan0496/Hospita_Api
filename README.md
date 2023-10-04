# Hospital_Api <br>



<h1>Hosting Link ::<b>https://hospital-api-zjle.onrender.com</b></h1>

<h1>Hospital_Api:</h1>  A nodejs + ejs web application   is a Hospital API for the doctors 
of a Hospital which has been allocated by the government for testing and quarantine + well being of COVID-19 patients <br><br>

  <h3> Installation:</h3> <br>
       <ol>
            <h5>To run this application on your local machine, please follow these steps:</h5>
               <li>Install the required dependencies using the following command:  npm install</li>
               <li>Start the application using the following command:  npm start(This Command only Working When use nodemon)</li>
               <li>Open the application in your postman app by visiting the following URL: http://localhost:8000</li>
               <li>Check All the Routes </li>
       </ol>

  
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


   <h2> Doctors Signup :</h2> <br>

![Screenshot (47)](https://github.com/kfaizan0496/Hospital_Api/assets/113850768/8ce8b7fc-21ea-470b-a688-1535430751da)

![Screenshot (46)](https://github.com/kfaizan0496/Hospital_Api/assets/113850768/1546d732-b663-4e28-a101-7ebdf4ae7759)

   <h2> Doctors Login :</h2> <br>
   
![Screenshot (52)](https://github.com/kfaizan0496/Hospital_Api/assets/113850768/980a0b23-4104-4d08-a8b8-368369497a10)


   <h2> Patients Register :</h2> <br>
   
![Screenshot (48)](https://github.com/kfaizan0496/Hospital_Api/assets/113850768/706e3c90-dc91-41b6-8470-40beb16f451a)


   <h2> Create Reports :</h2> <br>

![Screenshot (49)](https://github.com/kfaizan0496/Hospital_Api/assets/113850768/d7ce17bc-f20a-47d4-98b1-a6c85db33b37)

<h2> List of all reports according to status :</h2> <br>

![Screenshot (50)](https://github.com/kfaizan0496/Hospital_Api/assets/113850768/ae7f3e2a-7588-418a-ba88-614fe24ccd32)

<h2> List of all Patients Reports according to Symptoms :</h2> <br>

![Screenshot (51)](https://github.com/kfaizan0496/Hospital_Api/assets/113850768/95fe367c-65c4-4ed6-bcd8-f669dbfbb255)


