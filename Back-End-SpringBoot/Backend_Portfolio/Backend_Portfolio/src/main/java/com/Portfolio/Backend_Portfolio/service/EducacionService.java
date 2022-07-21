package com.Portfolio.Backend_Portfolio.service;

import com.Portfolio.Backend_Portfolio.model.Educacion;
import com.Portfolio.Backend_Portfolio.repository.EducacionRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EducacionService implements IEducacionService{

    @Autowired
    public EducacionRepository educacionRepo;
    
    @Override
    public List<Educacion> verEducacion() {
        return educacionRepo.findAll();
    }

    @Override
    public void cargarEducacion(Educacion itemEducacion) {
        educacionRepo.save(itemEducacion);
    }

    @Override
    public void borrarEducacion(Long id) {
       educacionRepo.deleteById(id);
    }

    @Override
    public void modificarEducacion(Educacion itemEducacion) {
        educacionRepo.save(itemEducacion);
    }
    
}
