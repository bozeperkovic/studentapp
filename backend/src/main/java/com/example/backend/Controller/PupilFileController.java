package com.example.backend.Controller;

import com.example.backend.Model.PupilFile;
import com.example.backend.Service.PupilFileService;
import com.example.backend.Service.PupilService;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.Resource;
import org.springframework.http.*;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@CrossOrigin("http://localhost:3000")
public class PupilFileController {


    PupilFileService pupilFileService;


    private final PupilService pupilService;


    public PupilFileController(PupilFileService pupilFileService, PupilService pupilService) {
        this.pupilFileService = pupilFileService;
        this.pupilService = pupilService;
    }

    @GetMapping("/pupils/files")
    public Iterable<PupilFile> getFiles(Model model) {
        return pupilFileService.findAll();
    }

    @GetMapping("/pupils/{id}/files")
    public Iterable<PupilFile> getFilesFromOne(@PathVariable Long id) {
        return pupilFileService.findByPupil(pupilService.findById(id).getBody());
    }


    @PostMapping(value = "/pupils/{id}/files",
            consumes = {MediaType.MULTIPART_FORM_DATA_VALUE},
            produces = {MediaType.APPLICATION_JSON_VALUE})
    public Iterable<PupilFile> uploadFile(@PathVariable Long id, @RequestParam MultipartFile file1) {
        try {
            pupilFileService.save(new PupilFile(file1.getOriginalFilename(), file1.getContentType(), file1.getBytes(), pupilService.getPupilById(id)));
//            pupilFileService.save(new PupilFile(file2.getOriginalFilename(), file2.getContentType(), file2.getBytes(), pupilService.getPupilById(id)));
//            pupilFileService.save(new PupilFile(file3.getOriginalFilename(), file3.getContentType(), file3.getBytes(), pupilService.getPupilById(id)));
//            pupilFileService.save(new PupilFile(file4.getOriginalFilename(), file4.getContentType(), file4.getBytes(), pupilService.getPupilById(id)));
        }
        catch (Exception e) {
            e.printStackTrace();
        }

        return pupilFileService.findByPupil(pupilService.findById(id).getBody());

    }

    @GetMapping("/pupils/files/{id}")
    public ResponseEntity<Resource> downloadFile(@PathVariable("id") Long id) {
        PupilFile file = pupilFileService.findById(id);
        ByteArrayResource resource = new ByteArrayResource(file.getData());
        HttpHeaders headers = new HttpHeaders();
        headers.setContentDisposition(ContentDisposition.inline().filename(file.getDocName()).build());
        headers.setContentType(MediaType.parseMediaType(file.getDocType()));
        return new ResponseEntity<>(resource, headers, HttpStatus.OK);
    }

    @DeleteMapping("/pupils/files/{id}")
    public void deleteFile(@PathVariable("id") Long id) {
        pupilFileService.deleteById(id);
    }
}
