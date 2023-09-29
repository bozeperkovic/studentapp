package com.example.backend.Controller;

import com.example.backend.Model.Student;
import com.example.backend.Model.StudentFile;
import com.example.backend.Repository.StudentFileRepository;
import com.example.backend.Service.StudentFileService;
import com.example.backend.Service.StudentService;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.Resource;
import org.springframework.http.*;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.util.Optional;

@RestController
@CrossOrigin("http://localhost:3000")
public class StudentFileController {

    StudentFileService studentFileService;

    private final StudentService studentService;


    public StudentFileController(StudentFileService studentFileService, StudentService studentService) {
        this.studentFileService = studentFileService;
        this.studentService = studentService;
    }

    @GetMapping("students/all/files")
    public Iterable<StudentFile> getFiles(Model model) {
        return studentFileService.findAll();
    }

    @GetMapping("/students/{id}/files")
    public Iterable<StudentFile> getFilesFromOne(@PathVariable Long id) {
        return studentFileService.findByStudent(studentService.findById(id).getBody());
    }

    @PostMapping(value = "/students/{id}/files",
            consumes = {MediaType.MULTIPART_FORM_DATA_VALUE},
            produces = {MediaType.APPLICATION_JSON_VALUE})
    public Iterable<StudentFile> uploadFile(@RequestParam MultipartFile file, @PathVariable Long id) {
        try {
            studentFileService.save(new StudentFile(file.getOriginalFilename(), file.getContentType(), file.getBytes(), (studentService.findById(id)).getBody()));
        }
        catch (Exception e) {
            e.printStackTrace();
        }
        return studentFileService.findByStudent(studentService.findById(id).getBody());
    }

    @GetMapping("/students/files/{id}")
    public ResponseEntity<Resource> downloadFile(@PathVariable("id") Long id) {
        StudentFile file = studentFileService.findById(id);
        ByteArrayResource resource = new ByteArrayResource(file.getData());
        HttpHeaders headers = new HttpHeaders();
        headers.setContentDisposition(ContentDisposition.inline().filename(file.getDocName()).build());
        headers.setContentType(MediaType.parseMediaType(file.getDocType()));
        return new ResponseEntity<>(resource, headers, HttpStatus.OK);
    }
    @DeleteMapping("/students/files/{id}")
    public void deleteFile(@PathVariable("id") Long id) {
        studentFileService.deleteById(id);
    }

}
