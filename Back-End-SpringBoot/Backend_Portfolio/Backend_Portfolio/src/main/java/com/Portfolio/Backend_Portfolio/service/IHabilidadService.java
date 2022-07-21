package com.Portfolio.Backend_Portfolio.service;

import com.Portfolio.Backend_Portfolio.model.Habilidad;
import java.util.List;

public interface IHabilidadService {
   public List<Habilidad> verHabilidad();
    public void cargarHabilidad(Habilidad itemHabilidad);
    public void borrarHabilidad(Long id);
    public void modificarHabilidad(Habilidad itemHabilidad); 
}
