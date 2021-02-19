package com.example.bird_database.repository;

import com.example.bird_database.model.Bird;
import org.springframework.data.repository.CrudRepository;

public interface BirdRepository extends CrudRepository<Bird, Long> {
}

