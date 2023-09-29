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
public class PupilFile {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String docName;
    private String docType;

    private Integer docSize;
    @Lob
    private byte[] data;

    @ManyToOne
    private Pupil pupil;


    public PupilFile(String docName, String docType, byte[] data, ResponseEntity<Pupil> pupil) {
        this.docName = docName;
        this.docType = docType;
        this.data = data;
        this.pupil = pupil.getBody();
        this.docSize = data.length;
    }
}