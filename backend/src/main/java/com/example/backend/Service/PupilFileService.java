package com.example.backend.Service;

import com.example.backend.Model.Pupil;
import com.example.backend.Model.PupilFile;
import com.example.backend.Repository.PupilFileRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PupilFileService {

    @Autowired
    private final PupilFileRepository repository;


    public PupilFileService(PupilFileRepository repository) {
        this.repository = repository;
    }
    @Transactional
    public Iterable<PupilFile> findAll() {
        return repository.findAll();
    }

    @Transactional
    public Iterable<PupilFile> findByPupil(Pupil pupil){
        return repository.findByPupil(pupil);
    }

    @Transactional
    public PupilFile save(PupilFile file) {return repository.save(file);}
    @Transactional
    public void deleteById(long id) { repository.deleteById(id); }
    @Transactional
    public PupilFile findById(long id) { return repository.findById(id); }

}