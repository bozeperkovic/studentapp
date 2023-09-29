package com.example.backend.Service;

import com.example.backend.Model.Pupil;
import com.example.backend.Model.Student;
import com.example.backend.Repository.PupilRepository;
import com.example.backend.Repository.StudentRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service

public class PupilService {

    @Autowired
    private PupilRepository pupilRepository;


    public ResponseEntity<List<Pupil>> getAllPupils() {
        try {
            List<Pupil> pupilList = new ArrayList<>();
            pupilRepository.findAll().forEach(pupilList::add);

            if (pupilList.isEmpty()) {
                return new ResponseEntity<>( HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(pupilList, HttpStatus.OK);
        }catch (Exception ex) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }



    public ResponseEntity<Pupil> getPupilById(@PathVariable Long id) {
        Optional<Pupil> pupilData = pupilRepository.findById(id);

        if (pupilData.isPresent()) {
            return new ResponseEntity<>(pupilData.get(), HttpStatus.OK);

        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }


    public ResponseEntity<Pupil> findById(Long id) {
        try{
            pupilRepository.findById(id);
            return new ResponseEntity<>(HttpStatus.OK);
        }
        catch(Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }



    public ResponseEntity<Pupil> addPupil(@RequestBody Pupil pupil) {
        try {
            Pupil stud = pupilRepository.save(pupil);
            return new ResponseEntity<>(stud, HttpStatus.OK);

        }
        catch(Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    } //TODO dodati exception handle ako NotBlank ne bude funkcionalan



    public ResponseEntity<Pupil>updatePupilById (@PathVariable Long id, @RequestBody Pupil newPupilData) {
        Optional<Pupil> oldPupilData = pupilRepository.findById(id);

        if(oldPupilData.isPresent()) {
            Pupil updatedPupilData = oldPupilData.get();

            updatedPupilData.setFirstName(newPupilData.getFirstName());
            updatedPupilData.setLastName(newPupilData.getLastName());
            updatedPupilData.setDateOfBirth(newPupilData.getDateOfBirth());
            updatedPupilData.setSchoolName(newPupilData.getSchoolName());
            updatedPupilData.setCourseOfStudies(newPupilData.getCourseOfStudies());
            updatedPupilData.setPhoneNumber(newPupilData.getPhoneNumber());
            updatedPupilData.setEmail(newPupilData.getEmail());
            updatedPupilData.setResidence(newPupilData.getResidence());
            updatedPupilData.setFamiliarTechnologies(newPupilData.getFamiliarTechnologies());

            Pupil pupilObj = pupilRepository.save(updatedPupilData);
            return new ResponseEntity<>(pupilObj, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }



    public ResponseEntity<HttpStatus> deletePupilById(@PathVariable Long id) {
        try{
            pupilRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.OK);
        }

        catch (Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


}