package com.example.backend.Service;
import com.example.backend.Model.Student;
import com.example.backend.Repository.StudentRepository;
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
public class StudentService {


    @Autowired
    private StudentRepository studentRepository;


    public ResponseEntity<List<Student>> getAllStudents(){
        try{

            List<Student> studentList = new ArrayList<>();

            studentRepository.findAll().forEach(studentList::add);

            if(studentList.isEmpty()){
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

            return new ResponseEntity<>(studentList, HttpStatus.OK);
        }

        catch(Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }


    public ResponseEntity<Student> getStudentById(@PathVariable Long id){

        Optional<Student> studentData = studentRepository.findById(id);

        if(studentData.isPresent()){
            return new ResponseEntity<>(studentData.get(), HttpStatus.OK);
        }

        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }



    public ResponseEntity<Student> addStudent(@RequestBody Student student){
        try {
            Student stud = studentRepository.save(student);
            return new ResponseEntity<>(stud, HttpStatus.OK);

        }
        catch(Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }

    } //TODO dodati exception handle ako NotBlank ne bude funkcionalan




    public ResponseEntity<Student> updateStudentById(@PathVariable Long id, @RequestBody Student newStudent){

        Optional<Student> oldStudent = studentRepository.findById(id);


        if(oldStudent.isPresent()){
            Student updated = oldStudent.get();

            updated.setFirstName(newStudent.getFirstName());
            updated.setLastName(newStudent.getLastName());
            updated.setDateOfBirth(newStudent.getDateOfBirth());
            updated.setUniversityName(newStudent.getUniversityName());
            updated.setCourseOfStudies(newStudent.getCourseOfStudies());
            updated.setPhoneNumber(newStudent.getPhoneNumber());
            updated.setEmail(newStudent.getEmail());
            updated.setResidence(newStudent.getResidence());
            updated.setFamiliarTechnologies(newStudent.getFamiliarTechnologies());

            Student stud = studentRepository.save(updated);

            return new ResponseEntity<>(stud, HttpStatus.OK);
        }

        return new ResponseEntity<>(HttpStatus.NOT_FOUND);

    }


    public ResponseEntity<Student> deleteStudentById(@PathVariable Long id){
        try{
            studentRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.OK);
        }

        catch (Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

    public ResponseEntity<Student> findById(Long id) {
        try{
            studentRepository.findById(id);
            return new ResponseEntity<>(HttpStatus.OK);
        }
        catch(Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }
}