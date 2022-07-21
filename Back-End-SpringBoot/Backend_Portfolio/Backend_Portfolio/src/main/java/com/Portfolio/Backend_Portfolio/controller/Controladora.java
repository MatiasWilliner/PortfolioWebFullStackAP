package com.Portfolio.Backend_Portfolio.controller;


import com.Portfolio.Backend_Portfolio.model.Persona;
import com.Portfolio.Backend_Portfolio.service.IPersonaService;
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
public class Controladora {
    
    @Autowired
    private IPersonaService personaServ; 
    
    @PostMapping ("/new/persona")
    public void agregarPersona(@RequestBody Persona persona){
        personaServ.cargarPersona(persona);
    }
    
    @GetMapping ("/ver/personas")
    @ResponseBody
    public List<Persona> verPersonas(){
        return personaServ.verPersonas();
    }
    
    @DeleteMapping ("/delete/{id}")
    public void borrarPersona(@PathVariable Long id){
        personaServ.borrarPersona(id);
    }
    
    @PutMapping ("/edit/persona")
    public void modificarPersona(@RequestBody Persona persona){
        personaServ.modificarPersona(persona);
    }
    
}
