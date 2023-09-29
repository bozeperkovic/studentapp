package com.example.backend.Controller;


import com.example.backend.Exception.RestExceptionHandler;
import com.example.backend.Model.Pupil;
import com.example.backend.Repository.PupilRepository;
import com.example.backend.Service.PupilService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class PupilController {

    private PupilRepository pupilRepository;

    private final PupilService pupilService;

    @Autowired
    public PupilController(PupilService pupilService) {
        this.pupilService = pupilService;
    }

    @GetMapping("/pupils/all")
    @Operation(summary = "Get all pupils")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200",
                    description = "List of all pupils.",
                    content = {@Content(
                            schema = @Schema(implementation = Pupil.class),
                            mediaType = "application/json")}),
            @ApiResponse(responseCode = "204",
                    description = "List is empty!",
                    content = {@Content(
                            schema = @Schema(implementation = RestExceptionHandler.class),
                            mediaType = "application/json")})
    })
    public ResponseEntity<List<Pupil>> getAllPupils() {
        return pupilService.getAllPupils();
    }

    @GetMapping("/pupils/all/{id}")
    @Operation(summary = "Get a pupil by ID.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200",
                    description = "Pupil found!",
                    content = {@Content(
                            schema = @Schema(implementation = Pupil.class),
                            mediaType = "application/json")}),
            @ApiResponse(responseCode = "404",
                    description = "Pupil not found!",
                    content = {@Content(
                            schema = @Schema(implementation = RestExceptionHandler.class),
                            mediaType = "application/json")})
    })
    public ResponseEntity<Pupil> getPupilById(@PathVariable Long id) {
        return pupilService.getPupilById(id);
    }

    @PostMapping("/pupils/add")
    @Operation(summary = "Add a pupil!")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200",
                    description = "Pupil added!",
                    content = {@Content(
                            schema = @Schema(implementation = Pupil.class),
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
    public ResponseEntity<Pupil> addPupil(@RequestBody Pupil pupil) {
        return pupilService.addPupil(pupil);

    }


    @PutMapping("/pupils/update/{id}")
    @Operation(summary = "Update pupil by ID.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200",
                    description = "Pupil updated!",
                    content = {@Content(
                            schema = @Schema(implementation = Pupil.class),
                            mediaType = "application/json")}),
            @ApiResponse(responseCode = "404",
                    description = "Student not found!",
                    content = {@Content(
                            schema = @Schema(implementation = RestExceptionHandler.class),
                            mediaType = "application/json")})

    })
    public ResponseEntity<Pupil>updatePupilById (@PathVariable Long id, @RequestBody Pupil newPupilData) {
        return pupilService.updatePupilById(id,newPupilData);
    }



    @DeleteMapping("pupils/delete/{id}")
    @Operation(summary = "Delete pupil by ID.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200",
                    description = "Pupil deleted!",
                    content = {@Content(
                            schema = @Schema(implementation = Pupil.class),
                            mediaType = "application/json")}),
            @ApiResponse(responseCode = "404",
                    description = "Student not found!",
                    content = {@Content(
                            schema = @Schema(implementation = RestExceptionHandler.class),
                            mediaType = "application/json")})
    })
    public ResponseEntity<HttpStatus> deletePupilById(@PathVariable Long id) {
        return pupilService.deletePupilById(id);
    }

}
