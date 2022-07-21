package com.Portfolio.Backend_Portfolio.controller;

import com.Portfolio.Backend_Portfolio.model.HistorialLaboral;
import com.Portfolio.Backend_Portfolio.service.IHistorialLaboralService;
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
public class ControladoraHistorialLaboral {
    
    @Autowired
    private IHistorialLaboralService laboralServ;
    
    @PostMapping ("/new/laboral")
    public void agregarHistorialLaboral(@RequestBody HistorialLaboral laboral){
        laboralServ.cargarHistorialLaboral(laboral);
    }
    
    @GetMapping ("/ver/laboral")
    @ResponseBody
    public List<HistorialLaboral> verHistorialLaboral(){
        return laboralServ.verHistorialLaboral();
    }
    
    @DeleteMapping ("/delete/laboral/{id}")
    public void borrarHistorialLaboral(@PathVariable Long id){
        laboralServ.borrarHistorialLaboral(id);
    }
    
    @PutMapping ("/edit/laboral")
    public void modificarHistorialLaboral(@RequestBody HistorialLaboral laboral){
        laboralServ.modificarHistorialLaboral(laboral);
    }
}
