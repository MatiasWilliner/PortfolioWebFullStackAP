package com.Portfolio.Backend_Portfolio.service;

import com.Portfolio.Backend_Portfolio.model.Proyecto;
import com.Portfolio.Backend_Portfolio.repository.ProyectoRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProyectoService implements IProyectoService{

    @Autowired
    public ProyectoRepository proyectoRepo;
    
    @Override
    public List<Proyecto> verProyecto() {
        return proyectoRepo.findAll();
    }

    @Override
    public void cargarProyecto(Proyecto itemProyecto) {
        proyectoRepo.save(itemProyecto);
    }

    @Override
    public void borrarProyecto(Long id) {
        proyectoRepo.deleteById(id);
    }

    @Override
    public void modificarProyecto(Proyecto itemProyecto) {
        proyectoRepo.save(itemProyecto);
    }
    
}
