package com.Portfolio.Backend_Portfolio.repository;

import com.Portfolio.Backend_Portfolio.model.Habilidad;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface HabilidadRepository extends JpaRepository <Habilidad, Long> {
    
}
