
package com.Portfolio.Backend_Portfolio.service;

import com.Portfolio.Backend_Portfolio.model.Persona;
import java.util.List;


public interface IPersonaService {
    public List<Persona> verPersonas();
    public void cargarPersona(Persona persona);
    public void borrarPersona(Long id);
    public void modificarPersona(Persona persona);
}
