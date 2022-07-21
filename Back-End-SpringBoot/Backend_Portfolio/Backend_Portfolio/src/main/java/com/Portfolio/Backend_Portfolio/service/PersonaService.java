package com.Portfolio.Backend_Portfolio.service;

import com.Portfolio.Backend_Portfolio.model.Persona;
import com.Portfolio.Backend_Portfolio.repository.PersonaRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PersonaService implements IPersonaService{

    @Autowired
    public PersonaRepository personaRepo;
    
    @Override
    public List<Persona> verPersonas() {
        return personaRepo.findAll();
    }

    @Override
    public void cargarPersona(Persona persona) {
        personaRepo.save(persona);
    }

    @Override
    public void borrarPersona(Long id) {
        personaRepo.deleteById(id);
    }

    @Override
    public void modificarPersona(Persona persona) {
        personaRepo.save(persona);
    }
    
}
