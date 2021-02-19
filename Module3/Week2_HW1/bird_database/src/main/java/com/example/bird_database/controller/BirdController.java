package com.example.bird_database.controller;

import com.example.bird_database.model.Bird;
import com.example.bird_database.service.BirdService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/doges")
// http://localhost:8080/doges
public class BirdController {

    @Autowired
    BirdService birdService;

    @GetMapping
    public Iterable<Bird> getBirds() {
        return birdService.getBirds();
    }

    @GetMapping("/{id}")
    public Bird getBird(@PathVariable Long id) {
        return birdService.findBirdById(id);
    }

    @PostMapping
    public Bird createBird(@RequestBody Bird bird) {
        return birdService.createBird(bird);
    }

    @DeleteMapping("/{id}")
    public HttpStatus deleteBirdById(@PathVariable Long id) {
        return birdService.deleteBird(id);
    }

    @PatchMapping
    public Bird updateDoge(@RequestBody Bird bird) {
        return birdService.updateBird(bird);
    }
}