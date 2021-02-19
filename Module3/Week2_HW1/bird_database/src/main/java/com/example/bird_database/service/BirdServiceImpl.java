package com.example.bird_database.service;

import com.example.bird_database.model.Bird;
import com.example.bird_database.repository.BirdRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

@Service
public class BirdServiceImpl implements BirdService {

    @Autowired
    BirdRepository birdRepository;

    @Override
    public Iterable<Bird> getBirds() {
        return birdRepository.findAll();
    }

    @Override
    public Bird findBirdById(Long id) {
        return birdRepository.findById(id).get();
    }

    @Override
    public Bird createBird(Bird bird) {
        return birdRepository.save(bird);
    }

    @Override
    public HttpStatus deleteBird(Long id) {
        birdRepository.deleteById(id);
        return HttpStatus.OK;
    }

    @Override
    public Bird updateBird(Bird bird) {
        return birdRepository.save(bird);
    }
}
