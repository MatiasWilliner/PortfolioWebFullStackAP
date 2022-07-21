package com.Portfolio.Backend_Portfolio.service;

import com.Portfolio.Backend_Portfolio.model.HistorialLaboral;
import com.Portfolio.Backend_Portfolio.repository.HistorialLaboralRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class HistorialLaboralService implements IHistorialLaboralService{

    @Autowired
    public HistorialLaboralRepository laboralRepo;
    
    @Override
    public List<HistorialLaboral> verHistorialLaboral() {
        return laboralRepo.findAll();
    }

    @Override
    public void cargarHistorialLaboral(HistorialLaboral itemEducacion) {
        laboralRepo.save(itemEducacion);
    }

    @Override
    public void borrarHistorialLaboral(Long id) {
        laboralRepo.deleteById(id);
    }

    @Override
    public void modificarHistorialLaboral(HistorialLaboral itemEducacion) {
        laboralRepo.save(itemEducacion);
    }
    
}
