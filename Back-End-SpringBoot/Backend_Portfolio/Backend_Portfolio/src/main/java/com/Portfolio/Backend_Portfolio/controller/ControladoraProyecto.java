package com.Portfolio.Backend_Portfolio.controller;

import com.Portfolio.Backend_Portfolio.model.Proyecto;
import com.Portfolio.Backend_Portfolio.service.IProyectoService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControladoraProyecto {
    
    @Autowired
    private IProyectoService proyectoServ;
     
    @PostMapping ("/new/proyecto")
    public void agregarProyecto(@RequestBody Proyecto proyecto){
        proyectoServ.cargarProyecto(proyecto);
    }
    
    @GetMapping ("/ver/proyecto")
    @ResponseBody
    public List<Proyecto> verProyecto(){
        return proyectoServ.verProyecto();
    }
    
    @DeleteMapping ("/delete/proyecto/{id}")
    public void borrarProyecto (@PathVariable Long id){
        proyectoServ.borrarProyecto(id);
    }
    
    @PutMapping ("/edit/proyecto")
    public void modificarProyecto(@RequestBody Proyecto proyecto){
        proyectoServ.modificarProyecto(proyecto);
    }
}
