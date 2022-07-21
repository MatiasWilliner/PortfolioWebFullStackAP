package com.Portfolio.Backend_Portfolio.repository;

import com.Portfolio.Backend_Portfolio.model.Persona;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface PersonaRepository extends JpaRepository <Persona, Long>{
    
}
