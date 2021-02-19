package com.example.bird_database.service;

import com.example.bird_database.model.Bird;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

@Service
public interface BirdService {
    Iterable<Bird> getBirds();
    Bird findBirdById(Long id);
    Bird createBird(Bird bird);
    Bird updateBird(Bird bird);
    HttpStatus deleteBird(Long id);
}
