package com.Portfolio.Backend_Portfolio.service;

import com.Portfolio.Backend_Portfolio.model.Educacion;
import java.util.List;

public interface IEducacionService {
    public List<Educacion> verEducacion();
    public void cargarEducacion(Educacion itemEducacion);
    public void borrarEducacion(Long id);
    public void modificarEducacion(Educacion itemEducacion);
}
