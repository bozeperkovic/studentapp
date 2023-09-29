package com.example.backend.Repository;

import com.example.backend.Model.Pupil;
import com.example.backend.Model.PupilFile;
import com.example.backend.Model.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PupilFileRepository extends JpaRepository<PupilFile, Long> {

    PupilFile findById(long id);

    Iterable<PupilFile> findByPupil(Pupil pupil);
}