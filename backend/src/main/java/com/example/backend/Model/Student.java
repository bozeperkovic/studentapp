package com.example.backend.Model;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Past;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Cascade;
import org.springframework.cglib.core.Local;
import org.springframework.web.multipart.MultipartFile;


import java.time.LocalDate;
import java.time.Period;
import java.time.ZoneId;
import java.util.Date;
import java.util.*;

@Table(name="Students")
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Schema(accessMode = Schema.AccessMode.READ_ONLY)
    @Column(name = "id", updatable = false, nullable = false)
    private Long id;

    @NotBlank(message = "Potrebno ime!")
    @Column(name = "firstName",  nullable = false)
    private String firstName;

    @NotBlank(message = "Potrebno prezime!")
    @Column(name = "lastName",  nullable = false)
    private String lastName;

    @NotNull(message = "Potreban datum!")
    @Column(name = "dateOfBirth",  nullable = false)
    private LocalDate dateOfBirth;

    @NotBlank(message = "Potrebno ime sveučilišta!")
    @Column(name = "universityName",  nullable = false)
    private String universityName;

    @NotBlank(message = "Potreban tijek studija!")
    @Column(name = "courseOfStudies",  nullable = false)
    private String courseOfStudies;

    @NotBlank(message = "Potreban broj!")
    @Column(name = "phoneNumber",  nullable = false)
    private String phoneNumber;

    @NotBlank(message = "Potreban email!")
    @Column(name = "email",  nullable = false)
    private String email;

    @NotBlank(message = "Potrebno prebivalište!")
    @Column(name = "residence",  nullable = false)
    private String residence;

    @NotBlank(message = "Potrebno upisati poznate tehnologije!")
    @Column(name = "familiarTechnologies",  nullable = false)
    private String familiarTechnologies;


    @OneToMany
    @Schema(accessMode = Schema.AccessMode.READ_ONLY)
    @Cascade(org.hibernate.annotations.CascadeType.ALL)
    @Lob
    private List<StudentFile> studentFiles = new ArrayList<>();

    @Schema(accessMode = Schema.AccessMode.READ_ONLY)
    public int getAge() {
        if (dateOfBirth != null && dateOfBirth.isBefore(LocalDate.now())) {
            return Period.between(dateOfBirth, LocalDate.now()).getYears();
        } else {
            return 0;
        }
    }


}