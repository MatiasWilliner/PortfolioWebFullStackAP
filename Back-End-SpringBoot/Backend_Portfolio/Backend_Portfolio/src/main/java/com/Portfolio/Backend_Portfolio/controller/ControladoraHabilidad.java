package com.Portfolio.Backend_Portfolio.controller;

import com.Portfolio.Backend_Portfolio.model.Habilidad;
import com.Portfolio.Backend_Portfolio.service.IHabilidadService;
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
public class ControladoraHabilidad {
    
     @Autowired
    private IHabilidadService habilidadServ;
     
     @PostMapping ("/new/habilidad")
    public void agregarHabilidad(@RequestBody Habilidad habilidad){
        habilidadServ.cargarHabilidad(habilidad);
    }
    
    @GetMapping ("/ver/habilidad")
    @ResponseBody
    public List<Habilidad> verHabilidad(){
        return habilidadServ.verHabilidad();
    }
    
    @DeleteMapping ("/delete/habilidad/{id}")
    public void borrarHabilidad(@PathVariable Long id){
        habilidadServ.borrarHabilidad(id);
    }
    
    @PutMapping ("/edit/habilidad")
    public void modificarHabilidad(@RequestBody Habilidad habilidad){
        habilidadServ.modificarHabilidad(habilidad);
    }
}
