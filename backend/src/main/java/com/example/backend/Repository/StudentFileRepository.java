package com.example.backend.Repository;

import com.example.backend.Model.Student;
import com.example.backend.Model.StudentFile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentFileRepository extends JpaRepository<StudentFile, Long> {

    StudentFile findById(long id);

    Iterable<StudentFile> findByStudent(Student student);
}