package com.example.backend.Model;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.http.ResponseEntity;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class StudentFile {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String docName;
    private String docType;

    private Integer docSize;
    @Lob
    private byte[] data;

    @ManyToOne
    private Student student;


    public StudentFile(String docName, String docType, byte[] data, Student student) {
        this.docName = docName;
        this.docType = docType;
        this.data = data;
        this.student = student;
        this.docSize = data.length;
    }

}