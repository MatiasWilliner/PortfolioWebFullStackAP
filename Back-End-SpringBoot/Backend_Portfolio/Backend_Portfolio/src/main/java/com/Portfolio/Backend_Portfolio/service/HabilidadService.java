package com.Portfolio.Backend_Portfolio.service;

import com.Portfolio.Backend_Portfolio.model.Habilidad;
import com.Portfolio.Backend_Portfolio.repository.HabilidadRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class HabilidadService implements IHabilidadService{

    
    @Autowired
    public HabilidadRepository habilidadRepo;
    
    @Override
    public List<Habilidad> verHabilidad() {
        return habilidadRepo.findAll();
    }

    @Override
    public void cargarHabilidad(Habilidad itemHabilidad) {
        habilidadRepo.save(itemHabilidad);
    }

    @Override
    public void borrarHabilidad(Long id) {
        habilidadRepo.deleteById(id);
    }

    @Override
    public void modificarHabilidad(Habilidad itemHabilidad) {
        habilidadRepo.save(itemHabilidad);
    }
    
}
