package com.Portfolio.Backend_Portfolio.controller;

import com.Portfolio.Backend_Portfolio.model.Educacion;
import com.Portfolio.Backend_Portfolio.service.IEducacionService;
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
public class ControladoraEducacion {
    
    @Autowired
    private IEducacionService educacionServ;
    
    @PostMapping ("/new/educacion")
    public void agregarEducacion(@RequestBody Educacion educacion){
        educacionServ.cargarEducacion(educacion);
    }
    
    @GetMapping ("/ver/educacion")
    @ResponseBody
    public List<Educacion> verEducacion(){
        return educacionServ.verEducacion();
    }
    
    @DeleteMapping ("/delete/educacion/{id}")
    public void borrarEducacion(@PathVariable Long id){
        educacionServ.borrarEducacion(id);
    }
    
    @PutMapping ("/edit/educacion")
    public void modificarEducacion(@RequestBody Educacion educacion){
        educacionServ.modificarEducacion(educacion);
    }
}
