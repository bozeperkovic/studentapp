package com.example.backend.Controller;
import com.example.backend.Exception.RestExceptionHandler;
import com.example.backend.Model.Student;
import com.example.backend.Service.StudentService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.backend.Repository.StudentRepository;
import org.springframework.web.multipart.MultipartFile;


import java.time.LocalDate;
import java.util.*;

@RestController
@CrossOrigin("http://localhost:3000")
public class StudentController {

    private final StudentService studentService;

    private StudentRepository studentRepository;

    @Autowired
    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }

    @Operation(summary = "Get all students")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200",
                    description = "List of all students.",
                    content = {@Content(
                            schema = @Schema(implementation = Student.class),
                            mediaType = "application/json")}),
            @ApiResponse(responseCode = "204",
                    description = "List is empty!",
                    content = {@Content(
                            schema = @Schema(implementation = RestExceptionHandler.class),
                            mediaType = "application/json")})
    })
    @GetMapping("/students/all")
    public ResponseEntity<List<Student>> getAllStudents(){
        return studentService.getAllStudents();
    }

    @Operation(summary = "Get a student by ID.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200",
                    description = "Student found!",
                    content = {@Content(
                            schema = @Schema(implementation = Student.class),
                            mediaType = "application/json")}),
            @ApiResponse(responseCode = "404",
                    description = "Student not found!",
                    content = {@Content(
                            schema = @Schema(implementation = RestExceptionHandler.class),
                            mediaType = "application/json")})

    })
    @GetMapping("/students/all/{id}")
    public ResponseEntity<Student> getStudentById(@PathVariable Long id){
        return studentService.getStudentById(id);
    }


    @Operation(summary = "Add a student!")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200",
                    description = "Student added!",
                    content = {@Content(
                            schema = @Schema(implementation = Student.class),
                            mediaType = "application/json")}),
            @ApiResponse(responseCode = "400",
                    description = "Field can't be null!",
                    content = {@Content(
                            schema = @Schema(implementation = RestExceptionHandler.class),
                            mediaType = "application/json")}),
            @ApiResponse(responseCode = "500",
                    description = "Field can't be blank!",
                    content = {@Content(
                            schema = @Schema(implementation = RestExceptionHandler.class),
                            mediaType = "application/json")})

    })

    @PostMapping("/students/add")
    public ResponseEntity<Student> addStudent(
            @RequestBody Student student){
        return studentService.addStudent(student);
    }

    @Operation(summary = "Update student by ID.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200",
                    description = "Student updated!",
                    content = {@Content(
                            schema = @Schema(implementation = Student.class),
                            mediaType = "application/json")}),
            @ApiResponse(responseCode = "404",
                    description = "Student not found!",
                    content = {@Content(
                            schema = @Schema(implementation = RestExceptionHandler.class),
                            mediaType = "application/json")})

    })
    @PutMapping("/students/update/{id}")
    public ResponseEntity<Student> updateStudentById(@PathVariable Long id, @RequestBody Student newStudent){
        return studentService.updateStudentById(id, newStudent);
    }


    @Operation(summary = "Delete student by ID.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200",
                    description = "Student deleted!",
                    content = {@Content(
                            schema = @Schema(implementation = Student.class),
                            mediaType = "application/json")}),
            @ApiResponse(responseCode = "404",
                    description = "Student not found!",
                    content = {@Content(
                            schema = @Schema(implementation = RestExceptionHandler.class),
                            mediaType = "application/json")})
    })
    @DeleteMapping("/students/delete/{id}")
    public ResponseEntity<Student> deleteStudentById(@PathVariable Long id){
        return studentService.deleteStudentById(id);
    }

}