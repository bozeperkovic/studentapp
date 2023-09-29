package com.example.backend.Service;

import com.example.backend.Model.Student;
import com.example.backend.Model.StudentFile;
import com.example.backend.Repository.StudentFileRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import java.util.Optional;

@Service
public class StudentFileService {

    @Autowired
    private final StudentFileRepository repository;


    public StudentFileService(StudentFileRepository repository) {
        this.repository = repository;
    }
    @Transactional
    public Iterable<StudentFile> findAll() {
        return repository.findAll();
    }
    @Transactional
    public Iterable<StudentFile> findByStudent(Student student) {
        return repository.findByStudent(student);
    }

    @Transactional
    public StudentFile save(StudentFile file) {return repository.save(file);}
    @Transactional
    public void deleteById(long id) { repository.deleteById(id); }

    @Transactional
    public StudentFile findById(long id) { return repository.findById(id); }

}